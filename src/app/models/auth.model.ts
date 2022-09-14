import { User } from '@angular/fire/auth';

export interface AuthStateModel {
  auth: boolean;
  user: string;
}
