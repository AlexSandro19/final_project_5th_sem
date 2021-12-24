import axios from "axios";


const emailUrl = "/api/contact";


export const contactEmail = (name, email, subject, message ) => {
    return axios
      .post(emailUrl, { name, email, subject, message})
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw error.response.data;
      });
  };