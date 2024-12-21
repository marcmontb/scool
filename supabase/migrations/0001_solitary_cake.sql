/*
  # Initial Schema Setup

  1. New Tables
    - profiles
      - id (uuid, references auth.users)
      - username (text)
      - full_name (text)
      - avatar_url (text)
      - role (text: student/instructor)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - courses
      - id (uuid)
      - title (text)
      - description (text)
      - instructor_id (uuid, references profiles)
      - thumbnail_url (text)
      - duration (text)
      - level (text)
      - price (numeric)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - enrollments
      - id (uuid)
      - student_id (uuid, references profiles)
      - course_id (uuid, references courses)
      - enrolled_at (timestamp)
      - completed_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for each table
*/

-- Profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  username text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  role text NOT NULL CHECK (role IN ('student', 'instructor')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Courses table
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  instructor_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  thumbnail_url text,
  duration text,
  level text CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  price numeric CHECK (price >= 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Courses are viewable by everyone"
  ON courses FOR SELECT
  USING (true);

CREATE POLICY "Instructors can create courses"
  ON courses FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role = 'instructor'
    )
  );

CREATE POLICY "Instructors can update own courses"
  ON courses FOR UPDATE
  USING (instructor_id = auth.uid());

-- Enrollments table
CREATE TABLE enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  enrolled_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  UNIQUE(student_id, course_id)
);

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view own enrollments"
  ON enrollments FOR SELECT
  USING (student_id = auth.uid());

CREATE POLICY "Students can enroll in courses"
  ON enrollments FOR INSERT
  WITH CHECK (student_id = auth.uid());

-- Functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, role)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    COALESCE(new.raw_user_meta_data->>'role', 'student')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();