(function ($) {
   
  window.IdentificationView = Backbone.View.extend({
    tagName : "div",
    //el: $("body"),
    initialize: function () {
      this.usuarios = new IdentificacionList(new IdentificacionModel());
      //alert(JSON.stringify(this.usuarios));
    },
    events: {
      "click #identificationbt": "saveSesion",
    },
    render: function () {
        var template = '\
            <p id="sesion"></p>\
            <table><tr><td>Usuario</td>\
            <td><input type="text" name="user" id="user" value="{{ user }}" size="15" maxlength="30"></td>\
            </tr><tr><td>Password</td>\
            <td><input type="text" name="psw" id="psw" value="{{ password }}" size="15" maxlength="30"></td></tr></table>\
            <button id="identificationbt">Submit</button>\
        ';
    
        //var template1 = $.get('../templates/identificacion.mustache');
        //alert(template1);
        this.el.innerHTML = Mustache.to_html(template, this.usuarios.at(0).attributes);
        return this;
    },
    saveSesion: function () {
      //alert('Usuario: ' + $("#user").val());
      
      var xml = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ser="http://www.orizonia.com/ota/services">';
      xml += '<soap:Header/>';
      xml += '<soap:Body>';
      xml += '<ser:OTA_OrizoniaIdentificationRQ>';
      xml += '<ser:Identificator>B2C_GENERICO</ser:Identificator>';
      xml += '<ser:Password>GENERICO</ser:Password>';
      xml += '<ser:System>BLANB</ser:System>';
      xml += '<ser:Language>es</ser:Language>';
      xml += '</ser:OTA_OrizoniaIdentificationRQ>';
      xml += '</soap:Body>';
      xml += '</soap:Envelope>';
      
      // Conexion
      var con = new ConectorAjax('IdentificationService.asmx', 'vigo.apiota.orizonia.com');
      con.post(xml, 'BeginOTA_OrizoniaIdentification');
      
      // Almacenamos la sesion
      store.set('sesionId', '1/A129898FB878NF9898999999NB9TPQ')
      $("#sesion").text('Sesion obtenida: ' + store.get('sesionId'));
    }
  });

})(Zepto);

