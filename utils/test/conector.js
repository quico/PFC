module("conector.js en utils", {
  setup: function() {
    this.xml = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ser="http://www.orizonia.com/ota/services">';
    this.xml += '<soap:Header/>';
    this.xml += '<soap:Body>';
    this.xml += '<ser:OTA_OrizoniaIdentificationRQ>';
    this.xml += '<ser:Identificator>B2C_GENERICO</ser:Identificator>';
    this.xml += '<ser:Password>GENERICO</ser:Password>';
    this.xml += '<ser:System>BLANB</ser:System>';
    this.xml += '<ser:Language>es</ser:Language>';
    this.xml += '</ser:OTA_OrizoniaIdentificationRQ>';
    this.xml += '</soap:Body>';
    this.xml += '</soap:Envelope>';
    this.con = new ConectorAjax('IdentificationService.asmx', 'vigo.apiota.orizonia.com');
  },
  teardown: function() {
    delete this.con;
  }
});

test("Conexion satisfactoria", function() {
    this.con.post(this.xml, 'BeginOTA_OrizoniaIdentification');
    equal(this.con.xmlhttp.method, "POST");
    equal(this.con.xmlhttp.readyState, 4);
    equal(this.con.xmlhttp.status, 200);
    ok(this.con.xmlhttp.async, "Llamada asynchrona");
});

test("Conexion fallida: action incorrecta", function() {    
    this.con.post(this.xml, 'BeginOTA_XXXX');
    equal(this.con.xmlhttp.method, "POST");
    equal(this.con.xmlhttp.readyState, 4);
    equal(this.con.xmlhttp.status, 0);
});
