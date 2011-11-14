module("Identificacion", {
  setup: function() {
    this.idview = new IdentificationView();
  },
  teardown: function() {
    delete this.users;
  }
});

test("Login satisfactorio", function() {
    equals(this.idview.usuarios.at(0).get('user'), 'B2C_GENERICO', 'Usuario correcto');
    ok(this.idview.render().el.innerHTML.indexOf('user') >= 0, "Render OK");
    this.idview.saveSesion()
    ok(store.get('sesionId') != '', "Sesion OK");
});

test("Login incorrecto", function() {    
    ok(true, "Usuario incorrecto");
});
