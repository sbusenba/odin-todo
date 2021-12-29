import './style.css';
import itemView from './itemView'
import navDiv from './navView'              
import editView from './editView'

function addItem(item){
    toDoList.push(item)
    save()
}
function save(){
    localStorage.setItem('toDoList',JSON.stringify(toDoList))
}
function toDoItem (title,description,dueDate,priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.selected = false
}
function selectItem(){
    toDoList.forEach((item)=>{item.selected = false})
    toDoList[this['data-key']].selected = true
    displayList();
    let editButton = document.querySelector('.editButton')
    editButton.addEventListener('click',editItem)
    let deleteButton = document.querySelector('.deleteButton')
    deleteButton.addEventListener('click',removeItem)
    console.log('item selected')

}
function removeItem(){
    let parent = this.parentNode
   toDoList.splice(toDoList[parent['data-key']],1)
    displayList()
    save()

}
function editItem(){
    let parent = this.parentNode
    displayEdit(toDoList[parent['data-key']])
}

function clearDisplay(){
    console.log('clearing display')
    while (content.firstChild){
        content.removeChild(content.firstChild)
    }
}
function displayList(){

    clearDisplay()
    content.appendChild(navDiv())
    content.appendChild(toDoListView(toDoList))
}
function toDoListView(list) {
    let html=document.createElement('div')
    list.forEach((item,index) => {
        let newItem = itemView(item)
        if (!item.selected){
        newItem.addEventListener('click',selectItem)
        }
        newItem['data-key'] = index
        html.appendChild(newItem)
     }); 
    return html;
}
function displayEdit(item){
    clearDisplay()
    content.appendChild(editView(item))
    let saveButton = document.querySelector('.editSave')
    saveButton.addEventListener('click',saveEdit(item))
}

function displayNew(){
    let item = new toDoItem();
    clearDisplay()
    
    content.appendChild(editView(item))
    let saveButton = document.querySelector('.editSave')
    saveButton.addEventListener('click',saveEdit(item))
    addItem(item)
}
function saveEdit(item){
     item.title = document.querySelector('.titleEdit').textContent
     item.desc = document.querySelector('.descEdit').textContent
     item.dateDue = document.querySelector('.dateEdit').textContent
     item.selected = false
     save()
     console.log('saveEdit Called')
     displayList()
}


let toDoList= []

if (localStorage.getItem('toDoList')){
   toDoList = JSON.parse(localStorage.getItem('toDoList'))
}

let content = document.querySelector('.content')
displayList()
let newButton = document.querySelector('.addButton')
newButton.addEventListener('click', displayNew())