<template>
    <files-overview :user="getUser"/>
</template>

<script>
import FilesOverview from './views/FilesOverview.vue'
    export default {
  components: { FilesOverview },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
        mounted() {
            console.log('Component mounted.', this.getUser)
        }
    ,
    computed : {
        getUser() {
            return this.user
        }
    }
    }
</script>
