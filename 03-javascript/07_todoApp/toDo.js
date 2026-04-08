let todo = [];
let request = prompt("please enter your choise");
console.log(request);

while (true) {
    if (request == "quit") {
        console.log("Quitting the todo list");
        break;
    }
    else if (request == "list") {
        for (task of todo) {
            console.log(task)
        }
    }
    else if (request == "add") {
        let task = prompt("enter the task you want to add")
        console.log(todo.push(task));
        if(request=="break"){
            break;
        }
    }
    else if (request == "delete") {
         let remove=prompt("enter what you want to delete");
         console.log(remove);
    }
}
