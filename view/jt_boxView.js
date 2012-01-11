(function ($) {
   
  window.jt_boxView = Backbone.View.extend({
    initialize: function () {     
        // Inicializamos la coleccion de opciones
        this.opciones = new jt_optionBoxList();
        this.opciones.bind('add', this.addOne, this);
    },
    events: {
      "click img": "hideBox",
    },
    render: function () {
        var template = '<div class="jt_box">';
        template += '<div id="jt_menuBox"><img class="jt_cerrar_box" src="./resources/img/cerrar_ico.png" alt="Cerrar" /></div>';
        template += '<div>';
	    template += '<ul id="jt_option-list"></ul></div></div>';
	
	    this.el.innerHTML = Mustache.to_html(template);
	    $('title').text('Demo API OTA - Busqueda - Destino');

        return this;
    },
    showBox: function (tipo, inputCampo, img) {
    	// Cargamos las opciones del catalogo
        //var catalogo = new jtCatalogo();
        
        if (tipo == 'DESTINO') {
            // Para cada opcion la agregamos, si es un enlace enlazamos el campo para informar la seleccion
        	this.opciones.add(new jt_optionBox({cod:'Mallorca', nombre: 'Mallorca', enlace: false}));
	        this.opciones.add(new jt_optionBox({cod:'PD06', nombre: 'Mallorca', enlace: true, objLink: inputCampo, imgLink:img}));
	        this.opciones.add(new jt_optionBox({cod:'PD06E', nombre: 'Mallorca Especial', enlace: true, objLink: inputCampo, imgLink:img}));
	        this.opciones.add(new jt_optionBox({cod:'Ribera Maya', nombre: 'Ribera Maya', enlace: false}));
	        this.opciones.add(new jt_optionBox({cod:'PDRM', nombre: 'Ribera Maya', enlace: true, objLink: inputCampo, imgLink:img}));
	    } else {
	        // Para cada opcion la agregamos, si es un enlace enlazamos el campo para informar la seleccion
	        this.opciones.add(new jt_optionBox({cod:'MAD', nombre: 'Madrid', enlace: true, objLink: inputCampo, imgLink:img}));
	        this.opciones.add(new jt_optionBox({cod:'BCN', nombre: 'Barcelona', enlace: true, objLink: inputCampo, imgLink:img}));
	        this.opciones.add(new jt_optionBox({cod:'PMI', nombre: 'Palma de Mallorca', enlace: true, objLink: inputCampo, imgLink:img}));
	        this.opciones.add(new jt_optionBox({cod:'ZRZ', nombre: 'Zaragoza', enlace: true, objLink: inputCampo, imgLink:img}));
	        this.opciones.add(new jt_optionBox({cod:'SVQ', nombre: 'Sevilla', enlace: true, objLink: inputCampo, imgLink:img}));
	        this.opciones.add(new jt_optionBox({cod:'SLM', nombre: 'Salamanca', enlace: true, objLink: inputCampo, imgLink:img}));
	        this.opciones.add(new jt_optionBox({cod:'BIO', nombre: 'Bilbao', enlace: true, objLink: inputCampo, imgLink:img}));
	    }
    },
    hideBox: function () {
      // Borramos la ventana
      $('title').text('Demo API OTA - Busqueda');
      this.remove();
    },
    addOne: function(opcion) {
        var view = new jt_optionView({model: opcion, boxView: this});
        this.$("#jt_option-list").append(view.render().el);
    }
  });

})(Zepto);
