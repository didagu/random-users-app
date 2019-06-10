<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="/">Random Users App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-button v-if="!status.loggedIn" size="sm" class="my-2 my-sm-0" type="submit" variant="primary" href="/login">Login</b-button>
                    <b-button v-if="status.loggedIn" size="sm" class="my-2 my-sm-0" type="submit" variant="secondary" href="/login">Logout</b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>       
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Header",
    computed: {
        ...mapState(["status"])
    }    
}
</script>