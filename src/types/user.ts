export interface User {
  id: number;
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  bio?: string;
  role: "admin" | "user";
  avatar: string;
}
