import { Document } from 'mongoose';
import { Role } from './role.enum';

export interface User extends Document {
  name: string;
  registration: string;
  email: string;
  password: string;
  sexo: string;
  roles: Role[];
}
