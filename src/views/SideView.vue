<template>
  <div>
    side
    <SoukaiNeurones />
    <ConnectorsView />
  </div>
</template>

<script>
import SoukaiNeurones from '@/views/SoukaiNeurones'
import ConnectorsView from '@/views/ConnectorsView'
export default {
  name: "SideView",
  components: {
    SoukaiNeurones, ConnectorsView
  }
}
</script>

<style scoped>

</style>
