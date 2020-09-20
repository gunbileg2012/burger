import URL from "axios";
export const SignUpUser = (email, password) => {
  return function (dispatch) {
    dispatch(SignUpUserStart());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    URL.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRrWkYS8J4rq6KoJRiQLKH34hzHFvjwao",
      data
    )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        dispatch(SignUpUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(SignUpUserError(error));
      });
    //
  };
};
export const SignUpUserStart = () => {
  return {
    type: "SignUpUserStart",
  };
};

export const SignUpUserSuccess = (resultData) => {
  console.log(resultData);
  return {
    type: "SignUpUserSuccess",
    resultData: resultData,
  };
};

export const SignUpUserError = (error) => {
  console.log(error);
  return {
    type: "SignUpUserError",
    error: error,
  };
};
