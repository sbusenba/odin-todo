import './style.css';
import itemView from './itemView'
import navDiv from './navView'              
import editView from './editView'

function addItem(item){
    item.priority = toDoList.length 
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
function getSelected(){
    let item = 'nothing selected';
    toDoList.forEach((toDoItem) => {
        console.log(toDoItem.selected)
        if (toDoItem['selected']){
        console.log('getselected returning:')
        console.table(toDoItem)
        item = toDoItem
    }})
    return item    
}
function increasePriority(){
    let tempItem = getSelected()
    let index = toDoList.indexOf(tempItem)
    if (index > 0){
        tempItem = toDoList[index-1]
        toDoList[index-1] = toDoList[index]
        toDoList[index] = tempItem
        toDoList[index].priority = index+1
        toDoList[index-1].priority = index
    }
    displayList();
    let editButton = document.querySelector('.editButton')
    editButton.addEventListener('click',editItem)
    let deleteButton = document.querySelector('.deleteButton')
    deleteButton.addEventListener('click',removeItem)
    let upButton = document.querySelector('.priorityUpButton')
    upButton.addEventListener('click',increasePriority)
    let downButton = document.querySelector('.priorityDownButton')
    downButton.addEventListener('click',decreasePriority)
}
function decreasePriority(){
    let tempItem = getSelected()
    let index = toDoList.indexOf(tempItem)
    if (index < (toDoList.length-1)){
        tempItem = toDoList[index+1]
        toDoList[index+1] = toDoList[index]
        toDoList[index] = tempItem
        toDoList[index].priority = index+1
        toDoList[index+1].priority = index+2
    }
    displayList();
    let editButton = document.querySelector('.editButton')
    editButton.addEventListener('click',editItem)
    let deleteButton = document.querySelector('.deleteButton')
    deleteButton.addEventListener('click',removeItem)
    let upButton = document.querySelector('.priorityUpButton')
    upButton.addEventListener('click',increasePriority)
    let downButton = document.querySelector('.priorityDownButton')
    downButton.addEventListener('click',decreasePriority)
}



function selectItem(){
    toDoList.forEach((item)=>{item.selected = false})
    toDoList[this['data-key']].selected = true
    displayList();
    let editButton = document.querySelector('.editButton')
    editButton.addEventListener('click',editItem)
    let deleteButton = document.querySelector('.deleteButton')
    deleteButton.addEventListener('click',removeItem)
    let upButton = document.querySelector('.priorityUpButton')
    upButton.addEventListener('click',increasePriority)
    let downButton = document.querySelector('.priorityDownButton')
    downButton.addEventListener('click',decreasePriority)

    console.log('item selected')

}



function removeItem(){
    toDoList.forEach((item,index)=>{
        if (item.selected){
            toDoList.splice(index,1)

        }
    })
    deselectAll()
    displayList()

}
function deselectAll(){
    toDoList.forEach(toDoItem=>(toDoItem.selected = false))
}
function editItem(){
    displayEdit(getSelected())
}

function clearDisplay(){
    while (content.firstChild){
        content.removeChild(content.firstChild)
    }
}
function displayList(){

    clearDisplay()
    content.appendChild(navDiv())
    let newButton = document.querySelector('.addButton')
    newButton.addEventListener('click', displayNew)
    content.appendChild(toDoListView(toDoList))
    save()
    
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
    content.appendChild(editView(getSelected()))
    let saveButton = document.querySelector('.editSave')
    saveButton.addEventListener('click',saveEdit)
}

function displayNew(){
    let item = new toDoItem();
    clearDisplay()
    deselectAll()
    item.selected =true
    content.appendChild(editView(item))
    let saveButton = document.querySelector('.editSave')
    saveButton.addEventListener('click',saveEdit)
    addItem(item)
}
function saveEdit(){
    toDoList.forEach((item)=>{if (item.selected){
        item.title = document.querySelector('.titleEdit').value
        item.description = document.querySelector('.descEdit').value
        item.dueDate = document.querySelector('.dateEdit').value
        item.selected = false
    } })
     save()
     console.log('saveEdit Called')
     displayList()
}


let toDoList= []
//toDoList.push(new toDoItem('float','ride the onewheel','today','high'))
//toDoList.push(new toDoItem('empty dishwasher','put the dishes in the appropriate places','today','medium'))
//toDoList.push(new toDoItem('code ','practice javascript','today','high'))

if (localStorage.getItem('toDoList')){
   toDoList = JSON.parse(localStorage.getItem('toDoList'))
}
toDoList.forEach((item,index)=>{item.priority = index+1} )
let content = document.querySelector('.content')
deselectAll()
displayList()
