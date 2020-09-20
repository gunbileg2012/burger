import URL from "axios";
export const SignInUser = (email, password) => {
  return function (dispatch) {
    dispatch(SignInUserStart());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    URL.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRrWkYS8J4rq6KoJRiQLKH34hzHFvjwao",
      data
    )
      .then((result) => {
        // localStorage save process....
        const token = result.data.idToken;
        const userId = result.data.localId;
        const expiresIn = result.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const refreshToken = result.data.refreshToken;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expireDate", token);
        localStorage.setItem("refreshToken", userId);

        dispatch(SignInUserSuccess(result.data));
        dispatch(autoLogout(expiresIn * 1000));
        // dispatch(autoLogout(expireDate));
      })
      .catch((error) => {
        dispatch(SignInUserError(error));
      });
    //
  };
};
export const SignInUserStart = () => {
  return {
    type: "SignInUserStart",
  };
};

export const SignInUserSuccess = (resultData) => {
  return {
    type: "SignInUserSuccess",
    resultData: resultData,
  };
};
export const SignInUserSuccessStorage = (token, userId) => {
  return {
    type: "SignInUserSuccessStorage",
    token,
    userId,
  };
};
export const SignInUserError = (error) => {
  return {
    type: "SignInUserError",
    error: error,
  };
};

export const Logout = () => {
  return {
    type: "Logout",
  };
};
export const autoLogout = (ms) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(Logout());
    }, ms);
  };
};
