function createRow(){
	var name = document.getElementById('name').value;
	var age = parseInt(document.getElementById('age').value);
	var email = document.getElementById('email').value;
	if (isNaN(age)) {
		alert("please input a number");
		return;
	}   
	var sex;
	if (document.getElementById('sexM').checked){
		sex = document.getElementById('sexM').innerHTML = "<img src='male.png'>";
	}
	else if (document.getElementById('sexW').checked){
		sex = document.getElementById('sexW').innerHTML = "<img src='female.png'>";
	}

	addRowToTable([name, email, age, sex]);   
}

function addRowToTable(values) {
	
	var newRow = document.createElement("tr");
	var columnCount = document.getElementById('resultHeaderRow').children.length;

	for (var i = 0; i < columnCount; i++) {
	newRow.appendChild(createCell(values[i]));
	}
	document.getElementById('resultTable').appendChild(newRow);
}

function createCell(value){
	var newCell = document.createElement("td");
	newCell.innerHTML = value;
	return newCell;
}
function sortName() {
    var tableData = document.getElementById('resultTable').getElementsByTagName('tbody').item(0);
        var rowData = tableData.getElementsByTagName('tr'); 

        for(var i = 0; i < rowData.length - 1; i++) {
            for(var j = 0; j < rowData.length - (i + 1); j++) {
                if(parseInt(rowData.item(j).getElementsByTagName('td').item(0).innerHTML) > parseInt(rowData.item(j+1).getElementsByTagName('td').item(0).innerHTML)) {
                    tableData.insertBefore(rowData.item(j+1),rowData.item(j));
                }
            }
        }
    }

var letters=' ABCÇDEFGHIJKLMNÑOPQRSTUVWXYZabcçdefghijklmnñopqrstuvwxyzàáÀÁéèÈÉíìÍÌïÏóòÓÒúùÚÙüÜ'
var numbers='1234567890./'
var signs=',.:;@-\''
var mathsigns='+-=()*/'
var custom='<>#$%&?¿'

function alpha(e,allow) {
     var k;
     k=document.all?parseInt(e.keyCode): parseInt(e.which);
     return (allow.indexOf(String.fromCharCode(k))!=-1);
}

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

//vypocitanie veku

//koniec pocitania veku