<template>
  <div>
    <b-row align-h="center">
      <b-col cols="8">
        <b-row align-h="center">
          <img :src="user.thumbnail" alt>
        </b-row>
        <br>
        <b-row>
          <b-col class="left-column">Name:</b-col>
          <b-col class="right-column">{{ user.name }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Gender:</b-col>
          <b-col class="right-column">{{ user.gender }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Date of Birth:</b-col>
          <b-col class="right-column">{{ user.dob }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Age:</b-col>
          <b-col class="right-column">{{ user.age }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Address:</b-col>
          <b-col class="right-column">{{ user.address }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Country:</b-col>
          <b-col class="right-column">{{ user.country }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Timezone:</b-col>
          <b-col class="right-column">{{ user.timezone }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Email:</b-col>
          <b-col class="right-column">{{ user.email }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Phone Number:</b-col>
          <b-col class="right-column">{{ user.phone_number }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Date of Registration:</b-col>
          <b-col class="right-column">{{ user.registration_date }}</b-col>
        </b-row>
        <b-row>
          <b-col class="left-column">Account Age:</b-col>
          <b-col class="right-column">{{ user.account_age }}</b-col>
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
