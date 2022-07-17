import axios from "axios";

const SERVER_URL = "http://localhost:5000";
export const getLetters = async () => {
  axios
    .get(`${SERVER_URL}/letter`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const addLetter = async (data: any) => {
  axios
    .post(`${SERVER_URL}/letter/new`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const editLetter = async (data: any, l_Id: string) => {
  axios
    .post(`${SERVER_URL}/letter/edit/${l_Id}`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const likeLetter = async (type: string, email: string, id: string) => {
  axios
    .post(`${SERVER_URL}/letter/like/${type}/${email}/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const unlikeLetter = async (type: string, email: string, id: string) => {
  axios
    .post(`${SERVER_URL}/letter/unlike/${type}/${email}/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const deleteLetter = async (id: any) => {
  axios
    .delete(`${SERVER_URL}/letter/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
