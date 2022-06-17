<template>
  <div>Local:
    <b-button @click="download" size="sm" variant="primary" class="ml-2">Download</b-button>
    <b-button @click="openFileUpload()" variant="primary" size="sm" class="ml-2">Upload Brains</b-button>
    <input ref="fileUpload" type="file" multiple hidden @change="loadFiles" />
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
    async loadFiles(event){
      const files = event.target.files
      for(const file of files) {
        this.connector.upload(file, this.processFile)
      }
    },
    processFile(f){
      console.log(f)
      console.log()
      let g = JSON.parse(f)
      for(let n of g.nodes){
        this.$soukai_create(n)
      }

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
        links: this.$store.state.graph3D.links,
        neurones: this.$store.state.soukai.neurones
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
