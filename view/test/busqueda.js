module("Como integrador quiero realizar una busqueda del producto ofrecido por el Touroperador", {
  setup: function() {
    this.bView = null;
  },
  teardown: function() {
    //delete this.users;
  }
});

test("Catalogo", function() {
    // Render de la vista
    var oCat = new jtCatalogo();
    dest = oCat.obtenerDestinos();
    alert(dest);
});

test("Seleccion de criterios de busqueda correcto", function() {
    // Render de la vista
    ok(this.bView.render().el.innerHTML.indexOf('b_destino') >= 0, "Render OK");

    // Cristerios de busqueda seleccionados guardados en memoria
    ok(store.get('jt_busqueda') != '', "Datos OK");
});

test("Datos de catalogo no encontrados", function() {    
    ok(true, "Catalogo no encontrado");
});
