export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          role: 'student' | 'instructor'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          role: 'student' | 'instructor'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'student' | 'instructor'
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string | null
          instructor_id: string
          thumbnail_url: string | null
          duration: string | null
          level: 'Beginner' | 'Intermediate' | 'Advanced' | null
          price: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          instructor_id: string
          thumbnail_url?: string | null
          duration?: string | null
          level?: 'Beginner' | 'Intermediate' | 'Advanced' | null
          price?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          instructor_id?: string
          thumbnail_url?: string | null
          duration?: string | null
          level?: 'Beginner' | 'Intermediate' | 'Advanced' | null
          price?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          id: string
          student_id: string
          course_id: string
          enrolled_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          student_id: string
          course_id: string
          enrolled_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          student_id?: string
          course_id?: string
          enrolled_at?: string
          completed_at?: string | null
        }
      }
    }
  }
}