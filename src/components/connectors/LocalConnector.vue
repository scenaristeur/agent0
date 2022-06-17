<template>
  <b-button @click="download">Download</b-button>
  <b-button @click="upload">Upload</b-button>
  {{ connector}}
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

</style>
