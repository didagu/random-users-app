<template>
  <div>
    <h1>Random Users Table</h1>
    <b-row align-h="center">
      <b-col cols="8">
        <UsersTable :items="usersBasicInfo" :rows="rows" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import UsersTable from "../components/UsersTable";
import { mapState } from "vuex";

export default {
  name: "users",
  components: {
    UsersTable
  },
  data() {
    return {};
  },
  created() {
    if (this.rows < 1) {
      this.$store.dispatch("GET_COMPLETE_USERS_LIST").then(() => {
        this.$store.dispatch("GET_BASIC_USERS_LIST");
        this.$store.dispatch("GET_ADVANCED_USERS_LIST");
      });
    }
  },
  computed: {
    ...mapState(["usersBasicInfo", "rows"])
  }
};
</script>
