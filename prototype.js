





function EmailList (name) {
	this.name = name; 
	this.list = [];
}

var nameStudent = new EmailList ("Bssa Students")
var nameTeacher = new EmailList ("Bssa Teachers")

EmailList.prototype.addEmail = function (email) {
	this.list.push(email);
	console.log("email added")
}

EmailList.prototype.sendEmailToAll = function (tekst) {
	console.log("email content" + " " + tekst)
	console.log("sending email to" + " " + this.list)
}

nameStudent.addEmail("anthony_wever@yahoo.com");
nameTeacher.addEmail("teacher@yahoo.com");
console.log(nameStudent);
console.log(nameTeacher);

nameStudent.sendEmailToAll("this is the email content");
nameTeacher.sendEmailToAll("content for teachers");


//




