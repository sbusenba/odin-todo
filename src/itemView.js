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
        
    }else{
        let itemTitleDiv = document.createElement('div')
        itemTitleDiv.classList.add('itemTitleDiv')  
        itemTitleDiv.textContent= item.title
        itemDiv.appendChild(itemTitleDiv)
    
    }
    return itemDiv;
}
export default itemView;