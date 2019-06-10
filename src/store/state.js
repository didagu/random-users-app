const user = JSON.parse(localStorage.getItem("user"));
let status = user ? { loggedIn: true } : { loggedIn: false };

export default {
  usersCompleteInfo: [],
  usersBasicInfo: [],
  usersAdvancedInfo: [],
  rows: 0,
  status,
  user
};
