var AppRouter = Backbone.Router.extend({
    routes: {
        "/siguiente": "showAlert",
        "/busqueda": "showBusqueda",
        "*actions": "showIdentificacion"
    },
    showIdentificacion: function( id ) {
        idview = new IdentificationView();
        $('body').append(idview.render().el);   
    },
    showBusqueda: function( id ) {
        bview = new BusquedaView();
        $('body').append(bview.render().el);   
    },
    showAlert: function( siguiente ){
        alert( siguiente ); 
    }
});
