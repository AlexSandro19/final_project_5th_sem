import { CONTACT_FORM_SENDING, CONTACT_FORM_SUCCESS } from "../constants/contact";

export const contactFormRequest = ({ name, email, subject, message }) => {
    console.log(name);
    console.log(subject)
    console.log(email);
    console.log(message)
  return {
    type: CONTACT_FORM_SENDING,
    payload: { name, email, subject, message },
  };
};

export const contactFormSuccess = ({ message }) => {
    console.log(message)
  return {
    type: CONTACT_FORM_SUCCESS,
    payload: { message },
  };
};