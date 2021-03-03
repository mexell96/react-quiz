import axios from "axios";

export default axios.create({
  baseURL: "https://quiz-4fff1-default-rtdb.firebaseio.com/",
});
