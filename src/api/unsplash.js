import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID SX9IlMlVb9DDUFFlS22Lpu_tn980EelMdpC4VPiSAgY",
  },
});
