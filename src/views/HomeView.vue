<template>
  <div>
    <NavBar />
    <b-container fluid >
      <CommandInput />
      <b-row>
        <b-col md="6">
          <GraphView />
        </b-col>
        <b-col md="6">
          <SideView />

        </b-col>
      </b-row>
    </b-container>
    <FooTer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/views/NavBar'
import CommandInput from '@/views/CommandInput'
import GraphView from '@/views/GraphView'
import SideView from '@/views/SideView'
import FooTer from '@/views/FooTer'

export default {
  name: 'HomeView',
  components: {
    NavBar, CommandInput, GraphView, SideView, FooTer
    // 'NavBar': ()=>import('@/views/NavBar'),
    // 'CommandInput': ()=>import('@/views/CommandInput'),
    // 'GraphView': ()=>import('@/views/GraphView'),
    // 'SideView': ()=>import('@/views/SideView'),
    // 'FooTer': ()=>import('@/views/FooTer'),
    // 'DataCaching': ()=>import('@/views/experiments/DataCaching'),
  },
}
</script>
