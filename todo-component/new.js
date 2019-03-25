todoList = ['ashok', 'tanish', 'dinesh', 'imaran', 'harish', 'surya'];
/* todoList=[] */
myTodoCount = 0;
/* var checkedItemIndex; */
completedArray = [];
ActiveArray = [];
var listType = "ALL"; // ( "ALL" or "ACTIVE" or "COMPLETED" )
var ListofTODO = document.getElementById("StoreTodos");
function createTODO() {
    TodoInputValue = document.getElementById("TaskInput").value;
    todoList.push(TodoInputValue);
    document.getElementById("TaskInput").value = "";
    updateToDoList();
}
function updateToDoList() {
    var ListofTODO = document.getElementById("StoreTodos");
    var listsToDisplay = getListItems();
    ListofTODO.innerHTML = "";
    for (var i = 0; i < listsToDisplay.length; i++) {
        myTodoCount = listsToDisplay.length;
        var div = document.createElement("div");
        div.setAttribute("id", listsToDisplay[i]);
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("value", listsToDisplay[i]);
        input.setAttribute("id", "chkb" + i);
        input.setAttribute("style", "color:red");
        var itemExsists = completedArray.find(function (ele) { return (ele == listsToDisplay[i]); });
        console.log("element>>>>>>>>>>", itemExsists);
        if (itemExsists) {
            input.setAttribute("checked", "checked");
           
            /* label.setAttribute("class", "striked"); */
        }
        var label = document.createElement("label");
        label.setAttribute("id", listsToDisplay[i]);
        var TextLabel = document.createTextNode(listsToDisplay[i])
        label.appendChild(TextLabel);
        var deleteButton=document.createElement("span");
        var Textbutton = document.createTextNode("x");
        deleteButton.appendChild(Textbutton);
        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(deleteButton);
        ListofTODO.appendChild(div);
        input.onclick = completed;
       /*  deleteButton.onclick=deleteTask; */
    }
    document.getElementById("count").innerHTML = myTodoCount + "" + "Items Left";
}
function completed(event) {
    var checkedItem = event.target.value;
    if (event.target.checked) {
        var itemExsists = completedArray.find(function (i) { return (i == checkedItem); });
        if (!itemExsists) {
           /*  var element = document.getElementById(event.target.value);
            element.classList.add("striked"); */
            completedArray.push(checkedItem);
            
        }
    } else {
        var checkedItemIndex = completedArray.indexOf(checkedItem);
        console.log("completeArray>>>>>before===="+completedArray)
       
        completedArray.splice(checkedItemIndex, 1);
        console.log("completeArray>>>>>after==="+completedArray)
    }
    updateToDoList()
}
function setListType(type) {
    listType = type;
    updateToDoList();
}
function getListItems() {
    var listsToDisplay = [];
    if (listType === 'ACTIVE') {
        listsToDisplay = todoList.filter(x => !completedArray.includes(x));
    } else if (listType === 'COMPLETED') {
        listsToDisplay = completedArray;
    }
    else {
        listsToDisplay = todoList;
    }
    return listsToDisplay;
}
function clearCompletedItems() {
    for (i = 0; i < completedArray.length; i++) {
        todoList.find(function (ele) {
            if (ele == completedArray[i]) {
                todoList.splice(todoList.indexOf(ele), 1)
            }
        })
    }
    completedArray = [];
    updateToDoList();
    /** iterate completedArray and if the element if in the "todoList" then remove it from "todoList" 
     * after itreration comepetes empty the  "completedArray"
     * invoke updateToDoList();
    */
}
 