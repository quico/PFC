var AppRouter = Backbone.Router.extend({
    routes: {
        "/siguiente": "showAlert",
        "/busqueda": "showBusqueda",
        "/consulta": "showConsulta",
        "*actions": "showIdentificacion"
    },
    showIdentificacion: function( id ) {
        idview = new IdentificationView();
        $('body').append(idview.render().el);   
    },
    showBusqueda: function( id ) {
        bview = new BusquedaView();
        $('body').append(bview.render().el);
        bview.showHabitaciones();
    },
    showConsulta: function( id ) {
        cview = new ConsultaView();
        $('body').append(cview.render().el);
    },
    showAlert: function( siguiente ){
        alert( siguiente ); 
    }
});
