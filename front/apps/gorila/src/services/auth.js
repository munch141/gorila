const isDevEnvironment = window.location.hostname === 'localhost';
const apiKey = process.env.VUE_APP_FIREBASE_API_KEY;
const apiUrl = isDevEnvironment
  ? 'http://localhost:9099/identitytoolkit.googleapis.com/v1'
  : `${process.env.VUE_APP_FIREBASE_AUTH_DOMAIN}/v1`;

export default {
  async login(password) {
    const response = await fetch(`${apiUrl}/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'mail@mail.com',
        password,
        returnSecureToken: true,
      }),
    });

    if (response.ok) {
      const authInfo = await response.json();

      return {
        token: authInfo.idToken,
        tokenExpiresIn: authInfo.expiresIn * 1000,
        user: {
          id: authInfo.localId,
          name: authInfo.displayName,
          email: authInfo.email,
          photoUrl: authInfo.photoURL,
        },
      };
    }

    return null;
  },
};
