import axios from "axios";

const instance = axios.create({
  // the API (cloud function) URL
  baseURL: "https://us-central1-clone-b1ea9.cloudfunctions.net/api",
  // API for debugging
  // "http://localhost:5001/clone-b1ea9/us-central1/api",
});

export default instance;
