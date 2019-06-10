import axios from "axios";
import users_whitelist from "@/services/data/users_whitelist";

export default {
  getUsers() {
    const { VUE_APP_ROOT_API, VUE_APP_SEED } = process.env;
    return axios
      .get(`${VUE_APP_ROOT_API}?seed=${VUE_APP_SEED}&results=30`)
      .then(res => {
        return res.data.results;
      })
      .catch(err => console.log(err));
  },
  login(username, password) {
    const exist = users_whitelist.some(user => {
      return user.username === username && user.password === password;
    });
    return new Promise((resolve, reject) => {
      if (exist) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username,
            password
          })
        );
        resolve(username);
      } else {
        reject(new Error("Invalid credentials, user does not exist"));
      }
    });
  },
  logout() {
    localStorage.removeItem("user");
  }
};
