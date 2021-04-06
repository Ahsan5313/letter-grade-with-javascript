var marks=parseFloat(prompt("Enter your marks : "));

if(marks>=101 || marks<=0)
document.write("invalid marks");

else if (marks>=80 && marks<=100)
document.write("The Grade is = " + "A+");

else if (marks>=70 && marks<=79)
document.write("The Grade is = " + "A");

else if (marks>=60 && marks<=69)
document.write("The Grade is = " + "A-");

else if (marks>=50 && marks<=59)
document.write("The Grade is = " + "B");

else if (marks>=40 && marks<=49)
document.write("The Grade is = " + "C");

else if (marks>=33 && marks<=39)
document.write("The Grade is = " + "D");

else
document.write("The Grade is = " + "Fail");











