import { auth } from '../firebase';

const email = 'mail@mail.com';

export default {
  async login(password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => userCredential.user)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    return userCredential.user.toJSON();
  },

  async autoLogin(refreshToken) {
    const userCredential = await auth.signInWithCustomToken(email, password);

    return userCredential.user.toJSON();
  },
};
