import { User } from '@core/modules/auth/models/user';
import { State } from 'vue';

export interface AuthState extends State {
  isAuthenticated: boolean;
  currentUser: User | null;
}

export default {
  isAuthenticated: false,
} as AuthState;
