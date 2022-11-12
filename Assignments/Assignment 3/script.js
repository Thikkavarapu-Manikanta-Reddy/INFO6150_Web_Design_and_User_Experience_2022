function dropDownTextAreaToggleFunctionality() {
  var imageTagList = document.getElementsByTagName("img");

  for (i = 0; i < imageTagList.length; i++) {
    imageTagList[i].className = "arrow";
  }

  var arrow = document.getElementsByClassName("arrow");

  for (i = 0; i < arrow.length; i++) {
    arrow[i].onclick = function () {
      var dropDownTextArea = this.parentNode.parentNode.nextElementSibling;
      if (dropDownTextArea.style.display === "none") {
        dropDownTextArea.style.display = "table-row";
      } else {
        dropDownTextArea.style.display = "none";
      }
    }
  }
}

function checkboxToggleAndActionFunctionality() {
  var inputList = document.getElementsByTagName("input");

  for (i = 0; i < inputList.length; i++) {
    inputList[i].className = "checkbox";
  }

  var checkbox = document.getElementsByClassName("checkbox");

  for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = function () {

      var grandParentNode = this.parentNode.parentNode;

      if (this.checked) {

        var trList = document.getElementsByTagName("tr");

        if (trList[0].lastElementChild.innerHTML !== "Edit") {
          var th = document.createElement("th");
          var txtDelete = document.createTextNode("Delete");

          th.appendChild(txtDelete);
          trList[0].appendChild(th);
          th = document.createElement("th");

          var txtEdit = document.createTextNode("Edit");
          th.appendChild(txtEdit);
          trList[0].appendChild(th);
        }

        txtDelete = document.createTextNode("Delete");
        var td = document.createElement("td");
        var button = document.createElement("button");
        button.appendChild(txtDelete);
        button.className = "delete";
        td.appendChild(button);

        grandParentNode.appendChild(td);

        txtEdit = document.createTextNode("Edit");
        td = document.createElement("td");
        button = document.createElement("button");
        button.appendChild(txtEdit);
        button.className = "edit";
        td.appendChild(button);

        grandParentNode.appendChild(td);
        grandParentNode.style.backgroundColor = "orange";

        editFunctionality();
        deleteFunctionality();
      } else {
        grandParentNode.style.backgroundColor = "";
        grandParentNode.removeChild(grandParentNode.lastElementChild);
        grandParentNode.removeChild(grandParentNode.lastElementChild);
      }
      submitFunctionality();
    }
  }
}

function newStudent() {
  var rows = document.getElementById("myTable").rows;
  var lastStudentAndTeacherNumber;
  if (rows.length > 1) {
    lastStudentAndTeacherNumber = parseInt(rows[rows.length - 2].firstElementChild.nextElementSibling.innerHTML.split(" ")[1]) + 1;
  }
  else {
    lastStudentAndTeacherNumber = 1;
  }
  var table = document.getElementById("myTable");
  var tr = document.createElement("tr");

  var td = document.createElement("td");
  var input = document.createElement("input");
  input.type = "checkbox";
  td.appendChild(input);
  td.appendChild(document.createElement("br"));
  td.appendChild(document.createElement("br"));
  image = document.createElement("img");
  image.setAttribute("src", "down.png");
  image.setAttribute("width", "25");
  td.appendChild(image);
  tr.appendChild(td);

  td = document.createElement("td");
  var textNode = document.createTextNode("Student " + lastStudentAndTeacherNumber);
  td.appendChild(textNode);
  tr.appendChild(td);

  td = document.createElement("td");
  textNode = document.createTextNode("Teacher " + lastStudentAndTeacherNumber);
  td.appendChild(textNode);
  tr.appendChild(td);

  td = document.createElement("td");
  textNode = document.createTextNode("Approved");
  td.appendChild(textNode);
  tr.appendChild(td);

  td = document.createElement("td");
  textNode = document.createTextNode("Fall");
  td.appendChild(textNode);
  tr.appendChild(td);

  td = document.createElement("td");
  textNode = document.createTextNode("TA");
  td.appendChild(textNode);
  tr.appendChild(td);

  td = document.createElement("td");
  textNode = document.createTextNode("765755");
  td.appendChild(textNode);
  tr.appendChild(td);

  td = document.createElement("td");
  textNode = document.createTextNode("100%");
  td.appendChild(textNode);
  tr.appendChild(td);

  table.appendChild(tr);

  tr = document.createElement("tr");
  tr.className = "dropDownTextArea";
  td = document.createElement("td");
  td.colSpan = "8";
  td.innerHTML = 'Advisor:<br /><br /> Award Details<br/>Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />';
  tr.appendChild(td);

  table.appendChild(tr);

  alert("Record added successfully...!!");

  dropDownTextAreaToggleFunctionality();
  checkboxToggleAndActionFunctionality();
}

function editFunctionality() {
  var editList = document.getElementsByClassName("edit");
  for (i = 0; i < editList.length; i++) {
    editList[i].onclick = function () {
      prompt("Edit the details");
    }
  }
}

function deleteFunctionality() {
  var deleteList = document.getElementsByClassName("delete");
  for (i = 0; i < deleteList.length; i++) {
    deleteList[i].onclick = function () {
      var grandParentNode = this.parentNode.parentNode;
      var studentName = grandParentNode.firstElementChild.nextElementSibling.innerHTML;
      grandParentNode.nextElementSibling.remove();
      grandParentNode.remove();
      alert("Record of student " + studentName + " deleted successfully...!!");
      submitFunctionality();
    }
  }
}

function submitFunctionality() {
  var checkbox = document.getElementsByClassName("checkbox");
  var enableSubmitButton = false;

  for (j = 0; j < checkbox.length; j++) {
    if (checkbox[j].checked) {
      enableSubmitButton = true;
      break;
    }
  }

  var buttonElement = document.getElementById("button");

  if (enableSubmitButton) {
    buttonElement.style.backgroundColor = "orange";
    buttonElement.style.border = "2px solid orange";
  }
  else {
    buttonElement.style.backgroundColor = "grey";
    buttonElement.style.border = "2px solid grey";
    removeOrNotDeleteEditHeader();
  }
}

function removeOrNotDeleteEditHeader() {
  var trList = document.getElementsByTagName("tr");
  trList[0].removeChild(trList[0].lastElementChild);
  trList[0].removeChild(trList[0].lastElementChild);
}

dropDownTextAreaToggleFunctionality();
checkboxToggleAndActionFunctionality();