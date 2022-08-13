import axios from "axios";

const KEY = "AIzaSyCNhYcpoZSYkvzxcSov1taIl9ORTOSq4rM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
