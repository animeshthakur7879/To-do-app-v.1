let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let theme = document.querySelector("#theme")
let navbar = document.querySelector(".navbar")
let card = document.querySelector(".card");
let outer = document.querySelector(".outer");
let tp = document.querySelector("#tp");
let update = document.querySelector(".updateTask")

var task = 0
let h4 = document.createElement("h4");
const updateTask = ((task) => {
    
    h4.className = "ms-2"
    h4.innerText = task;
    update.appendChild(h4);
    // console.log(h4);
    // document.write(task)
})

updateTask(task);

let addTask = (event) => {
    event.preventDefault();
    task++;
    updateTask(task);
    console.log(task);
    let li = document.createElement("li")
    li.className = "list-group-item fs-5 mt-5 py-2 px-3 fw-semibold d-flex align-items-center justify-content-between rounded-1"
    li.innerText = input.value;
    ul.appendChild(li);

    let btnSection = document.createElement("div");
    btnSection.className = "d-flex align-items-center justify-content-center";
    li.appendChild(btnSection);

    let doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-success px-4 py-2 ";
    doneBtn.innerText = "Done";
    btnSection.appendChild(doneBtn);

    // let delBtn = document.createElement("button");
    // delBtn.className = "btn btn-danger  px-4 py-2 ";
    // delBtn.innerText = "Delete"
    // btnSection.appendChild(delBtn);

    form.reset();
}

form.addEventListener("submit" , addTask);



const removeTask = (event) => {
    if(event.target.className.includes("btn-success")){
        let btnSection = event.target.parentElement;
        let li = btnSection.parentElement;
        if (window.confirm("Are Your Sure")) {
            ul.removeChild(li);
            task--;
            updateTask(task);
            console.log(task);
    }
    }
}

ul.addEventListener("click" , removeTask);

let count = 0;

theme.addEventListener("click" , () => {

    if(count%2 === 0){
        navbar.className = "navbar navbar-expand-lg bg-secondary text-white shadow-sm";
        card.className = "card mt-5 w-75 bg-dark text-light shadow-lg p-5 border-0"
        outer.style.backgroundColor = "#393e46";
        
    }
    else{
        navbar.className = "navbar navbar-expand-lg bg-secondary-subtle shadow-sm"
        card.className = "card mt-5 w-75 bg-light shadow-lg p-5 border-0"
        outer.style.backgroundColor = "white";
    }   
    count ++;
})

// let doneTask = (event) =>{
    

//     if(event.target.className.includes("btn-success"))
//     {
        
//         let btnSection = event.target.parentElement;
//         let li = btnSection.parentElement;
//         if(done === 1){
//             task--
//             updateTask(task);
//             li.className = "list-group-item fs-5 mt-5 py-1 px-3 fw-light d-flex align-items-center justify-content-between text-decoration-line-through"
//             btnSection.className = "text-decoration-none";
//             done = 0;
            
//         }
//         else{
//             task++;
//             updateTask(task);
//             li.className = "list-group-item fs-5 mt-5 py-1 px-3 fw-semibold d-flex align-items-center justify-content-between"
//             btnSection.className = "text-decoration-none";
//             done = 1;
            

//         }
        
        
        

//     }
    
// }

// ul.addEventListener("click" , doneTask);

