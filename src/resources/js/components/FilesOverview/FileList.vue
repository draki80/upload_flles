<template>
    <div>
        <v-toolbar
            color="light-blue"
            dark
        >
        <v-toolbar-title>My files</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-list
            subheader
            two-line
        >
            <v-list-item
                v-for="file in files"
                :key="file.id"
            >
                <v-list-item-avatar>
                <v-icon
                    :class="'blue'"
                    dark
                    v-text="'mdi-clipboard-text'"
                ></v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-text="file.file_name"></v-list-item-title>

                <v-list-item-subtitle v-text="file.file_name"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn
                        class="ma-2"
                        color="danger"
                        @click="deleteFile(file.file_name)"
                    >
                        Delete
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
        return {
           
        }
    },
    props: {
        files: {
            type: Array,
            required: false,
            default: []
        }
    },
    methods: {
        deleteFile(file) {
            axios.delete('delete', {
                data: {
                    file: file
                }
            })
            .then (res => {
                this.$emit('remove', file)
                console.log(res)
            })
        }
    }
}
</script>