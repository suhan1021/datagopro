$(function(){
	var data_type = ("<div class='col-sm-2'>"
					+	"<select class='datatype form-control '>"
					+		"<option selected disabled hidden value=''>Data type</option>"
					+		"<option value='number'>Number</option> "
					+		"<option value='string'>String</option>"
					+	"</select>"
					+"</div>");

	var number_type = ("<div class='col-sm-2'>"
					+	"<select class='form-control numbertype'>"
					+		"<option selected disabled hidden value=''>Number type</option>"
					+		"<option value='integer'>Integer</option>"
					+		"<option value='float'>Float</option"
					+	"</select>"
					+"</div>");

	var number_min = ("<div class='col-sm-2'>"
					+	"<input class='form-control numbermin' type='text' placeholder='min'>"
					+"</div>");

	var number_max = ("<div class='col-sm-2'>"
					+	"<input class='form-control numbermax' type='text' placeholder='max'>"
					+"</div>");

	var float_precision = ("<div class='col-sm-2'>"
						+		"<input class='form-control floatprecision' type='text' placeholder='precision'>"
						+	"</div>");
	
	var string_length = ("<div class='col-sm-2'>"
						+	"<input class='form-control stringlength' type='text' placeholder='String length'>"
						+"</div>");

	var choose_charset = ("<div class='col-sm-2'>"
						+	"<select class='form-control choosecharset'>"
						+		"<option value='' hidden disabled selected>Charset</option>"
						+		"<option value='ascii'>ASCII</option> "
						+		"<option value='unicode'>Unicode</option>"
						+	"</select>"
						+"</div>");

	var line_length = ("<div class='col-sm-2'>"
					+		"<input class='form-control linelength' type='text' placeholder='Line length'>"
					+	"</div>");

	var line_break = ("<div class='col-sm-2'>"
					+		"<input class='form-control linebreak' type='text' placeholder='Line break'>"
					+"</div>");

	var word_length = ("<div class='col-sm-2'>"
					+		"<input class='form-control wordlength' type='text' placeholder='Word length'>"
					+	"</div>");

	var word_break = ("<div class='col-sm-2'>"
					+		"<input class='form-control wordbreak' type='text' placeholder='Word break'>"
					+	"</div>");

	var repeat = ("<div class='col-sm-2 repeat'>"
				+ 	"<span class='times'>x</span>"
				+		"<input class='form-control repeattime' type='text' value='1'>"
				+	"<span class='times'>times</span>"
				+"</div>");

	var new_data = ("<div class='row'></div>");
	$(document.body).on("click", ".add", function(){
		$("#datafield").append(new_data);
		$($("#datafield").children()[$("#datafield").children().length-1]).html(data_type);
	});

	$("#datafield").on("change", ".datatype", function(event){ 
		// add or change other input fields after data type specification
		console.log("datatype changed!");
		var data_type_dom = $(event.target);
		console.log(data_type_dom);
		switch (data_type_dom.val()) {
			case "number": 
				if(data_type_dom.parent().parent().find(".numbertype").length == 0)
					data_type_dom.parent().after(number_type);
				break;
			case "string":
				data_type_dom.parent().after(string_length, choose_charset);
				break;
		}
	});

	$("#datafield").on("change", ".numbertype", function(event){
		// add other input fields after number type specification
		console.log("numbertype changed");
		var number_type_dom = $(event.target);
		console.log(number_type_dom);
		switch(number_type_dom.val()) {
			case "integer":
				number_type_dom.parent().after(number_min, number_max);
				break;
			case "float":
				number_type_dom.parent().after(float_precision, number_min, number_max);
				break;
		}
	});

	// $(".integer").closest(".row").draggable({
	// 	helper: "clone"
	// });
	$("#datafield").on("change", ".choosecharset", function(event){
		console.log("chosen charset changed");
		var charset_dom = $(event.target);
		charset_dom.parent().after(line_length, line_break, word_length, word_break);
	});

	$("#datafield").on("focus", ".wordbreak", function(event){	
		var charset = $(event.target).parent().parent().find(".choosecharset:first").val();
		console.log(charset);
		showCharsetTable(charset);
	});

	$("#datafield").on("focus", ".linebreak", function(event){	
		var charset = $(event.target).parent().parent().find(".choosecharset:first").val();
		console.log(charset);
		showCharsetTable(charset);
	});

	function showCharsetTable(charset) {
		$("#tablecontainer").css('z-index', 100);
		$("#tablecontainer").children().css('z-index', -1);
		$("#tablecontainer").children().hide();
		$("#"+charset).css('z-index', 101);
		$("#"+charset).show();
		$("#tablecontainer").show();
	}
	$("#tablecontainer").on("click", function() {
		$(this).css('z-index', -1);
		$(this).children().css('z-index', -1);
		$(this).hide();
	});

	$("#generate").on("click", function() {
		var containers = $("#datafield").find(".row");

	});

});




