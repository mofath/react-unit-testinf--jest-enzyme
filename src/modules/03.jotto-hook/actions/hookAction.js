import axios from "axios";

export const getSecretWord = (setSecretWord) => {
  const response = axios.get("#");
  setSecretWord(response.data);
};

export default {
  getSecretWord,
};
