export function signInRequest(email, senha) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, senha },
  };
}

export function signInSucess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInFailure(message) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: { message },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
