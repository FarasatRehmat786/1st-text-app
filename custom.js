function func(){
	var highlightedWords = [];
	document.getElementById("text").addEventListener('mouseup', function() {

  var selectedText = window.getSelection().toString();

  if(highlightedWords = []){
  	 highlightedWords.push(selectedText);
   }

  document.getElementById("highlighted-words").textContent = highlightedWords;
});
}

func()


// let student1 = {
// 	fName : 'ali',
// 	lName : "haider",
// 	fathersName : "javed iqbal",
// 	contact : 123234456778,
// 	gender : "male",
// 	cl : "matric"
// }
// let student2 = {
// 	fName : 'hashim',
// 	lName : "khan",
// 	fathersName : "javed iqbal",
// 	contact : 123234456778,
// 	gender : "male",
// 	cl : "matric"
// }

// let fullName = ({fName, lName})=> {
// 	return `${fName} ${lName}`
// }
