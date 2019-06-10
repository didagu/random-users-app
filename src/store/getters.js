export default {
  getUserById: state => {
    const id = parseInt(state.route.params.userId);
    return state.usersAdvancedInfo.find(user => {
      return user.id === id;
    });
  }
};
