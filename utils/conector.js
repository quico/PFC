var ConectorAjax = function (servicio, host) {
    this.servicio = new String(servicio)
    this.host = new String(host)
    this.xmlhttp = false;

    // Metodos privados
    //function createXMLHTTPRequest() {

    //}
    
    try {
        //this.xmlhttp = new XMLHttpRequest();
        this.xmlhttp = new MockHttpRequest();
    } catch (trymicrosoft) {
         try {
            this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
         } catch (othermicrosoft) {
              try {
                this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
              } catch (failed) { this.xmlhttp = false; }
         }
    }
    if (!this.xmlhttp) alert("Error initializing XMLHttpRequest!");
    
    function xmlhttpChange() {
        // if xmlhttp shows 'loaded'
        if (this.readyState==4) {
             // if 'OK'
             if (this.status==200) {
                  // responseText
                  //alert(this.responseText);
             } //else alert("Problem connecting to server. Status is " + this.status)
        }
    }
    
    // Metodos publicos
    this.post = function(xml, action) {
    
        // Se crea el objeto HTTPRequest
        //createXMLHTTPRequest();
        
        // Cuando finalice la llamada al servicio obtenemos los datos mediante la funcion correspondiente
        this.xmlhttp.onreadystatechange = xmlhttpChange;
        
        // Open connection with POST
        this.xmlhttp.open('POST', 'http://' + this.host + '/v1.1/' + this.servicio, true);
        //alert('http://' + this.host + '/v1.1/' + this.servicio);

        // Set request headers for message to send. Depends on the web service
        this.xmlhttp.setRequestHeader('Man', 'POST ' + this.host + ' HTTP/1.1');
        this.xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        this.xmlhttp.setRequestHeader('Content-Length', xml.length);
        this.xmlhttp.setRequestHeader('SOAPAction', action);
        
        // Send request using POST
        this.xmlhttp.send(xml);
        
        /*** INICIO mock section ***/
        // Esta parte del codigo debe eliminarse en un entorno real
        var rsp = '<?xml version="1.0" encoding="utf-8"?>'
        switch (action) {
            case 'BeginOTA_OrizoniaIdentification':
                rsp += '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" '
                rsp += 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">';
                rsp += '<soap:Body><OTA_IdentificationResult xmlns="http://www.orizonia.com/ota/services"><Success />';
                rsp += '<SessionId>1/49BF3FD7-8FBE-4191-907B-F6D9958CF6C4</SessionId></OTA_IdentificationResult></soap:Body></soap:Envelope>';
                this.xmlhttp.receive(200, rsp);
                break;
            default: this.xmlhttp.err('action no implementado!');
        }
        /*** FIN mock section ***/
        
    }
}
