<template>
  <div>
    <b-row align-h="center">
      <b-col cols="8">
        <b-row align-h="center">
          <img :src="user.thumbnail" id="user_avatar" alt="user avatar">
        </b-row>
        <br>
        <b-row>
          <b-col class="left-column">Name:</b-col>
          <b-col class="right-column" id="user_name">{{ user.name }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Gender:</b-col>
          <b-col class="right-column" id="user_gender">{{ user.gender }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Date of Birth:</b-col>
          <b-col class="right-column" id="user_dob">{{ user.dob }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Age:</b-col>
          <b-col class="right-column" id="user_age">{{ user.age }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Address:</b-col>
          <b-col class="right-column" id="user_address">{{ user.address }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Country:</b-col>
          <b-col class="right-column" id="user_country">{{ user.country }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Timezone:</b-col>
          <b-col class="right-column" id="user_timezone">{{ user.timezone }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Email:</b-col>
          <b-col class="right-column" id="user_email">{{ user.email }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Phone Number:</b-col>
          <b-col class="right-column" id="user_phone_number">{{ user.phone_number }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Date of Registration:</b-col>
          <b-col class="right-column" id="user_registration_date">{{ user.registration_date }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Account Age:</b-col>
          <b-col class="right-column" id="user_account_age">{{ user.account_age }}</b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "user",
  computed: {
    user() {
      return this.$store.getters.getUserById;
    }
  }
};
</script>

<style scoped>
.left-column {
  text-align: right;
  font-weight: bold;
  padding-right: 0px;
}

.right-column {
  text-align: left;
  padding-left: 10px;
}
</style>
