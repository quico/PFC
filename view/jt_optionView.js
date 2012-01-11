(function ($) {
   
  window.jt_optionView = Backbone.View.extend({
    initialize: function (boxView) {     
      // Enlazamos la ventana para poder manejarla
      this.parentView = boxView;
    },
    events: {
      "click li": "optionClick",
    },
    render: function () {
    	// Dependiendo del modelo agregado sera enlace o titulo
    	if (this.model.get('enlace')) {
	    	$(this.el).html("<li><opcion data-tooltip='C&oacute;digo: " + this.model.get('cod') + "' class='jt_opcion_box'>" + this.model.get('nombre') + "</opcion></li>");
	} else {
	    	$(this.el).html("<b>" + this.model.get('nombre') + "</b>");
    	}
        return this;
    },
    optionClick: function () {
    	// Informamos el campo de entrada
    	this.model.get('objLink').text(this.model.get('nombre') + ' (' + this.model.get('cod') + ')');
    	// Cambiamos la imagen
    	this.model.get('imgLink')[0].src = './resources/img/button-green.png';
    	// Modificamos el titulo de la ventana
    	$('title').text('Demo API OTA - Busqueda');
    	// Cerramos la ventana
    	this.parentView.boxView.remove();
    }
  });

})(Zepto);
