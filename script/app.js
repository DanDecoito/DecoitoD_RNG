
let selected = document.getElementById("selected");
let theButton = document.getElementById("theButton");
let pos0 = document.getElementById("pos0");
let pos1 = document.getElementById("pos1");
let pos2 = document.getElementById("pos2");
let pos3 = document.getElementById("pos3");
let pos4 = document.getElementById("pos4");
let listList = document.getElementById("listList");

let arr = ["Name", "Name", "Name", "Name", "Name"];




function rndmNum(max) {
    return Math.floor(Math.random() * max);
  }

function rndmName (){
    let array = []
    fetch("../data.json").then(
        data => data.json()
    ).then(
        info => {
            prevListGenerator(JSON.stringify(info.StudentsAndStaff[rndmNum(info.StudentsAndStaff.length)].name))
            listList.innerHTML = JSON.stringify(info.StudentsAndStaff.map((names) => {
                return  "\xa0\xa0\xa0" + names.name;
            }).toString())
        }
    )
    }

function prevListGenerator(name){
    if (arr.length >= 6)
    {
        arr.pop()
        arr.unshift(name)
    }
    else
    {
        arr.unshift(name)

    }
    selected.innerHTML = arr[0]
    pos0.innerHTML = arr[1]
    pos1.innerHTML = arr[2]
    pos2.innerHTML = arr[3]
    pos3.innerHTML = arr[4]
    pos4.innerHTML = arr[5]
}

theButton.addEventListener("click", () => {
   
  rndmName()
})




rndmName()