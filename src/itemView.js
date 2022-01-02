const itemView = (item) => {
    console.log('itemview called on:')
    console.table(item)
    let itemDiv = document.createElement('div')
    itemDiv.classList.add('itemDiv')
    if (item.selected){
        let itemTextDiv = document.createElement('div')
        itemTextDiv.classList.add('itemTextDiv')
        let itemTitleDiv = document.createElement('div')
        itemTitleDiv.classList.add('itemTitleDiv')  
        itemTitleDiv.textContent= item.title
        itemTextDiv.appendChild(itemTitleDiv)
        let itemDescDiv = document.createElement('div')
        itemDescDiv.classList.add('itemDescDiv')
        itemDescDiv.textContent= item.description
        itemTextDiv.appendChild(itemDescDiv)
        itemDiv.appendChild(itemTextDiv)
        let itemDateDiv = document.createElement('div')
        itemDateDiv.classList.add('itemDatetDiv')
        itemDateDiv.textContent= item.dueDate
        itemDiv.appendChild(itemDateDiv)
        
        let itemEditButton = document.createElement('button')
        itemEditButton.textContent= 'edit'
        itemEditButton.classList.add('editButton')
        itemDiv.appendChild(itemEditButton)
        
        let itemDeleteButton = document.createElement('button')
        itemDeleteButton.textContent= 'delete'
        itemDeleteButton.classList.add('deleteButton')
        itemDiv.appendChild(itemDeleteButton)
        
        let priorityContainerDiv = document.createElement('div')
        priorityContainerDiv.classList.add('priorityContainer')
        let priorityUpButton = document.createElement('button')
        priorityUpButton.innerText= '^'
        priorityUpButton.classList.add('priorityUpButton')
        priorityContainerDiv.appendChild(priorityUpButton)
        let priorityDiv = document.createElement('div')
        priorityDiv.innerText = item.priority
        priorityContainerDiv.appendChild(priorityDiv)
        let priorityDownButton = document.createElement('button')
        priorityDownButton.innerText='v'
        priorityDownButton.classList.add('priorityDownButton')
        priorityContainerDiv.appendChild(priorityDownButton)
        itemDiv.appendChild(priorityContainerDiv)
    }else{
        let itemTitleDiv = document.createElement('div')
        itemTitleDiv.classList.add('itemTitleDiv')  
        itemTitleDiv.textContent= item.title
        itemDiv.appendChild(itemTitleDiv)
    
    }
    return itemDiv;
}
export default itemView;