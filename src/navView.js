const navDiv = function (){
    let navDiv = document.createElement('div')
    navDiv.classList.add('navDiv')
    navDiv.textContent= "Todo:"
    let navAddButton = document.createElement('button')
    navAddButton.classList.add('addButton')
    navAddButton.textContent= "add"
    navDiv.appendChild(navAddButton)
    return navDiv;
}

export default navDiv