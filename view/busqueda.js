(function ($) {
   
  window.BusquedaView = Backbone.View.extend({
    tagName : "div",
    initialize: function () {
      this.criterios = new BusquedaList(new BusquedaModel());
      //alert(JSON.stringify(this.usuarios));
    },
    events: {
      "click #busquedabt": "Busqueda",
      "click #Destino": "showBoxDestino",
      "click img.cerrar_box": "hideBoxDestino",
    },
    render: function () {
        var template = '\
            <table><tr><td>Destino</td></tr><tr>\
            <td><input type="text" name="Destino" id="Destino" value="{{ destino }}" size="15" maxlength="30" readonly="readonly"></td>\
            </tr><tr><td>Password</td>\
            </tr></table>\
            <button id="busquedabt">Buscar</button>\
            <div class="box"><img class="cerrar_box" src="./resources/img/cerrar_ico.png" alt="Cerrar" /><div id="textBox" class="txt_box"></div></div>\
        ';
    
        this.el.innerHTML = Mustache.to_html(template, this.criterios.at(0).attributes);
        $('title').text('Demo API OTA - Busqueda');
        //$("#sesion").text('Sesion obtenida: ' + store.get('sesionId'));
        return this;
    },
    Busqueda: function () {           
      // Navegamos a la consulta de producto
      $(".box").hide(2000);
      //Backbone.history.navigate('/consulta', true);
    },
    showBoxDestino: function () {
      // Navegamos a la consulta de producto
      var catalogo = new jtCatalogo();
      //alert(JSON.stringify(catalogo.obtenerDestinos()));
      
      var htmlbox = '';
      $(".box").show("slow");
      $.each(catalogo.obtenerDestinos() , function(k, v) {
        if ( k == 'arrayofarea' ) {
            $.each(v , function(i, j) {
                if ( i == 'area' ) {
                    $.each(j , function(a, b) {
                        if ( a == 'subareas') {
                            $.each(b , function(c, d) {
                                if ( c == 'subarea') {
                                    $.each(d , function(e, f) {
                                        //if (e == 'Nom') $("#textBox").html(JSON.stringify(f));
                                        if (e == 'destinos') {
                                            $.each(f , function(g, h) {
                                                if (g == 'destino') {
                                                    $.each(h , function(k, l) {
                                                        if (k == 'nom') htmlbox +='<b>' + l + '</b><br/>';
                                                        if (k == 'dcps') {
                                                            $.each(l , function(m, n) {
                                                                if (m=='dcp') {
                                                                    htmlbox += '';
                                                                    $.each(n , function(o, p) {
                                                                        //alert( "Key: " + o + ", Value: " + p );
                                                                        if (o == 'nom') {
                                                                            htmlbox += '<div class="opcion_box"><u>' + p + '</u></div><br/>';
                                                                        }
                                                                    });
                                                                    htmlbox += '';
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
      });
      $("#textBox").html(htmlbox);
    },
    hideBoxDestino: function () {
      // Escondemos la ventana de destinos
      $(".box").hide(2000);
    }
  });

})(Zepto);

