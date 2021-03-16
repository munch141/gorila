import { User } from './user';

interface AuthInfo {
  token: string;
  tokenExpiresIn: number;
  user: User;
}

export { AuthInfo };
