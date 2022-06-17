// import ForceGraph3D from '3d-force-graph';
// import { Core /*Neurone, Brain,  Graph*/ } from '@/neurone-factory'
//
// import { v4 as uuidv4 } from 'uuid';
// let graph = undefined

let engineType = "IndexedDBEngine" // InMemoryEngine
// import Soukai, { IndexedDBEngine } from 'soukai';
import Soukai, { IndexedDBEngine, LogEngine, InMemoryEngine } from 'soukai';
// class User extends Model {}
import {Neurone} from '@/models/Neurone'

const plugin = {
  install(app, opts = {}) {
    opts ? console.log(opts): {}
    let store = opts.store

    let engine = null

    if(engineType == "InMemoryEngine"){
      engine = new InMemoryEngine("smagMem");
    }else{
      engine = new IndexedDBEngine("smag0")
    }

    Soukai.loadModels({ Neurone });
    Soukai.useEngine(new LogEngine(engine));

    app.config.globalProperties.$soukai_create = async function(n){
      // let exist = await Neurone.find(n.id)

      let exist = await Neurone.all({ $in: [n.id] })
      if(exist.length == 0 ){
        return  Neurone.create(n).then((neu) => {
          console.log("created",neu)
          app.config.globalProperties.$soukai_findAll()
          return neu
        })
      }else{
        console.log("exist, should update ? ", n.id)
      }
    }

    app.config.globalProperties.$soukai_findAll = async function(){
      let all = await Neurone.all()
      let neurones = all.map(model => model.getAttributes())
      console.log("all neurones",neurones)
      store.commit('soukai/setNeurones', neurones)
    }

    app.config.globalProperties.$soukaiRemove = async function(item){
      console.log(item)
      let neurone = await Neurone.find(item.id)
      await neurone.delete()
      app.config.globalProperties.$soukai_findAll()
    }

    app.config.globalProperties.$soukaiAddTriplet = async function(t){
      console.log(t)
      let subjectNode = null
      const sub = await Neurone.all({ name: t.value.subject });
      if (sub.length != 0){
        subjectNode= sub [0]
      }else{
        subjectNode = await app.config.globalProperties.$soukai_create({name: t.value.subject})
        console.log("sub", sub)
      }

      let objectNode = null
      const objByName = await Neurone.all({ name: t.value.object });
      const objById  = await Neurone.all({ $in: [t.value.object] })
      const obj = objByName.concat(objById)
      if (obj.length != 0){
        objectNode = obj[0]
      }else{
        objectNode = await app.config.globalProperties.$soukai_create({name: t.value.object})
      }

      console.log(subjectNode, objectNode)

      // if (t.value.predicate.startsWith('.'))
      // {
      //   let p = t.value.predicate.slice(1)
      //   let n = await app.config.globalProperties.$addProp({node: subjectNode, propertie: p, value: c.value.object})
      //   await context.dispatch('saveNode', n)
      //   await context.dispatch('getNodes')
      // }
      // else
      // {
      //   let objectNode = context.state.nodes.find(x => x.id == c.value.object || x.name == c.value.object)
      //   objectNode == undefined ? objectNode = await app.config.globalProperties.$newNode({name: c.value.object}) : ""
      //   let nodes2save  = await app.config.globalProperties.$addLink({subject: subjectNode, predicate:c.value.predicate, object:objectNode})
      //   nodes2save.forEach(async function(n) {
      //     await context.dispatch('saveNode', n)
      //   });
      //   await context.dispatch('getNodes') // pose problème de rafraichissement, certainement car on a enlevé __ob & __threeObj
      // }
    }


    //
    // const user = new User({
    //   //id: "eryty",
    //   name: 'Johnny',
    //   surname: 'Doux',
    //   birthDate: new Date(),
    // });
    //
    // let savedUser = await user.save();
    //
    // console.log('User saved', savedUser);
    //
    // Brain.create({ name: 'RAndom', surname: 'Name', authorId : user.id })
    // .then(() => Brain.all())
    // .then(models => models.map(model => model.getAttributes()))
    // .then(brains => {
    //   console.log('brain models', brains)
    //   this.brains = brains
    // });






    // const neurone = new Neurone({
    //   name: 'Neurone1',
    //   authorId : user.id
    // });
    //
    // let savedNeurone = await neurone.save();
    //
    // console.log('Neurone saved', savedNeurone);
    //
    // const userOne = await User.find(user.id);
    //
    // console.log('User with id "eryty"', userOne);
    //
    // Neurone.all()
    // .then(models => models.map(model => model.getAttributes()))
    // .then(neurones => {
    //   console.log('neurone models', neurones)
    //   this.neurones = neurones
    // });




    // Vue.prototype.$newNode = async function(options = {}){
    //   if (options.name != undefined && options.name.startsWith("http")){
    //     console.log("search", options)
    //     let node = await Vue.prototype.$loadNeurone(options.name)
    //     console.log("neurone", node)
    //     return node
    //   }else{
    //     let context =  {
    //       "name": "http://xmlns.com/foaf/0.1/name",
    //       "knows": "http://xmlns.com/foaf/0.1/knows",
    //       "@base": "http://local/",
    //       "@vocab": "https://scenaristeur.github.io/agent/",
    //       "id": "@id",
    //       "type": "@type",
    //       "reverse": "@reverse",
    //       "homepage": {
    //         "@id": "http://xmlns.com/foaf/0.1/homepage",
    //         "@type": "@id"
    //       }
    //     }
    //     let node = {
    //       "@context" : Object.assign(context, options['@context']),
    //       "id": options['@id'] || options.id || uuidv4(),
    //       "name": options.name && options.name['@value'] || options.name || "",
    //       type: "neurone",
    //      //'shape': 'sphere' || options.shape,
    //       //color: "#00ff00",
    //       "homepage": "https://scenaristeur.github.io/agent/",
    //     };
    //     if(options.base64 != undefined){
    //       node.shape = 'base64'
    //       node.base64 = options.base64
    //       node.type = options.type
    //     }
    //
    //     return node
    //   }
    // }
    //
    // Vue.prototype.$addProp = function(data){
    //   let n = data.node
    //   let p = data.propertie
    //   let newValue = data.value
    //   let oldValue = n[p]
    //   console.log(typeof oldValue, oldValue)
    //   if (oldValue == undefined){
    //     n[p] = newValue
    //   }else if(Array.isArray(oldValue)){
    //     n[p].push(newValue)
    //   }else{
    //     n[p] = [oldValue, newValue]
    //   }
    //
    //   // }else if(typeof oldValue == 'object'){
    //   //
    //   // }else if(typeof oldValue == 'string'){
    //   //   n[p] = [oldValue, newValue]
    //   // }else{
    //   //   console.log("todo", data)
    //   // }
    //
    //
    //
    //   return n
    // }
    //
    // Vue.prototype.$addLink = function(t){
    //   console.log(t)
    //   let s = t.subject
    //   let p = t.predicate
    //   let o = t.object
    //   s = set(s, p, o)
    //   o = setReverse(o, p, s)
    //   return [s,o]
    // }
    //
    // function setReverse(main, p, item){
    //   main.reverse ==  undefined ? main.reverse = {}: ""
    //   if(main.reverse[p] == undefined){
    //     main.reverse[p] = {id: item.id, name: item.name}
    //   }else{
    //     switch (typeof main.reverse[p]) {
    //       case "string":
    //       console.log("TODO string", main.reverse[p] )
    //       break;
    //       default:
    //       if(Array.isArray(main.reverse[p])){
    //         main.reverse[p].push({id: item.id, name: item.name})
    //       }else{
    //         let old = main.reverse[p]
    //         main.reverse[p] = []
    //         main.reverse[p].push(old)
    //         main.reverse[p].push({id: item.id, name: item.name})
    //       }
    //     }
    //   }
    //   console.log(main)
    //   return main
    // }
    // function set(main, p, item){
    //   console.log(typeof main[p], main[p], item)
    //   let name = item.name
    //   let id = item.id
    //
    //   if(main[p] == undefined){
    //     main[p] = {id: id, name: name}
    //   }else{
    //     switch (typeof main[p]) {
    //       case "string":
    //       console.log("TODO string", main[p] )
    //       // let old =
    //       main[p] = [main[p]]
    //       main[p].push({id: id, name: name})
    //       break;
    //       default:
    //       if(Array.isArray(main[p])){
    //         main[p].push({id: id, name: name})
    //       }else{
    //         let old = main[p]
    //         main[p] = []
    //         main[p].push(old)
    //         main[p].push({id: id, name: name})
    //       }
    //     }
    //   }
    //   console.log(main)
    //   return main
    // }




  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
