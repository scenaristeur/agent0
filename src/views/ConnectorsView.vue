<template>
  <b-container>
    <h3> connectors</h3>
    <LocalConnector />
  </b-container>
</template>

<script>
import LocalConnector from '@/components/connectors/LocalConnector'
export default {
  name: "ConnectorsView",
  components: {
    LocalConnector
  }
}
</script>

<style scoped>

</style>
