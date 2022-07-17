import axios from "axios";

const SERVER_URL = "http://localhost:5000";

export const signUp = async (data: any) => {
  axios
    .post(`${SERVER_URL}/user/register`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const signIn = async (data: any) => {
  // axios
  //   .post(`${SERVER_URL}/user/login`, data)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.log(err));
  axios
    .post(
      "https://www.googleapis.com/gmail/v1/users/me/watch",
      {},
      {
        headers: {
          Authorization: "Bearer " + "AIzaSyBHrWfxaWI6yNhV7C_u6iGr18thzWzAldE",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const verifyEmail = async (token: string) => {
  const res = await axios
    .post(`${SERVER_URL}/user/verify/${token}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err: any) => {
      return err.response.data;
    });

  return res;
};

export const resendVerification = async (email: string) => {
  axios
    .post(`${SERVER_URL}/user/resend/${email}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
