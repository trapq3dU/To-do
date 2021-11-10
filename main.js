
document.getElementById("createTodo").focus();

function onSubmit (){
    const newTodo = document.getElementById("createTodo").value.trim();
    const str = newTodo.charAt(0).toUpperCase() + newTodo.slice(1);
    
    if (str.length >= 1) {
        if(str.length <= 32) {
            showTodo(str);
            clear()
        }
        else {
            alert("Your to-do is having more than 32 characters")
        }

    }
    else {
        alert("You can't add empty to-do")
        return
    }
    return    
}

var divId = 0;
function showTodo(str){

    const section = document.getElementById("showTodo")

    const div = document.createElement("div")
    div.id = divId;
    div.className = "todo"
    section.appendChild(div);

    const h3 = document.createElement('h3')
    
    h3.innerText = str;
    div.appendChild(h3);

    
    const btn = document.createElement('button')
    btn.setAttribute(`onclick`,`removeTodo(${divId})`)
    btn.className = "deleteBtn"
    btn.innerText = `X`
    div.appendChild(btn)
    divId++
    return

}

function clear(){
    
    document.getElementById("createTodo").value = "";
    document.getElementById("createTodo").focus();
    return;
}


function removeTodo (id) {
    document.getElementById(id).remove();
    document.getElementById("createTodo").focus();
    return
    
}
