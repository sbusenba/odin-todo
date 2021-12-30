const editView = function (item){
    console.log('editView  called on')
    console.table(item)

    let editViewDiv = document.createElement('div')
    editViewDiv.classList.add('editDiv')
    editViewDiv.textContent= "Edit:"
  
    let titleEditBox = document.createElement('input')
    titleEditBox.type = 'text'
    if (item.title){
        titleEditBox.value= item.title
    } else {
        titleEditBox.value= 'Enter a Title'
    }
    titleEditBox.classList.add('titleEdit')
    editViewDiv.appendChild(titleEditBox)
    
    let descEditBox = document.createElement('input')
    descEditBox.type = 'text'
    if (item['description']){
        descEditBox.value= item['description']
    } else {
        descEditBox.value= 'Enter a description'
    }
    descEditBox.classList.add('descEdit')
    editViewDiv.appendChild(descEditBox)

    let dateEditBox = document.createElement('input')
    dateEditBox.type = 'text'
    if (item.dueDate){
        dateEditBox.value= item['dueDate']
    } else {
        dateEditBox.value = 'enter due date'
    }
    dateEditBox.classList.add('dateEdit')
    editViewDiv.appendChild(dateEditBox)

    let editButton = document.createElement('button')
    editButton.textContent = 'save'
    editButton.classList.add('editSave') 
    editViewDiv.appendChild(editButton)
    return editViewDiv; 
}

export default editView