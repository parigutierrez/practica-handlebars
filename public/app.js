//alert("Holi");
var template = document.getElementById("index").innerHTML;
		console.log(template);
		var compilar = Handlebars.compile(template);

		var persona = {
			registros:[
			{
				nombre: "Pari",
				apellidos: "<em>Gutiérrez Montúfar<em>",
				edad: 31,
				mayor_edad: false
			},
			{
				nombre: "Grissel",
				apellidos: "<em>Rocha González<em>",
				edad: 31,
				mayor_edad: false
			},
			{
			nombre: "Jonathan",
				apellidos: "<em>Parra Zavala<em>",
				edad: 31,
				mayor_edad: false
			}
			]
		}

		var compiladorHTML = compilar(persona);
		document.getElementById("action").innerHTML += compiladorHTML;