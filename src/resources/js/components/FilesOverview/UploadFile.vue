<template>
    <div class="row justify-content-end">
        <v-file-input
            show-size
            label="Upload a file"
            @change="fileSelected"
        ></v-file-input>

        <v-btn
            :loading="loading"
            :disabled="loading"
            color="blue-grey pull-right"
            class="ma-2 white--text"
            @click="upload"
            >
            Upload
            <v-icon 
                right
                dark
            >
                mdi-cloud-upload
            </v-icon>
        </v-btn>
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
    data: function () {
        return {
            selectedFile: null,
            loading: false,
            errorMsg: false
        }
    },
    computed: {
        errorMessage() {
            return this.errorMsg
        }
    },
    methods: {
        fileSelected(file) {
            console.log(file)
            if (file.size > 8388608) {
                this.errorMsg = 'File size is greater than 8mb. use smaller file.'
                return
            }
            this.selectedFile = file
        },
        upload() {
            const fd = new FormData()
            if (!this.selectedFile) {
                this.errorMsg = 'File is not selected, select one.'
                return 
            }
            fd.append('image', this.selectedFile, this.selectedFile.name)
            this.loading = true
            axios.post('upload', fd)
                .then (res => {
                    this.$emit('add', res.data.file)
                })
                .finally (()=>{
                    this.loading = false
                }) 
        }
    }
}
</script>