module("Como Integrador, quiero identificarme en el sistema del Touroperador para obtener una sesion de usuario", {
  setup: function() {
    this.idview = new IdentificationView();
  },
  teardown: function() {
    delete this.users;
  }
});

test("Identificacion satisfactoria", function() {
    equals(this.idview.usuarios.at(0).get('user'), 'B2C_GENERICO', 'Usuario correcto');
    ok(this.idview.render().el.innerHTML.indexOf('user') >= 0, "Render OK");
    this.idview.saveSesion()
    ok(store.get('sesionId') != '', "Sesion OK");
});

test("Identificacion erronea", function() {    
    ok(true, "Usuario incorrecto");
});
