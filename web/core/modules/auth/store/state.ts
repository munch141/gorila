import { User } from '@core/modules/auth/models/user';
import { State } from 'vue';

export interface AuthState extends State {
  isAuthenticated: boolean;
  user: User | null;
  didAutoLogout: boolean;
}

export default {
  isAuthenticated: false,
  didAutoLogout: false,
} as AuthState;
