const prompt = require('prompt-sync')();
function straight_triangle(){
	console.log("how many triangle u want to build?")
	const number_of_triangle = prompt(':');
	console.log("from what string u want make your triangle? ")
	const string_to_be_build = prompt(':');
	console.log("how much should be the length of the last line of your triangle?")
	const length_of_the_last_line= prompt(':');
	for (let i = 0; i < number_of_triangle; i++) {
		for (let x = string_to_be_build; x.length < parseInt(length_of_the_last_line)+1; x+=string_to_be_build) {
			console.log(x);
		}
	}
}
function up_side_down_triangle() {
	console.log("how many triangle u want to build?")
	const number_of_triangle = prompt(':');
	console.log("from what string u want make your triangle? ")
	const string_to_be_build = prompt(':');
	console.log("how much should be the length of the last line of your triangle?")
	const length_of_the_last_line= prompt(':');
	for (var main_loop = 0; main_loop < 1; main_loop++) {
		let x = ""
		for (var string = string_to_be_build; string.length < parseInt(length_of_the_last_line)+1; string += string_to_be_build) {
			x +=string_to_be_build
		}

		for(var i = 1 ; i > 0; i--) {
			for (var y = 1; y > 0;y--){
				x = x.split("");
				for (var building_triangles = number_of_triangle; building_triangles >0; building_triangles--) {
					
					for (var w = parseInt(length_of_the_last_line) ; w > 0; w--) {
						let print =''
						for (u in x) {
							print+=x[u]
						}
						console.log(print)
						x.pop()
					}
					for (var string = string_to_be_build; string.length < parseInt(length_of_the_last_line)+1; string += string_to_be_build) {
						x +=string_to_be_build
					}
					for(var i_2 = 1 ; i_2 > 0; i_2--) {
						for (var y_2 = 1; y_2 > 0;y_2--){
							x = x.split("");
						}
					}
				}
			} 	
		}
	}
}
function left_right_angled_triangle() {
	console.log("how many triangle u want to build?")
	const number_of_triangle = prompt(':');
	console.log("from what string u want make your triangle? ")
	const string_to_be_build = prompt(':');
	console.log("how much should be the length of the last line of your triangle?")
	const length_of_the_last_line= prompt(':');
	for (var main_loop = 0; main_loop < 1; main_loop++) {
		let x = ""
		for (var string = " "; string.length < parseInt(length_of_the_last_line); string +=" " ) {
			x +=' '
		}
		for(var i = 1 ; i > 0; i--) {
			for (var y = 1; y > 0;y--){
				x = x.split("");
				for (var building_triangles = number_of_triangle; building_triangles > 0 ; building_triangles--) {
					let new_var_be = string_to_be_build
					
					for (var w = parseInt(length_of_the_last_line)+1 ; w > 1; w--) {
						let print =''
						for (u in x) {
							print+=x[u]
						}
						console.log(print+new_var_be)
						new_var_be+=string_to_be_build
						x.pop()
					}
					for (var string = " "; string.length < parseInt(length_of_the_last_line); string += " ") {
						x +=" "
					}
					for(var i_2 = 1 ; i_2 > 0; i_2--) {
						for (var y_2 = 1; y_2 > 0;y_2--){
							x = x.split("");
						}
					}
				}
			} 	
		}
	}
}




function left_sided_up_side_down_triangle(){
	console.log("how many triangle u want to build?")
	const number_of_triangle = prompt(':');
	console.log("from what string u want make your triangle? ")
	const string_to_be_build = prompt(':');
	console.log("how much should be the length of the last line of your triangle?")
	const length_of_the_last_line= prompt(':');
	for (var main_loop = 0; main_loop < 1; main_loop++) {
			let x = ""
			for (var string = string_to_be_build; string.length < parseInt(length_of_the_last_line)+1; string += string_to_be_build) {
				x +=string_to_be_build
			}	
			for(var i = 1 ; i > 0; i--) {
				for (var y = 1; y > 0;y--){
					x = x.split("");
					for (var building_triangles = number_of_triangle; building_triangles >0; building_triangles--) {
						let new_var_be = " "
						for (var w = parseInt(length_of_the_last_line) ; w > 0; w--) {
							let print =''
							for (u in x) {
								print+=x[u]
							}
							console.log(new_var_be+print)
							new_var_be+= " "
							x.pop()
						}
						for (var string = string_to_be_build; string.length < parseInt(length_of_the_last_line)+1; string += string_to_be_build) {
							x +=string_to_be_build
						}
						for(var i_2 = 1 ; i_2 > 0; i_2--) {
							for (var y_2 = 1; y_2 > 0;y_2--){
								x = x.split("");
							}
						}
					}
				} 	
			}
		}
}

while (true){
	console.log("what type of triangle you want?\n")
	console.log("1)Right angled at right triangle \t 3)Right angled at left triangle\n2)Right angled and up side down triangle \t 4)Right angled at left and up side down triangle \n")
	console.log("choose the options 1),2),3),4)")
	const triangle_type = prompt(":")
	console.log(triangle_type)
	if (triangle_type == "1"){
		console.clear()
		straight_triangle()
		prompt("Enter any button to proceed:")
	}
	else if (triangle_type == "2") {
		console.clear()
		up_side_down_triangle()
		prompt("Enter any button to proceed:")
	}
	else if (triangle_type == "3") {
		console.clear()
		left_right_angled_triangle()
		prompt("Enter any button to proceed:")
	}
	else if (triangle_type == "4") {
		console.clear()
		left_sided_up_side_down_triangle()
		prompt("Enter any button to proceed:")
	}
	else {
		console.log("loop")
	}
	console.clear()
}
//straight_triangle()
//up_side_down_triangle()
//left_right_angled_triangle()
/*
						.________________________.
						|completed at 19/10/2019 |
						|________________________|
*/
