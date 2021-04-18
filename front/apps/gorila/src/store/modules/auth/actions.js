import { auth } from '../../../firebase';

export default {
  async login(context, password) {
    await auth
      .signInWithEmailAndPassword('mail@mail.com', password)
      .then((userCredential) => context.commit('setUser', userCredential.user.toJSON()));
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // });
  },

  async logout(context) {
    await auth.signOut();
    context.commit('setUser', null);
  },
};
