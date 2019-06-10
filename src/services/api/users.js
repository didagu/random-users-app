import axios from "axios";

export default {
  getUsers() {
    const { VUE_APP_ROOT_API, VUE_APP_SEED } = process.env;
    return axios
      .get(`${VUE_APP_ROOT_API}?seed=${VUE_APP_SEED}&results=30`)
      .then(res => {
        return res.data.results;
      })
      .catch(err => console.log(err));
  }
};
