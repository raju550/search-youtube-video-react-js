import axios from "axios";
const KEY = "AIzaSyAzRD80z8W7lxnHWBBCUqwt67JWEUjW6ts";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
