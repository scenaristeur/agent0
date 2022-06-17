<template>
  <div>Local Connector :
  <b-button @click="download" size="sm" variant="primary">Download</b-button>
  <input ref="fileUpload" type="file" multiple hidden @change="loadFiles" />
  <b-button @click="openFileUpload()" variant="primary" size="sm">Upload Brains</b-button>
</div>
</template>

<script>
import { LocalConnector } from "@/connector/local.js"
export default {
  name: "LocalConnectorConnector",
  data(){
    return {
      connector : new LocalConnector(/*options*/)
    }
  },
  mounted(){
    console.log(this.connector)
  },
  methods: {
    loadFiles(event){
      const files = event.target.files
      this.connector.upload(files)
    },
    openFileUpload(){
      this.$refs.fileUpload.click()
    },
    download(){
      //https://github.com/scenaristeur/ipgs/blob/4436a12ccdb2b3de9c02a34fc2a699ccf9c68bf2/src/components/network/ExportModal.vue
      console.log("download")
      let graphData = {format: "json",
      content: {
        nodes: this.$store.state.graph3D.nodes,
        links: this.$store.state.graph3D.links
      }}
      this.connector.downloadFile(graphData)
    },
    upload(){
      //https://github.com/scenaristeur/ipgs/blob/4436a12ccdb2b3de9c02a34fc2a699ccf9c68bf2/src/components/network/ImportModal.vue
      console.log("upload")
    }
  }
}
</script>

<style>
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: 'Uplaod a brain';
}
</style>
