(function ($) {
   
  window.jt_dateView = Backbone.View.extend({
    className: 'jt_box',
    initialize: function (fechaLink, imgLink) {
        this.fechaLink = fechaLink;
        this.imgLink = imgLink;
    },
    events: {
      "click img": "hideBox",
      "click .calGrid": "getDate",
    },
    render: function () {
        var template = '<div id="jt_menuBox"><img class="jt_cerrar_box" src="./resources/img/cerrar_ico.png" alt="Cerrar" /></div>';
        template += '<div class="calendar jsCalendar jsSingleDate" data-localized_date=\'{"days":{"names":{"min":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}},"months":{"names":{"long":["January","February","March","April","May","June","July","August","September","October","November","December"]}}}\'></div>';
	
	template += '<script type="text/javascript">';
	template += '$(".jsCalendar").bind("startDateChanged", function() {';
	template += 'alert($(this).data("startdate"));';
	template += '});</script>';
	
	// Modificamos el titulo de la ventana
	$('title').text('Demo API OTA - Busqueda - Fecha');
	this.el.innerHTML = Mustache.to_html(template);
        return this;
    },
    hideBox: function () {
      // Borramos la ventana
      $('title').text('Demo API OTA - Busqueda');
      this.remove();
    },
    getDate: function () {
      // Borramos la ventana
      // Informamos la fecha seleccionada en la pantalla
      this.fechaLink.text($('div.calendar[data-startdate]').attr('data-startdate'));
      // Cambiamos la imagen
      this.imgLink[0].src = './resources/img/button-green.png';
      // Modificamos el titulo de la ventana
      $('title').text('Demo API OTA - Busqueda');
      this.remove();
    }
  });

})(Zepto);
