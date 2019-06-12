<template>
    <div>
        <b-table
        id="users-table"
        :striped="striped"
        :bordered="bordered"
        :outlined="outlined"
        :small="small"
        :hover="hover"
        :fixed="fixed"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        :sort-desc.sync="sortDesc"
        @row-clicked="myRowClickHandler"
        ></b-table>

        <p class="mt-3" align="left">Current Page: {{ currentPage }}</p>

        <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="users-table"
        ></b-pagination>
    </div>
    
</template>

<script>
export default {
    name: "users-table",
    props:{
        items: Array,
        rows: Number
    },
    data() {
        return {
            perPage: 10,
            currentPage: 1,
            sortDesc: false,
            fields:[
                { key: 'name', sortable: true },
                { key: 'gender', sortable: true },
                { key: 'age', sortable: true },
                { key: 'address', sortable: true }
            ],
            striped: true,
            bordered: true,
            outlined: true,
            small: true,
            hover: true,
            fixed: true
        }
    },
    methods: {
        myRowClickHandler({ id }) {
            this.$router.push({ name: 'user', params: { userId: id } })
        }
    }
}
</script>