(function ($) {
   
  window.BusquedaView = Backbone.View.extend({
    tagName : "div",
    initialize: function () {
      this.criterios = new BusquedaList(new BusquedaModel());
    },
    events: {
      "click #busquedabt": "Busqueda",
      "click img#jt_buttondst": "showBoxDestino",
      "click img#jt_buttonori": "showBoxOrigen",
      "click img#jt_buttonfecha": "showBoxFecha",
    },
    render: function () {
        var template = '\
            <table>\
            <tr>\
            <td>Destino</td>\
            <td><img class="jt_button" id="jt_buttondst" src="./resources/img/button-red.png" alt="Obligatorio" /></td>\
            <td>&nbsp;&nbsp;&nbsp;&nbsp;<jt_destino id="jt_busquedadest"></jt_destino></td>\
            </tr>\
            <tr>\
            <td>Origen</td>\
            <td><img class="jt_button" id="jt_buttonori" src="./resources/img/button-red.png" alt="Obligatorio" /></td>\
            <td>&nbsp;&nbsp;&nbsp;&nbsp;<jt_origen id="jt_busquedaori"></jt_origen></td>\
            </tr>\
            <tr>\
            <td>Fecha Salida</td>\
            <td><img class="jt_button" id="jt_buttonfecha" src="./resources/img/button-red.png" alt="Obligatorio" /></td>\
            <td>&nbsp;&nbsp;&nbsp;&nbsp;<jt_fecha id="jt_busquedafecha"></jt_fecha></td>\
            </tr>\
            <tr>\
            <td>Noches</td>\
            <td><select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>\
            <option value="5">5</option><option value="6">6</option><option value="7" selected="selected">7</option></select></td>\
            <td>&nbsp;</td>\
            </tr>\
            <tr><td colspan="3" class="jt_habitacion">Habitaciones<div class="jt_habitacion"><ul id="jt_hab-list"></ul></div></td></tr>\
            <tr><td align="center"><button id="busquedabt">Buscar</button></td><td>&nbsp;</td><td>&nbsp;</td></tr>\
            </table>\
            \
        ';
    
        this.el.innerHTML = Mustache.to_html(template, this.criterios.at(0).attributes);
        $('title').text('Demo API OTA - Busqueda');
        //$("#sesion").text('Sesion obtenida: ' + store.get('sesionId'));
        
        return this;
    },
    Busqueda: function () {           
      // Borramos la vista
      this.remove();
      
      // Navegamos a la consulta
      Backbone.history.navigate('/consulta', true);
    },
    showBoxDestino: function () {
      // Navegamos a la consulta de producto
      var catalogo = new jtCatalogo();
      
      // Instanciamos y mostramos la ventana de destinos
      var boxViewdst = new jt_boxView();
      $('body').append(boxViewdst.render().el);
      boxViewdst.showBox('DESTINO', $('#jt_busquedadest'), $('img#jt_buttondst'));
    },
    showBoxOrigen: function () {
      // Navegamos a la consulta de producto
      var catalogo = new jtCatalogo();
      
      // Instanciamos y mostramos la ventana de origenes
      var boxViewori = new jt_boxView();
      $('body').append(boxViewori.render().el);
      boxViewori.showBox('ORIGEN', $('#jt_busquedaori'), $('img#jt_buttonori'));
    },
    showBoxFecha: function () {
        // Instanciamos y mostramos la ventana de destinos
        var dateView = new jt_dateView($('#jt_busquedafecha'), $('img#jt_buttonfecha'));
        $('body').append(dateView.render().el);
        var $calendars = $(".jsCalendar");
		for (var i = 0, maxI = $calendars.length; i < maxI; i++) {
			var calendar = new jt_calendar();
			calendar.ready($calendars.eq(i));
		}
    },
    showHabitaciones: function () {
        var habView1 = new jt_habView(1);
        $("#jt_hab-list").append(habView1.render().el);
        var habView2 = new jt_habView(2);
        $("#jt_hab-list").append(habView2.render().el);
        var habView3 = new jt_habView(3);
        $("#jt_hab-list").append(habView3.render().el);
    }
  });

})(Zepto);

