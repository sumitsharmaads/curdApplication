var slectedRow = null;

//function to add data in table
function actionOnButtonClick(){
    var allFormData = buttonClick();
    if(slectedRow == null)
    insertRecord(allFormData);
    else
    updateRecord(allformData);
    resetForm();
}

//Set all values in a object
function buttonClick(){
    var allFormData = {};
    allFormData["fullName"] = document.getElementById('fullName').value;
    allFormData["emailAddress"] = document.getElementById('emailAddress').value;
    allFormData["contactNumber"] = document.getElementById('contactNumber').value;
    allFormData["designation"] =document.getElementById('designation').value;
    console.log(allFormData);
    return allFormData;
}
//Calling a fucntion in another function
function insertRecord(data){
    var table =document.getElementById("employeeData").getElementsByTagName('tbody')[0];
    var addNewRow = table.insertRow(table.length);
    cell1 = addNewRow.insertCell(0);
    cell1.innerHTML =data.fullName;
    cell2 = addNewRow.insertCell(1);
    cell2.innerHTML =data.emailAddress;
    cell3 = addNewRow.insertCell(2);
    cell3.innerHTML =data.contactNumber;
    cell4 = addNewRow.insertCell(3);
    cell4.innerHTML =data.designation;
    cell1 = addNewRow.insertCell(4);
    cell1.innerHTML ='<a href="#" onclick="editEntry(this)">Edit</a>  <a href="#">Delete</a>';
}
//Rest form function
function resetForm() {
    document.getElementById('fullName').value = "";
    document.getElementById('emailAddress').value = "";
    document.getElementById('contactNumber').value = "";
    document.getElementById('designation').value = "";
    slectedRow = null;
}

//edit an entry data from table
function editEntry(td){
    var slectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = slectedRow.cells[0].innerHTML;
    document.getElementById("emailAddress").value = slectedRow.cells[1].innerHTML;
    document.getElementById("contactNumber").value = slectedRow.cells[2].innerHTML;
    document.getElementById("designation").value = slectedRow.cells[3].innerHTML;
}

//Update Record of selected row
function updateRecord(allformData){
    selectedRow.cells[0].innerHTML = allformData.fullName;
    selectedRow.cells[1].innerHTML = allformData.emailAddress;
    selectedRow.cells[2].innerHTML = allformData.contactNumber;
    selectedRow.cells[3].innerHTML = allformData.designation;
}