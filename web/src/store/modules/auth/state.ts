import { State } from 'vue';

export interface AuthState extends State {
  isAuthenticated: boolean;
}

export default {
  isAuthenticated: false,
} as AuthState;
