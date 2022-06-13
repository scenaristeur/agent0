<template>
  <div>
    <!-- <b-button @click="findAll">Update</b-button> -->
    <b-form>
      <div class="row">
      <b-form-input v-model="n.name" placeholder="name" class="col-8" />
      <b-button @click="create" class="col-2">Create</b-button>
    </div>
    </b-form>
    <CrudList :items="soukaiNeurones" />
  </div>
</template>

<script>
import CrudList from '@/components/crud/CrudList'
export default {
  name: "SoukaiNeurones",
  components: {
    CrudList
  },
  data(){
    return {
      n :{ name: '',
      surname: 'Doe',
      interests : ["Solid", "dev"],
      contact : {email: "jhgj@ku.juyg", phone: "01234567890"},
      blop: "youhou"
    }
  }
},
created(){
  this.findAll()
},
methods: {
  async create(){
    await this.$soukai_create(this.n)
    this.n.name = ""
  },
  findAll(){
    this.$soukai_findAll()
  }
},
computed: {
  soukaiNeurones() {
    return this.$store.state.soukai.neurones
  }
}
}
</script>

<style scoped>

</style>
