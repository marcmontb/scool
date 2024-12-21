/*
  # Add Sample Courses

  1. Changes
    - Insert sample courses directly for testing and demonstration
*/

-- Insert sample courses
INSERT INTO courses (
  title,
  description,
  instructor_id,
  thumbnail_url,
  duration,
  level,
  price
) 
SELECT 
  'Complete Web Development Bootcamp',
  'Master full-stack web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more.',
  id,
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80',
  '40 hours',
  'Beginner',
  99.99
FROM profiles 
WHERE role = 'instructor'
LIMIT 1;

INSERT INTO courses (
  title,
  description,
  instructor_id,
  thumbnail_url,
  duration,
  level,
  price
) 
SELECT 
  'Advanced JavaScript Patterns',
  'Deep dive into advanced JavaScript concepts including design patterns, performance optimization, and best practices.',
  id,
  'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
  '20 hours',
  'Advanced',
  149.99
FROM profiles 
WHERE role = 'instructor'
LIMIT 1;