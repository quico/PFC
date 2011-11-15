var AppRouter = Backbone.Router.extend({
    routes: {
        "/siguiente": "showAlert",
        "*actions": "showIdentificacion"
    },
    showIdentificacion: function( id ) {
        idview = new IdentificationView();
        $('body').append(idview.render().el);   
    },
    showAlert: function( siguiente ){
        alert( siguiente ); 
    }
});
