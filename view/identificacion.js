(function ($) {
   
  window.IdentificationView = Backbone.View.extend({
    tagName : "div",
    initialize: function () {
      this.usuarios = new IdentificacionList(new IdentificacionModel());
      //alert(JSON.stringify(this.usuarios));
    },
    events: {
      "click #identificationbt": "saveSesion",
    },
    render: function () {
        var template = '\
            <table><tr><td>Usuario</td>\
            <td><input type="text" name="user" id="user" value="{{ user }}" size="15" maxlength="30"></td>\
            </tr><tr><td>Password</td>\
            <td><input type="text" name="psw" id="psw" value="{{ password }}" size="15" maxlength="30"></td></tr></table>\
            <button id="identificationbt">Submit</button>\
        ';
    
        //ich.addTemplate("Identificacion", "../templates/identificacion.mustache");
        //this.el.innerHTML = ich.Identificacion(this.usuarios.at(0).attributes)
        //var template1 = $.get('../templates/identificacion.mustache');
        //alert(template1);
        this.el.innerHTML = Mustache.to_html(template, this.usuarios.at(0).attributes);
        $('title').text('Demo API OTA - Identificacion');
        return this;
    },
    saveSesion: function () {      
      var xml = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ser="http://www.orizonia.com/ota/services">';
      xml += '<soap:Header/>';
      xml += '<soap:Body>';
      xml += '<ser:OTA_OrizoniaIdentificationRQ>';
      xml += '<ser:Identificator>' + $("#user").val() + '</ser:Identificator>';
      xml += '<ser:Password>' + $("#psw").val() + '</ser:Password>';
      xml += '<ser:System>' + this.usuarios.at(0).get('system') + '</ser:System>';
      xml += '<ser:Language>' + this.usuarios.at(0).get('language') + '</ser:Language>';
      xml += '</ser:OTA_OrizoniaIdentificationRQ>';
      xml += '</soap:Body>';
      xml += '</soap:Envelope>';
      
      // Conexion
      var con = new ConectorAjax('IdentificationService.asmx', 'vigo.apiota.orizonia.com');
      con.post(xml, 'BeginOTA_OrizoniaIdentification');
      
      // Almacenamos la sesion
      store.set('sesionId', '1/A129898FB878NF9898999999NB9TPF')
      //$("#sesion").text('Sesion obtenida: ' + store.get('sesionId'));
      
      // Borramos la vista
      this.remove();
      
      // Navegamos a la busqueda
      Backbone.history.navigate('/busqueda', true);
    }
  });

})(Zepto);

