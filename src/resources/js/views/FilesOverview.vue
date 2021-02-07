<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <upload-file  v-if="userLoggedIn"  @add="addFile" />
                <file-list  v-if="userLoggedIn" :files="userFiles" @remove="removeFile"/>
                <logged-out v-if="!userLoggedIn" />
            </div>
        </div>
    </div>
</template>

<script>
import FileList from '../components/FilesOverview/FileList.vue'
import LoggedOut from '../components/FilesOverview/LoggedOut.vue'
import UploadFile from '../components/FilesOverview/UploadFile.vue'
export default {
    components: { LoggedOut, UploadFile, FileList },
    data: function () {
        return {
            files: null
        }
    },
    props: {
        user: {
            type: Object,
            required: false,
            default: false
        }
    },
    computed: {
        getUser() {
            return this.user
        },
        userLoggedIn () {
            return !!this.user   
        },
        userFiles () {
            return this.files
        }
    },
    created () {
        this.getFilesForUser()
    },
    methods: {
        getFilesForUser() {
            axios.get('getfiles')
                .then (res => {
                   this.files = res.data
                })
        },
        removeFile(deletingFile) {
            this.files = this.files.filter(function( file ) {
                return file.file_name !== deletingFile
            });
        },
        addFile(file) {
            if (this.files.filter(e => e.id === file.id).length > 0) {
                return
            } else {
                this.files.push(file)
            }    
        }
    }
}
</script>