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
        computed : {
            getUser() {
                return this.user
            }
        }
    }
</script>
