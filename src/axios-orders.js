import axios from "axios";
const instance = axios.create({
  baseURL: "https://burger-a2b0f.firebaseio.com/",
});
export default instance;
