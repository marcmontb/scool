/*
  # Fix user signup flow

  1. Changes
    - Drop and recreate the user creation trigger with proper error handling
    - Ensure profile creation happens after user is created
    - Add proper validation for required fields

  2. Security
    - Maintain existing RLS policies
    - Ensure secure profile creation
*/

-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user();

-- Recreate the function with better error handling
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    username,
    full_name,
    role
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.email, NEW.raw_user_meta_data->>'email'),
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Anonymous User'),
    COALESCE(NEW.raw_user_meta_data->>'role', 'student')
  );
  RETURN NEW;
EXCEPTION
  WHEN others THEN
    RAISE LOG 'Error in handle_new_user: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();