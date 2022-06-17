import { Base } from "./base.js"

export { LocalConnector }

class LocalConnector extends Base {
  constructor(options = {}) {
    super(options)
    options['type'] == undefined ? this['type'] = "LocalConnector": ""
    // this.options = options

    // this._data = Object.assign({}, modele)
    // this["ve:created"] = Date.now()
    // this.id = uuidv4()
    //console.log(this)
    // ...
  }

  downloadFile(data){
    var contenu = JSON.stringify(data.content, null, 2) //`{"test": "json" }` //this.content
    console.log("todo: poser la question compresser",contenu)
    var format = data.format || "json" //this.format;
    //  console.log(contenu, format)
    var contentType = "";
    var fileNameToSaveAs = ""
    var filename = prompt("Choose a name for the exported file :", "Spoggy");
    if (filename == null || filename == "") {
      return;
    }

    switch (format) {
      case 'json':
      contentType = 'application/json';
      fileNameToSaveAs = filename + ".json"; //Date.now() +
      break;
      case 'ttl':
      contentType = 'text/turtle';
      fileNameToSaveAs = filename + ".ttl"; //Date.now() +
      break;
      case 'jsonld':
      contentType = 'application/ld+json';
      fileNameToSaveAs = filename + ".jsonld"; //Date.now() +
      break;
      default:
      alert('Format de fichier non reconnu', format);
    }
    var textFileAsBlob = new Blob([contenu], { type: contentType }
    );
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if(navigator.userAgent.indexOf("Chrome") != -1) {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.target="_blank";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent(
      "click", true, false, window, 0, 0, 0, 0, 0
      , false, false, false, false, 0, null
    );
    downloadLink.dispatchEvent(event);
    setTimeout(function(){
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(downloadLink);
    }, 1000);
  }
}
