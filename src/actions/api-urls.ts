import { path } from "utils/helpUrl";

// const BASE_URL = "http://localhost:5000/";
const BASE_URL = "https://api.madreply.com/";

export const AUTH_API = {
  login: path(BASE_URL, "user/login"),
  register: path(BASE_URL, "user/register"),
  verify: path(BASE_URL, "user/verify/"),
  resend: path(BASE_URL, "user/resend/"),
  logout: path(BASE_URL, "user/logout"),
  forget: path(BASE_URL, "user/forget/"),
  resetpass: path(BASE_URL, "user/resetpass"),
};

export const LETTER_API = {
  get: path(BASE_URL, "letter/"),
  getByEmail: path(BASE_URL, "letter/email/"),
  addnew: path(BASE_URL, "letter/new"),
  edit: path(BASE_URL, "letter/edit/"),
  removeById: path(BASE_URL, "letter/"),
  recommend: path(BASE_URL, "letter/like/"),
  opposite: path(BASE_URL, "letter/unlike/"),
  addComment: path(BASE_URL, "letter/addcomment"),
  removeComment: path(BASE_URL, "letter/comment/one/"),
};

export const EMAIL_API = {
  gmailAuth: path(BASE_URL, "auth/gmailAuth/"),
  oauthCallback: path(BASE_URL, "auth/oauth2Callback"),
  getMessages: path(BASE_URL, "gmail/getMessages"),
  getMessageById: path(BASE_URL, "gmail/getMessage/"),
  publishEmail: path(BASE_URL, "email/publish"),
  getPublicEmails: path(BASE_URL, "email"),
  getPublicEmailById: path(BASE_URL, "email/get/"),
  setLike: path(BASE_URL, "email/like/"),
  setUnlike: path(BASE_URL, "email/unlike/"),
};
