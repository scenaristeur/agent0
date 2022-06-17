(function(){"use strict";var e={3515:function(e,t,n){var o=n(3862),i=n(3396);const r=(0,i.Uk)("Home"),a=(0,i.Uk)(" | "),s=(0,i.Uk)("About");function l(e,t){const n=(0,i.up)("router-link"),o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(n,{to:"/"},{default:(0,i.w5)((()=>[r])),_:1}),a,(0,i.Wm)(n,{to:"/about"},{default:(0,i.w5)((()=>[s])),_:1})]),(0,i.Wm)(o)],64)}var u=n(89);const d={},c=(0,u.Z)(d,[["render",l],["__scopeId","data-v-6e4c464b"]]);var p=c,h=n(5431),m=n(5941);(0,h.z)("/agent0/service-worker.js",{ready(){m.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){m.log("Service worker has been registered.")},cached(){m.log("Content has been cached for offline use.")},updatefound(){m.log("New content is downloading.")},updated(){m.log("New content is available; please refresh."),alert("This app has been updated, please, close and reopen.")},offline(){m.log("No internet connection found. App is running in offline mode.")},error(e){m.error("Error during service worker registration:",e)}});var f=n(678);function g(e,t,n,o,r,a){const s=(0,i.up)("NavBar"),l=(0,i.up)("CommandInput"),u=(0,i.up)("GraphView"),d=(0,i.up)("b-col"),c=(0,i.up)("SideView"),p=(0,i.up)("b-row"),h=(0,i.up)("b-container"),m=(0,i.up)("FooTer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s),(0,i.Wm)(h,{fluid:""},{default:(0,i.w5)((()=>[(0,i.Wm)(l),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,{md:"6"},{default:(0,i.w5)((()=>[(0,i.Wm)(u)])),_:1}),(0,i.Wm)(d,{md:"6"},{default:(0,i.w5)((()=>[(0,i.Wm)(c)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(m)])}function w(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",null," nav ")}var v={name:"NavBar"};const b=(0,u.Z)(v,[["render",w]]);var y=b;const k=(0,i.Uk)("current nodes"),_=(0,i.Uk)("X");function C(e,t,n,r,a,s){const l=(0,i.up)("b-form-input"),u=(0,i.up)("b-form-select-option"),d=(0,i.up)("b-form-select"),c=(0,i.up)("b-button"),p=(0,i.up)("b-input-group");return(0,i.wg)(),(0,i.j4)(p,null,{append:(0,i.w5)((()=>[s.orderedNodes.length>0?((0,i.wg)(),(0,i.j4)(d,{key:0,modelValue:a.selected,"onUpdate:modelValue":t[1]||(t[1]=e=>a.selected=e),"value-field":"id","text-field":"name",options:s.orderedNodes},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{value:null,disabled:""},{default:(0,i.w5)((()=>[k])),_:1})])),_:1},8,["modelValue","options"])):(0,i.kq)("",!0),(0,i.Wm)(c,{onClick:s.clear,variant:"outline-danger"},{default:(0,i.w5)((()=>[_])),_:1},8,["onClick"])])),default:(0,i.w5)((()=>[(0,i.Wm)(l,{id:"input",ref:"input",autofocus:"",modelValue:a.main_input,"onUpdate:modelValue":t[0]||(t[0]=e=>a.main_input=e),onKeyup:(0,o.D2)(s.onEnter,["enter"]),onPaste:s.onPaste,onInput:s.onInput,title:"type three words followed by a comma",placeholder:"three words followed by a comma, or /h +Enter for help"},null,8,["modelValue","onKeyup","onPaste","onInput"])])),_:1})}var x=n(4806),N=n.n(x),D=n(536),j={"@context":{as:"https://www.w3.org/ns/activitystreams#",ve:"https://scenaristeur.github.io/verse#",id:"@id",type:"@type",name:"ve:name",age:"ve:age",url:"ve:url",privacy:"ve:privacy",properties:"ve:properties",links:"ve:links",synapses:"ve:synapses",created:"ve:created",updated:"ve:updated",synchronized:"ve:synchronized",previous:"ve:previous",next:"ve:next"},id:null,name:"",age:0,url:"",privacy:"private",type:null,properties:[],links:[],synapses:[],created:null,updated:null,synchronized:null,previous:null,next:null},W=n(5941);class O{constructor(e={}){Object.assign(this,j),this.id=(0,D.Z)(),this.type="base",this.created=Date.now(),Object.assign(this,e)}debug(){W.log(this)}}var E=n(5941);class U extends O{constructor(e={}){super(e),void 0==e["type"]&&(this["type"]="command"),this.init(e.inputValue)}init(e){if(this.isValidUrl(e))this.type="url",this.value=e,this.isFile=this.isFile(e);else{let t=e.charAt(0),n="";switch(t){case"/":this.type="commande",this.value=e,this.inputNew="";break;case".":n=this.commandHistory[this.commandHistory.length-1],this.inputNew=n.s+" "+n.p+" "+n.o;break;case";":n=this.commandHistory[this.commandHistory.length-1],this.inputNew=n.s+" "+n.p+" ";break;case",":n=this.commandHistory[this.commandHistory.length-1],this.inputNew=n.s+" ";break;default:this.traiteTriplet(e)}}return this}traiteTriplet(e){var t={},n="";let o=e.slice(-1),i=e.slice(0,-1).split(" "),r=!0,a="",s=[];switch(i.forEach((function(e){e=e.trim(),e.startsWith('"')?(a="debut",s.push(e.substr(1))):e.endsWith('"')?(a="fin",s.push(s.pop()+" "+e.slice(0,-1))):"debut"==a?s.push(s.pop()+" "+e):s.push(e)})),s.length>0&&(i=s),o){case".":n="";break;case";":n=i[0].indexOf(" ")>-1?'"'+i[0]+'" ':i[0]+" ";break;case",":n=i[0].indexOf(" ")>-1?'"'+i[0]+'" ':i[0]+" ",i[1].indexOf(" ")>-1?n+='"'+i[1]+'" ':n+=i[1]+" ";break;case"-":n=i[2].indexOf(" ")>-1?'"'+i[2]+'" ':i[2]+" ";break;default:E.log("message to chat "+e),n="",r=!1}if(r){t.type="triplet";var l={};l.subject=i[0],l.predicate=i[1],l.object=i[2],t.value=l,t.inputNew=n}else t.type="message",t.value=e,t.inputNew=n;Object.assign(this,t)}isValidUrl(e){try{return new URL(e),!0}catch(t){return!1}}isFile(e){return e.split("/").pop().indexOf(".")>-1}}var $=n(5941),V={name:"CommandInput",data(){return{main_input:"",commandHistory:[],selected:null,order:"asc"}},methods:{async onInput(){let e={};e.text=this.main_input.trim(),e.searchById=!1,this.$store.commit("core/setSearch",e)},onPaste(e){$.log(e),$.log(this.$refs.input.value)},clear(){this.main_input=""},onEnter(){let e=this.main_input.trim();if(e.length>0){let t=new U({inputValue:e});this.$store.dispatch("core/pushCommandHistory",t),this.main_input=t.inputNew,"/h"==e&&window.open("https://github.com/scenaristeur/agent/wiki","_blank").focus()}},byKey(e){return function(t){var n=parseInt(t[e],10);return isNaN(n)?t[e]:n}}},watch:{currentNode(){if(null!=this.currentNode){let e=this.currentNode.name||this.currentNode.id;/\s/.test(e)&&(e='"'+e+'"'),this.main_input=e+" ",this.$refs.input.focus()}},selected(){if($.log("selected",this.selected),null!=this.selected){let e=this.orderedNodes.find((e=>e.id==this.selected));$.log(e);let t=e.name||e.id;/\s/.test(t)&&(t='"'+t+'"');let n=this.main_input.trim()+" "+t;this.main_input=n+" ,",this.$refs.input.focus()}}},computed:{currentNode(){return this.$store.state.core.currentNode},orderedNodes:function(){return N().orderBy(this.$store.state.core.nodes,this.byKey("name"),this.order)}}};const P=(0,u.Z)(V,[["render",C]]);var T=P;const I={id:"graph",width:"100px",ref:"graph"};function L(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",I,"Loading graph...",512)}var F=n(5941),M={name:"GraphView",mounted(){this.$graphInit({domElement:this.$refs.graph})},methods:{update(){if(void 0!=this.graph){let e=this.nodes.map((e=>({...e}))),t=this.links.map((e=>({...e})));this.graph.graphData({nodes:e,links:t}),F.log(this.graph.graphData())}}},watch:{nodes(){this.update()},links(){this.update()},graph(){this.update()}},computed:{nodes(){return this.$store.state.graph3D.nodes},links(){return this.$store.state.graph3D.links},graph(){return this.$store.state.graph3D.graph}}};const A=(0,u.Z)(M,[["render",L],["__scopeId","data-v-8aba78d8"]]);var H=A;const S=(0,i.Uk)(" side ");function z(e,t,n,o,r,a){const s=(0,i.up)("SoukaiNeurones"),l=(0,i.up)("ConnectorsView");return(0,i.wg)(),(0,i.iD)("div",null,[S,(0,i.Wm)(s),(0,i.Wm)(l)])}const R={class:"row"},Z=(0,i.Uk)("Create");function B(e,t,n,o,r,a){const s=(0,i.up)("b-form-input"),l=(0,i.up)("b-button"),u=(0,i.up)("b-form"),d=(0,i.up)("CrudList");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i._)("div",R,[(0,i.Wm)(s,{modelValue:r.n.name,"onUpdate:modelValue":t[0]||(t[0]=e=>r.n.name=e),placeholder:"name",class:"col-8"},null,8,["modelValue"]),(0,i.Wm)(l,{onClick:a.create,class:"col-2"},{default:(0,i.w5)((()=>[Z])),_:1},8,["onClick"])])])),_:1}),(0,i.Wm)(d,{items:a.soukaiNeurones},null,8,["items"])])}var K=n(7139);const G={class:"p-0 m-0 flex-grow-1"},J=["onClick"],q=["onClick"];function Y(e,t,n,r,a,s){const l=(0,i.up)("b-button"),u=(0,i.up)("b-list-group-item"),d=(0,i.up)("b-list-group"),c=(0,i.up)("b-form-input"),p=(0,i.up)("b-input-group"),h=(0,i.up)("b-modal");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(d,{class:"scroll"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.items,(e=>((0,i.wg)(),(0,i.j4)(u,{href:"#",class:"item list-group-item d-flex justify-content-between p-1",key:e.id,onClick:t=>s.selected(e),onContextmenu:(0,o.iM)((t=>s.right(e)),["prevent"])},{default:(0,i.w5)((()=>[(0,i._)("p",G,(0,K.zw)(e.name)+" ("+(0,K.zw)(e.id)+") ",1),(0,i.Wm)(l,{size:"sm mr-2",variant:"outline-primary"},{default:(0,i.w5)((()=>[(0,i._)("span",{class:"material-icons",onClick:(0,o.iM)((t=>s.edit(e)),["stop"]),variant:"primary"}," edit ",8,J)])),_:2},1024),(0,i.Wm)(l,{size:"sm",variant:"outline-danger"},{default:(0,i.w5)((()=>[(0,i._)("span",{class:"material-icons",onClick:(0,o.iM)((t=>s.init_trash(e)),["stop"]),variant:"danger"}," delete ",8,q)])),_:2},1024)])),_:2},1032,["onClick","onContextmenu"])))),128))])),_:1}),(0,i.Wm)(h,{id:"context-menu",title:a.contextTitle},{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,{prepend:"Rename"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{modelValue:a.newName,"onUpdate:modelValue":t[0]||(t[0]=e=>a.newName=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["title"])])}var X=n(5941),Q={name:"CrudList",props:["items"],data(){return{contextTitle:"",currentItem:{},newName:"",new_location:""}},methods:{edit(e){X.log("edit ",e)},selected(e){X.log(e)},right(e){X.log("right",e),this.contextTitle=e.name,this.newName=e.name,this.$bvModal.show("context-menu"),this.currentItem=e},init_trash(e){X.log(e),window.confirm("Do you really want to delete "+e.name+" (id: "+e.id+") ?")&&(this.currentItem=e,this.trash())},init_move(e){X.log(e),this.$bvModal.show("move"),this.currentItem=e,this.new_location=e.url},async move(){X.log("Move",this.currentItem)},async trash(){X.log("Trash",this.currentItem),this.$soukaiRemove(this.currentItem)}}};const ee=(0,u.Z)(Q,[["render",Y],["__scopeId","data-v-6905d252"]]);var te=ee,ne={name:"SoukaiNeurones",components:{CrudList:te},data(){return{n:{name:"",surname:"Doe",interests:["Solid","dev"],contact:{email:"jhgj@ku.juyg",phone:"01234567890"},blop:"youhou"}}},created(){this.findAll()},methods:{async create(){await this.$soukai_create(this.n),this.n.name=""},findAll(){this.$soukai_findAll()}},computed:{soukaiNeurones(){return this.$store.state.soukai.neurones}}};const oe=(0,u.Z)(ne,[["render",B]]);var ie=oe;const re=(0,i._)("h3",null," connectors",-1);function ae(e,t,n,o,r,a){const s=(0,i.up)("LocalConnector"),l=(0,i.up)("b-container");return(0,i.wg)(),(0,i.j4)(l,null,{default:(0,i.w5)((()=>[re,(0,i.Wm)(s)])),_:1})}const se=(0,i.Uk)("Local Connector : "),le=(0,i.Uk)("Download"),ue=(0,i.Uk)("Upload Brains");function de(e,t,n,o,r,a){const s=(0,i.up)("b-button");return(0,i.wg)(),(0,i.iD)("div",null,[se,(0,i.Wm)(s,{onClick:a.download,size:"sm",variant:"primary"},{default:(0,i.w5)((()=>[le])),_:1},8,["onClick"]),(0,i._)("input",{ref:"fileUpload",type:"file",multiple:"",hidden:"",onChange:t[0]||(t[0]=(...e)=>a.loadFiles&&a.loadFiles(...e))},null,544),(0,i.Wm)(s,{onClick:t[1]||(t[1]=e=>a.openFileUpload()),variant:"primary",size:"sm"},{default:(0,i.w5)((()=>[ue])),_:1})])}var ce=n(5941);class pe{constructor(e={}){this.id=(0,D.Z)(),this.type="baseConnector",this.created=Date.now(),Object.assign(this,e)}debug(){ce.log(this)}}var he=n(65);const me=()=>({}),fe={},ge={};var we={namespaced:!0,state:me,actions:ge,mutations:fe};let ve=Math.random()*Math.PI;const be=()=>({graph:void 0,nodes:[{id:"user",name:"USER",color:"lightblue"},{id:"graph",name:"GRAPH"}],links:[{source:"user",target:"graph",label:"start",curvature:.3,rotation:ve,date:Date.now()}],highlightNodes:new Set,highlightLinks:new Set}),ye={setGraph(e,t){e.graph=t}},ke={};var _e={namespaced:!0,state:be,actions:ke,mutations:ye},Ce=n(5941);const xe=()=>({neurones:[]}),Ne={setNeurones(e,t){Ce.log(t),e.neurones=t}},De={};var je={namespaced:!0,state:xe,actions:De,mutations:Ne},We=(0,he.MT)({state:{},getters:{},mutations:{},actions:{},modules:{core:we,graph3D:_e,soukai:je}}),Oe=n(5941);class Ee extends pe{constructor(e={}){super(e),void 0==e["type"]&&(this["type"]="LocalConnector")}async upload(e,t){const n=new FileReader;n.onload=t,n.readAsText(e,"UTF-8")}async upload1(e){for(var t=0;t<e.length;t++){let o=e[t],i=o.name;var n=o.name.split(".").pop();const r=new FileReader;r.addEventListener("load",(()=>{var e=r.result;switch(Oe.log(typeof e,e),n){case"json":var t=JSON.parse(e);Oe.log(t),void 0!=t.nodes&&(Oe.log(t),We.commit("soukai/setNeurones",t.nodes));break;default:alert("your file must be a .json file",i)}})),r.readAsText(o)}}downloadFile(e){var t=JSON.stringify(e.content,null,2);Oe.log("todo: poser la question compresser",t);var n=e.format||"json",o="",i="",r=prompt("Choose a name for the exported file :","Spoggy");if(null!=r&&""!=r){switch(n){case"json":o="application/json",i=r+".json";break;case"ttl":o="text/turtle",i=r+".ttl";break;case"jsonld":o="application/ld+json",i=r+".jsonld";break;default:alert("Format de fichier non reconnu",n)}var a=new Blob([t],{type:o}),s=document.createElement("a");s.download=i,s.innerHTML="Download File",-1!=navigator.userAgent.indexOf("Chrome")?s.href=window.URL.createObjectURL(a):(s.href=window.URL.createObjectURL(a),s.target="_blank",s.style.display="none",document.body.appendChild(s));var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),s.dispatchEvent(l),setTimeout((function(){document.body.removeChild(s),window.URL.revokeObjectURL(s)}),1e3)}}}var Ue=n(5941),$e={name:"LocalConnectorConnector",data(){return{connector:new Ee}},mounted(){Ue.log(this.connector)},methods:{async loadFiles(e){const t=e.target.files;for(const n of t)this.connector.upload(n,this.processFile)},processFile(e){Ue.log(JSON.parse(e.result))},openFileUpload(){this.$refs.fileUpload.click()},download(){Ue.log("download");let e={format:"json",content:{nodes:this.$store.state.graph3D.nodes,links:this.$store.state.graph3D.links}};this.connector.downloadFile(e)},upload(){Ue.log("upload")}}};const Ve=(0,u.Z)($e,[["render",de]]);var Pe=Ve,Te={name:"ConnectorsView",components:{LocalConnector:Pe}};const Ie=(0,u.Z)(Te,[["render",ae]]);var Le=Ie,Fe={name:"SideView",components:{SoukaiNeurones:ie,ConnectorsView:Le}};const Me=(0,u.Z)(Fe,[["render",z]]);var Ae=Me;function He(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",null," footer ")}var Se={name:"FooTer"};const ze=(0,u.Z)(Se,[["render",He]]);var Re=ze,Ze={name:"HomeView",components:{NavBar:y,CommandInput:T,GraphView:H,SideView:Ae,FooTer:Re}};const Be=(0,u.Z)(Ze,[["render",g]]);var Ke=Be;const Ge=[{path:"/",name:"home",component:Ke},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],Je=(0,f.p7)({history:(0,f.PO)("/agent0/"),routes:Ge});var qe=Je,Ye=(n(6699),n(3658)),Xe=n(5209),Qe=n(5498),et=n(1114),tt=n(5941);const nt={install(e,t={}){let n=t.store,o=i();function i(){return{w:window.innerWidth>768?window.innerWidth/2:window.innerWidth,h:window.innerWidth>768?.9*window.innerHeight:.8*window.innerHeight}}function r(e){return null!=n.state.graph3D.search&&n.state.graph3D.search.text.length>0&&e.name.includes(n.state.graph3D.search.text)}function a(e){tt.log(e)}function s(e){let t,n,o=null,i=null,r=new et.YBo({color:e.color||Math.round(Math.random()*Math.pow(2,24)),transparent:!0,opacity:.75}),a=null;switch(e.shape){case"box":i=new et.DvJ(20,20,20);break;case"cylinder":i=new et.fHI(10,10,20);break;case"cone":i=new et.b_z(10,20);break;case"dodecahedron":i=new et.Kgo(10);break;case"sphere":i=new et.xo$(10);break;case"torus":i=new et.XvJ(10,2);break;case"torusKnot":i=new et.FE5(10,2);break;case"base64":t=new Image,t.src=e.base64,n=new et.xEZ,n.image=t,t.onload=function(){n.needsUpdate=!0},r=new et.xeV({map:n}),a=new et.jyi(r),a.scale.set(12,12);break;default:}if(null!=a)o=a;else if(null==i){const t=document.createElement("div");t.textContent=e.name,t.style.color=e.color||"#ffffff",t.className="node-label",o=new Xe.j(t)}else o=new et.Kj0(i,r);return o}async function l(e){tt.log("node",e);const t=40;let o={x:t,y:t,z:t};if(0!=e.x&&0!=e.y&&0!=e.z){const n=1+t/Math.hypot(e.x,e.y,e.z);o={x:e.x*n,y:e.y*n,z:e.z*n}}n.state.graph3D.graph.cameraPosition(o,e,3e3);let i=n.state.graph3D.nodes.find((t=>t.id==e.id));n.commit("graph3D/setCurrentNode",i)}window.addEventListener("resize",(function(){null!=n.state.graph3D.graph&&(o=i(),n.state.graph3D.graph.width(o.w),n.state.graph3D.graph.height(o.h))})),e.config.globalProperties.$graphInit=async function(t){let i={nodes:[],links:[]},u=n.state.graph3D.highlightNodes,d=n.state.graph3D.highlightLinks,c=n.state.graph3D.hoverNode,p=(0,Ye.Z)({extraRenderers:[new Xe.M]})(t.domElement).graphData(i);p.width(o.w).height(o.h).nodeLabel("name").nodeAutoColorBy("type").nodeRelSize(9).nodeColor((e=>r(e)?"yellow":u.has(e)?e===c?"rgb(255,0,0,1)":"rgba(255,160,0,0.8)":e.color)).onNodeClick((e=>l(e))).onLinkClick((e=>a(e))).nodeThreeObjectExtend((e=>void 0==e.shape||null==e.shape)).nodeThreeObject((e=>s(e))).linkCurvature("curvature").linkCurveRotation("rotation").linkThreeObjectExtend(!0).linkThreeObject((e=>{if(void 0!=e.label){const t=new Qe.Z(`${e.label}`);return t.color="lightgrey",t.textHeight=1.5,t}})).linkDirectionalArrowLength(3.5).linkDirectionalArrowRelPos(1).linkPositionUpdate(((e,{start:t,end:n})=>{if(void 0!=e){const o=Object.assign(...["x","y","z"].map((e=>({[e]:t[e]+(n[e]-t[e])/3}))));Object.assign(e.position,o)}})).linkWidth((e=>d.has(e)?4:1)).linkDirectionalParticles((e=>d.has(e)?4:0)).linkDirectionalParticleWidth(4).onNodeHover((t=>{!t&&!u.size||t&&c===t||(u.clear(),d.clear(),t&&u.add(t),c=t||null,e.config.globalProperties.$updateHighlight())})).onLinkHover((t=>{u.clear(),d.clear(),t&&(d.add(t),u.add(t.source),u.add(t.target)),e.config.globalProperties.$updateHighlight()})),n.commit("graph3D/setGraph",p)},e.config.globalProperties.$updateHighlight=function(){let e=n.state.graph3D.graph;e.nodeColor(e.nodeColor()).linkWidth(e.linkWidth()).linkDirectionalParticles(e.linkDirectionalParticles())}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(nt);var ot=nt,it=n(6951),rt=n.n(it),at=n(2482);class st extends it.Model{neuroneRelationship(){return this.hasMany(st,"id")}}(0,at.Z)(st,"fields",{name:it.FieldType.String,id:it.FieldType.Key});var lt=n(5941);let ut="IndexedDBEngine";const dt={install(e,t={}){!t||lt.log(t);let n=t.store,o=null;o="InMemoryEngine"==ut?new it.InMemoryEngine("smagMem"):new it.IndexedDBEngine("smag0"),rt().loadModels({Neurone:st}),rt().useEngine(new it.LogEngine(o)),e.config.globalProperties.$soukai_create=async function(t){await st.create(t).then((()=>st.all())).then((e=>e.map((e=>e.getAttributes())))).then((t=>{lt.log("neurones models",t),e.config.globalProperties.$soukai_findAll()}))},e.config.globalProperties.$soukai_findAll=async function(){let e=await st.all(),t=e.map((e=>e.getAttributes()));lt.log("all neurones",t),n.commit("soukai/setNeurones",t)},e.config.globalProperties.$soukaiRemove=async function(t){lt.log(t);let n=await st.find(t.id);await n.delete(),e.config.globalProperties.$soukai_findAll()}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(dt);var ct=dt,pt=n(936);const ht=(0,o.ri)(p);ht.use(We),ht.use(qe),ht.use(pt.ZP),ht.use(ot,{store:We}),ht.use(ct,{store:We}),ht.mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],r=e[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.77289ea4.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="agent0:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var s,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+r){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[i];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/agent0/"}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var d=l(n)}for(t&&t(o);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunkagent0"]=self["webpackChunkagent0"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3515)}));o=n.O(o)})();
//# sourceMappingURL=app.1fa83858.js.map