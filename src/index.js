import './style.css';
console.log('hello, world');
                  
//check for todolist in memory
function addItem(item){
    toDoList.push(item)
    localStorage.setItem('toDoList',JSON.stringify(toDoList))
}
function toDoItem (title,description,dueDate,priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority

}
function toDoListView(list) {
    let content = document.createElement('div')
    list.forEach(listItem => {
        let itemDiv = document.createElement('div')
        itemDiv.innerText = listItem.title
        content.appendChild(itemDiv)
    });
    return content;
}



//load todolist
//display todolist
let toDoList= []
if (localStorage.getItem('toDoList')){
   toDoList = JSON.parse(localStorage.getItem('toDoList'))
   console.log(toDoList)
}
let body = document.querySelector('.content')
body.append(toDoListView(toDoList))


console.table(toDoList)

