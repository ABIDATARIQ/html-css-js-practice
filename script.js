function generateresult(){
    let name = document.getElementById("name").value;
    let val1 = document.getElementById("sub1").value;
    let val2 = document.getElementById("sub2").value;
    let val3 = document.getElementById("sub3").value;
    

// check if any field is empty
val1 = Number(val1);
val2 = Number(val2);
val3 = Number(val3);
// calculate total and percentage
let total = val1 + val2 + val3;
let percentage = (total/300) * 100;
// determine grade and status
var grade;
var status;

if (percentage >= 90) {
    grade = "A+";
    status = "pass";
} else if (percentage >= 80){
    grade = "A";
    status = "pass";
} else if (percentage >= 70){
    grade = "B";
    status = "pass";
}else if (percentage >= 60){
    grade = "C";
    status = "pass";
} else if (percentage >= 50){
    grade = "D";
    status = "pass";
} else {
    grade = "F";
    status = "Fail";
}
// Show Result
let result = document.getElementById("result");
result.innerHTML = "<p>Student Name: " + name + "</p>" +
 "<p>Total Marks:" + total + " / 300</p>" +
  "<p>Percentage:" + percentage.toFixed(2) + "%</p>" +
   "<p>Grade:" + grade + "</p>";
if (status === "pass"){
    result.innerHTML += "<p class='pass'>Status:" + status + "</p>";
}else {
    result.innerHTML += "<p class='fail'>Status:" + status + "</p>";
}
}