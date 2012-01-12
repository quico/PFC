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
    
    this.obtenerHoteles = function() {
        var html = '<table>';
        html += '<tr>';
        html += '<td rowspan="3"><img width="150" height="110" title="Riu Naiboa" alt="Riu Naiboa" src="./resources/img/D8301004_imagen01.jpg"></td>';
        html += '<td><h4>Riu Naiboa<span>****</span></h4></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td>Una persona desde <strong> 996<small> &euro;</small></strong></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td><table><tr><td><strong>Regimen</strong></td><td>8 abr</td><td>9 abr</td><td>10 abr</td></tr>';
        html += '<tr><td><strong>Alojamiento</strong></td><td>1036&euro;</td><td>1016&euro;</td><td>996&euro;</td></tr></table></td>';
        html += '</tr>';
        html += '<tr><td>&nbsp;</td><td>&nbsp;</td></tr>';

        html += '<tr>';
        html += '<td rowspan="3"><img width="150" height="110" title="Barcel&oacute; Dominican Beach" alt="Barcel&oacute; Dominican Beach" src="./resources/img/D8301022_imagen01.jpg"></td>';
        html += '<td><h4>Barcel&oacute; Dominican Beach<span>****</span></h4></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td>Una persona desde <strong> 1.034<small> &euro;</small></strong></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td><table><tr><td><strong>Regimen</strong></td><td>8 abr</td><td>9 abr</td><td>10 abr</td></tr>';
        html += '<tr><td><strong>Alojamiento</strong></td><td>1034&euro;</td><td>1034&euro;</td><td>1056&euro;</td></tr></table></td>';
        html += '</tr>';
        html += '<tr><td>&nbsp;</td><td>&nbsp;</td></tr>';
        
        html += '<tr>';
        html += '<td rowspan="3"><img width="150" height="110" title="Iberostar Dominicana" alt="Iberostar Dominicana" src="./resources/img/D8301015_imagen01.jpg"></td>';
        html += '<td><h4>Iberostar Dominicana<span>*****</span></h4></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td>Una persona desde <strong> 1.214<small> &euro;</small></strong></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td><table><tr><td><strong>Regimen</strong></td><td>8 abr</td><td>9 abr</td><td>10 abr</td></tr>';
        html += '<tr><td><strong>Alojamiento</strong></td><td align="center">-</td><td>1274&euro;</td><td>1214&euro;</td></tr></table></td>';
        html += '</tr>';
        html += '<tr><td>&nbsp;</td><td>&nbsp;</td></tr>';
        
        html += '<tr>';
        html += '<td rowspan="3"><img width="150" height="110" title="Catalonia Gran Dominicus" alt="Catalonia Gran Dominicus" src="./resources/img/DBY01012_imagen01.jpg"></td>';
        html += '<td><h4>Catalonia Gran Dominicus<span>****</span></h4></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td>Una persona desde <strong> 1.256<small> &euro;</small></strong></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td><table><tr><td><strong>Regimen</strong></td><td>8 abr</td><td>9 abr</td><td>10 abr</td></tr>';
        html += '<tr><td><strong>Alojamiento</strong></td><td align="center">-</td><td align="center">-</td><td>1256&euro;</td></tr></table></td>';
        html += '</tr>';
        html += '<tr><td>&nbsp;</td><td>&nbsp;</td></tr>';
        
        html += '</table>';
        
        return html;
    }
}
