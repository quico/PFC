(function ($) {
   
  window.jt_habView = Backbone.View.extend({
    tagName: 'li',
    initialize: function (id) {     
    	this.id = id;
        // Inicializamos la coleccion de opciones
        //this.habitaciones = new jt_habList();
        //this.habitaciones.bind('add', this.addOne, this);
    },
    events: {
      "click select.jt_hab-ninyo": "changeNinyo",
    },
    render: function () {
        var template = '<table id="jt_tableHab"><tr><td>Habitacion ' + this.id + '</td>';
        template += '<td>Adultos:</td>';
        template += '<td><select id="jt_hab-adulto">';
        template += '<option value="0">0</option>';
        template += '<option value="1">1</option>';
        template += '<option value="2" selected="selected">2</option>';
        template += '<option value="3">3</option>';
        template += '<option value="4">4</option>';
        template += '<option value="5">5</option>';
        template += '<option value="6">6</option>';
        template += '</select></td>';
        template += '<td>Niños:</td>';
	template += '<td><select id="jt_hab-ninyo" class="jt_hab-ninyo">';
	template += '<option value="0" selected="selected">0</option>';
	template += '<option value="1">1</option>';
	template += '<option value="2">2</option>';
	template += '<option value="3">3</option>';
	template += '<option value="4">4</option>';
	template += '<option value="5">5</option>';
        template += '</select></td></tr>';
        template += '<tr id="jt_edades"></tr>';
        template += '</table>';
        
        
	this.el.innerHTML = Mustache.to_html(template);

        return this;
    },
    addHab: function () {        
        // Para cada opcion la agregamos una habitacion
    	this.habitaciones.add(new jt_hab({adultos: 2, ninyos: 0}));
    },
    hideBox: function () {
      this.remove();
    },
    addOne: function() {
        $("#jt_hab-list").append(this.render().el.innerHTML);
    },
    changeNinyo: function() {
        var value = $("#jt_hab-ninyo")[this.id-1][$("#jt_hab-ninyo")[this.id-1].selectedIndex].value;
        if (value==0) {
        	$("#jt_edades")[this.id-1].innerHTML = "";
        } else if (value==1) {
        	var html = '<td colspan="5">Edades ';
        	html += '<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
        	html += '</td>';
        	$("#jt_edades")[this.id-1].innerHTML = html;
        } else if (value==2) {
        	var html = '<td colspan="5">Edades ';
		html += '<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '</td>';
        	$("#jt_edades")[this.id-1].innerHTML = html;
        } else if (value==3) {
        	var html = '<td colspan="5">Edades ';
		html += '<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '</td>';
        	$("#jt_edades")[this.id-1].innerHTML = html;
        } else if (value==4) {
        	var html = '<td colspan="5">Edades ';
		html += '<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '</td>';
        	$("#jt_edades")[this.id-1].innerHTML = html;
        } else if (value==5) {
        	var html = '<td colspan="5">Edades ';
		html += '<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '&nbsp;<select><option>0</option><option>1</option><option>2</option><option>3</option></select>';
		html += '</td>';
        	$("#jt_edades")[this.id-1].innerHTML = html;
        }
    }
  });

})(Zepto);
