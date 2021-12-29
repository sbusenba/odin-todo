const editView = function (item){
    let editViewDiv = document.createElement('div')
    editViewDiv.classList.add('editDiv')
    editViewDiv.textContent= "Edit:"
  
    let titleEditBox = document.createElement('input')
    titleEditBox.type = 'text'
    titleEditBox.placeholder= item.title
    titleEditBox.classList.add('titleEdit')
    editViewDiv.appendChild(titleEditBox)
    
    let descEditBox = document.createElement('input')
    descEditBox.type = 'text'
    descEditBox.textContent= item.description
    descEditBox.classList.add('descEdit')
    editViewDiv.appendChild(descEditBox)

    let dateEditBox = document.createElement('input')
    dateEditBox.type = 'text'
    dateEditBox.textContent= item.dueDate
    dateEditBox.classList.add('dateEdit')
    editViewDiv.appendChild(dateEditBox)

    let editButton = document.createElement('button')
    editButton.textContent = 'save'
    editButton.classList.add('editSave') 
    editViewDiv.appendChild(editButton)
    return editViewDiv; 
}

export default editView