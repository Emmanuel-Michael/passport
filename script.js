// SPREAD IN JS 
var num = [1,2,3,20,4,5,6,7,8,9]
for(n of num){
var maximumNo = Math.max(...num)
console.log(maximumNo)

}
var name = "Vane"

var lettes = [...name]
console.log(lettes)

var boys = ["Kelvin","Samy","Mwangi","Brian"]
var girls = ["Vane","Angel","Keziah","Cate"]
var staff = ["Hasaan", "Liza","Emmanuel","Nzomo","Daniel"]
var supporStaff = ["Joy", "Anne","Fidel"]
var people = [...boys,...girls,...staff,...supporStaff]
console.log(people)

// var people = [...staff,...supporStaff]
// var allPeople = [...allStudents,...people]
// console.log(allPeople)


// Excercise - 1
// Develop a simple switch case application to indicate indication january - december(1-12) respectively anything outside 1-12 should throw Invalid Month, the dafault should be Enter a valid month
// Excercise - 2 

// Using any loop of your choice create arrays of domestic animals and wild animals each, use spread method to concat  2 arays and use the loop method to print the animals altogether

// /FOR EACH LOOPS IN JS


const languages = ["HTML", "CSS", "JS","PY", "JV","PHP","SQL","Node JS","C#"];
languages.forEach( function(l){
    console.log(l)
})

