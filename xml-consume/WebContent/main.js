(function(){
	"use strict"
	
	$(document).ready(function(){
		$("#loadBtn").click(function() {
			$.ajax({
				type: "GET",
				url: "products.xml",
				datatype: "xml",
				error: function(jqXHR, textStatus, errorThrown) {
					console.log('Error: ' + errorThrown);
				},
				success: function(xml) {
					console.log('AJAX Request is succeded.');

					var productsTable = '';
					productsTable += '<table id="productsTable cellspacing="0" cellpadding="2" border="1">' ;

					productsTable += '<thead><td>Id</td><td>Name</td><td>Price</td><td>Discount</td></thead>';

					$(xml).find('product').each(function(){
						productsTable += '<tr>';
						productsTable += '<td>';
						productsTable += $(this).find('id').text();
						productsTable += '</td>';

						productsTable += '<td>';
						productsTable += $(this).find('name').text();
						productsTable += '</td>';

						productsTable += '<td>';
						productsTable += $(this).find('price').text();
						productsTable += '</td>';

						productsTable += '<td>';
						productsTable += $(this).find('discount').text();
						productsTable += '</td>';

						productsTable += '</tr>';
					});
					productsTable += '</table>';
					$("#products").append(productsTable);
				}
			});
		});
	});
	
	
	
})()