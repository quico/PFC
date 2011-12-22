var jtCatalogo = function () {
    //this.servicio = new String(servicio)
    //this.host = new String(host)
    //this.xmlhttp = false;
    
    this.strDestinos = '<ArrayOfArea>';
    this.strDestinos += '<Area><Id>382000000000465</Id><Cod>382000000000465</Cod><Nom>Total</Nom><SubAreas><SubArea><Id>382000000000757</Id>';
    this.strDestinos += '<Cod>3</Cod><Nom>Mallorca</Nom><Destinos><Destino><Cod>D06</Cod><Nom>Mallorca</Nom><DCPs><DCP>';
    this.strDestinos += '<Id>382000000000756</Id><Cod>PD06</Cod><Nom>Mallorca</Nom></DCP></DCPs></Destino></Destinos>';
    this.strDestinos += '</SubArea></SubAreas></Area></ArrayOfArea>';
    
    // Metodos privados
    function TextToXML(strXML) {
        var xmlDoc = null;
        try {
            xmlDoc = (document.all)?new ActiveXObject("Microsoft.XMLDOM"):new DOMParser();
            xmlDoc.async = false;
        } catch(e) {throw new Error("XML Parser could not be instantiated");}
        var out;
        try {
            if(document.all) {
                out = (xmlDoc.loadXML(strXML))?xmlDoc:false;
            } else {  
                out = xmlDoc.parseFromString(strXML, "text/xml");
            }
        } catch(e) { throw new Error("Error parsing XML string"); }
        return out;
    }
    
    function xml2Json(xml) {
        var obj = {};

        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj['@attributes'] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    obj['@attributes'][xml.attributes[j].nodeName] = xml.attributes[j].nodeValue;
                }
            }

        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for(var i = 0; i < xml.childNodes.length; i++) {
                if (typeof(obj[xml.childNodes[i].nodeName]) == 'undefined') {
                    obj[xml.childNodes[i].nodeName] = xml2Json(xml.childNodes[i]);
                } else {
                    if (typeof(obj[xml.childNodes[i].nodeName].length) == 'undefined') {
                        var old = obj[xml.childNodes[i].nodeName];
                        obj[xml.childNodes[i].nodeName] = [];
                        obj[xml.childNodes[i].nodeName].push(old);
                    }
                    obj[xml.childNodes[i].nodeName].push(xml2Json(xml.childNodes[i]));
                }

            }
        }
        return obj;
    };
    
    // Metodos publicos
    this.obtenerDestinos = function() {
        var oJSon = xml2json.parser(this.strDestinos);
        //var xmlDoc = TextToXML(this.strDestinos);
        //var oJSon = xml2Json(xmlDoc);
        //return JSON.stringify(oJSon);
        return oJSon;
        //return xmlDoc;
    }
}
