import usersApi from "@/services/api/users";
import router from "@/router";
const { DateTime } = require("luxon");
const PICTURE_URL = "https://api.adorable.io/avatars";

export default {
  GET_COMPLETE_USERS_LIST: ({ commit }) => {
    return usersApi
      .getUsers()
      .then(users => {
        commit("SET_COMPLETE_USERS", users);
        commit("SET_ROWS", users.length);
      })
      .catch(error => console.log(error));
  },
  GET_BASIC_USERS_LIST: ({ commit, state }) => {
    const { usersCompleteInfo } = state;
    let users = usersCompleteInfo.map((user, index) => {
      return {
        id: index,
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        age: user.dob.age,
        address: `${user.location.street}, ${user.location.postcode} ${
          user.location.city
        }`
      };
    });
    commit("SET_BASIC_USERS", users);
  },
  GET_ADVANCED_USERS_LIST: ({ commit, state }) => {
    const { usersCompleteInfo } = state;
    let users = usersCompleteInfo.map((user, index) => {
      return {
        id: index,
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        age: user.dob.age,
        address: `${user.location.street}, ${user.location.postcode} ${
          user.location.city
        }`,
        country: user.nat,
        timezone: `${user.location.timezone.offset}, ${
          user.location.timezone.description
        }`,
        email: user.email,
        dob: DateTime.fromISO(user.dob.date).toFormat("dd/MM/yyyy"),
        registration_date: DateTime.fromISO(user.registered.date).toFormat(
          "dd/MM/yyyy"
        ),
        account_age: user.registered.age,
        phone_number: user.phone,
        thumbnail: `${PICTURE_URL}/150/${user.login.username}`,
        full_picture: `${PICTURE_URL}/500/${user.login.username}`
      };
    });
    commit("SET_ADVANCED_USERS", users);
  },
  LOGIN({ commit }, { username, password }) {
    commit("LOGIN_REQUEST", {
      username
    });

    usersApi.login(username, password).then(
      user => {
        commit("LOGIN_SUCCESS", user);
        router.push("/users");
      },
      error => {
        commit("LOGIN_FAILURE", error);
      }
    );
  },
  LOGOUT({ commit }) {
    usersApi.logout();
    commit("LOGOUT");
  }
};
