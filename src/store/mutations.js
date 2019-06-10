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
  }
};
