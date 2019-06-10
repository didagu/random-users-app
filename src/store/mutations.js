export default {
  SET_COMPLETE_USERS: (state, payload) => {
    state.usersCompleteInfo = payload;
  },
  SET_BASIC_USERS: (state, payload) => {
    state.usersBasicInfo = payload;
  },
  SET_ADVANCED_USERS: (state, payload) => {
    state.usersAdvancedInfo = payload;
  },
  SET_ROWS: (state, payload) => {
    state.rows = payload;
  },
  LOGIN_REQUEST(state, user) {
    state.status = {
      loggingIn: true
    };
    state.user = user;
  },
  LOGIN_SUCCESS(state, user) {
    state.status = {
      loggedIn: true
    };
    state.user = user;
  },
  LOGIN_FAILURE(state) {
    state.status = {
      loggedIn: false
    };
    state.user = null;
  },
  LOGOUT(state) {
    state.status = {
      loggedIn: false
    };
    state.user = null;
  }
};
