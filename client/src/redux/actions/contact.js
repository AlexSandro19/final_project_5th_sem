import { CONTACT_FORM_SENDING, CONTACT_FORM_SUCCESS } from "../constants/contact";

export const contactFormRequest = ({ name, email, subject, message },form) => {
  return {
    type: CONTACT_FORM_SENDING,
    payload: { name, email, subject, message },
  };
};

export const contactFormSuccess = ({ message }) => {
  return {
    type: CONTACT_FORM_SUCCESS,
    payload: { message },
  };
};