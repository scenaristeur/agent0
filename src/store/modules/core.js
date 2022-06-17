// import Vue from 'vue'
const createStore = app => {
  const state = () => ({
    // rootNode: "test-brains",
    // gunBrains : []
  })

  const mutations = {
    setSearch(state, params){
      // console.log(params)
      state.search = params
      app.config.globalProperties.$updateHighlight();
    },
  }

  const actions = {
    async onCommandEnter(context, c){

      await app.config.globalProperties.$soukaiAddTriplet(c)
    //   if(c.type == "triplet"){
    //     let neurones =  context.rootState.soukai.neurones
    // console.log(neurones)

        // let subjectNode = context.state.nodes.find(x => x.name == c.value.subject)
        // subjectNode == undefined ? subjectNode = await app.config.globalProperties.$newNode({name: c.value.subject}) : ""
//_____

      //   if (c.value.predicate.startsWith('.'))
      //   {
      //     let p = c.value.predicate.slice(1)
      //     let n = await app.config.globalProperties.$addProp({node: subjectNode, propertie: p, value: c.value.object})
      //     await context.dispatch('saveNode', n)
      //     await context.dispatch('getNodes')
      //   }
      //   else
      //   {
      //     let objectNode = context.state.nodes.find(x => x.id == c.value.object || x.name == c.value.object)
      //     objectNode == undefined ? objectNode = await app.config.globalProperties.$newNode({name: c.value.object}) : ""
      //     let nodes2save  = await app.config.globalProperties.$addLink({subject: subjectNode, predicate:c.value.predicate, object:objectNode})
      //     nodes2save.forEach(async function(n) {
      //       await context.dispatch('saveNode', n)
      //     });
      //     await context.dispatch('getNodes') // pose problème de rafraichissement, certainement car on a enlevé __ob & __threeObj
      //   }
      // }else{
      //   alert("your command should end with a comma")
      // }
    }
    // async newDoc(context){
    //   let doc = Automerge.init()
    //   context.commit('setDoc', doc)
    // },
    // addItem(context, text) {
    //   console.log(context.state.doc)
    //   let newDoc = Automerge.change(context.state.doc, doc => {
    //     if (!doc.items) doc.items = []
    //     doc.items.push({ text, done: false })
    //   })
    //   context.commit('updateDoc', newDoc)
    // }
  }

  return {
    namespaced: true,
    state,
    actions,
    mutations
  }
}

export default app => createStore(app)
