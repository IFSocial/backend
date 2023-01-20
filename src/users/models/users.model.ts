import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  registration: string;
  email: string;
  password: string;
  sexo: string;
  roles: 'admin' | 'user';
}
