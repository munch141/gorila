import { User } from '@core/modules/auth/models/user';
import { auth } from '@core/firebase';

export default {
  async login(): Promise<User | null> {
    const userCredential = await auth.signInWithEmailAndPassword('mail@mail.com', 'Ekprmc9293-');
    const { user } = userCredential;

    if (user) {
      return {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      } as User;
    }

    return null;
  },
};
