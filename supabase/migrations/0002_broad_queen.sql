/*
  # Add Sample Course Data

  1. Changes
    - Create a function to insert sample data that can be called after user creation
    - Add a trigger to automatically create a sample course when an instructor signs up
*/

-- Create a function to add a sample course for new instructors
CREATE OR REPLACE FUNCTION create_sample_course()
RETURNS trigger AS $$
BEGIN
  -- Only create sample course for instructors
  IF NEW.role = 'instructor' THEN
    INSERT INTO courses (
      title,
      description,
      instructor_id,
      thumbnail_url,
      duration,
      level,
      price
    ) VALUES (
      'Introduction to Web Development',
      'Learn the fundamentals of web development including HTML, CSS, and JavaScript. Perfect for beginners looking to start their journey in web development.',
      NEW.id,
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      '12 hours',
      'Beginner',
      49.99
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to add sample course after profile creation
DROP TRIGGER IF EXISTS on_instructor_created ON profiles;
CREATE TRIGGER on_instructor_created
  AFTER INSERT ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION create_sample_course();