(function ($) {
   
  window.ConsultaView = Backbone.View.extend({
    tagName : "div",
    initialize: function () {
      //this.criterios = new BusquedaList(new BusquedaModel());
    },
    events: {
      //"click #busquedabt": "Busqueda",
      //"click img#jt_buttondst": "showBoxDestino",
      //"click img#jt_buttonori": "showBoxOrigen",
      //"click img#jt_buttonfecha": "showBoxFecha",
    },
    render: function () {
        var oCatalogo = new jtCatalogo();
    
        this.el.innerHTML = oCatalogo.obtenerHoteles(); //Mustache.to_html(template);
        $('title').text('Demo API OTA - Consulta');
        
        return this;
    }
  });

})(Zepto);

