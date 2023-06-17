const numberOfLift = document.getElementById("no-of-lift")
const numberOfFloor = document.getElementById("no-of-floor")
const generateBtn = document.getElementById("generate-btn")
const sections = document.getElementsByTagName("section")
const section = sections[0]
let parentDiv ;



// events listener

generateBtn.addEventListener("click", generateFLoorAndLift)


function generateFLoorAndLift(event) {
    event.preventDefault()


    numberOfFloor.value == "" ? alert("please input number of floor") : generateFloor(numberOfFloor.value )
    numberOfLift.value == "" ? lift = alert("please input number of lift") : generateLift(numberOfLift.value )
    


}
       








function generateFloor(floors) {
   

     for (let index = floors; index >= 1; index--) {

            console.log(`Floor ${index}`);

            const parentDiv = document.createElement("div");
            parentDiv.classList.add("container-lift");
            section.appendChild(parentDiv)

            const floorDiv = document.createElement("div") 
            floorDiv.classList.add("text-btn")
            parentDiv.appendChild(floorDiv);

            const floorName =  document.createElement("h3")
            floorName.innerHTML = `Floor ${index}`
            floorDiv.appendChild(floorName)

            const upButton = document.createElement("button")
            upButton.innerHTML = "Up"
            floorDiv.appendChild(upButton)

            const downButton = document.createElement("button")
            downButton.innerHTML = "Down"
            floorDiv.appendChild(downButton)

            upButton.addEventListener("click", liftUpwardMovement)
            downButton.addEventListener("click", liftDownwardMovement)

        }


        parentDiv = document.getElementsByClassName("container-lift")
    
}

function generateLift(lifts) {

    for (let index = 1; index <= lifts; index++) {

        console.log(`Lift ${index}`);

        const parentDivLift = document.createElement("div");
        parentDivLift.classList.add("lift");
        parentDiv[4].appendChild( parentDivLift)

        const leftDoor = document.createElement("p") 
        leftDoor.classList.add("left-door")
        parentDivLift.appendChild(leftDoor);

        const rightDoor =  document.createElement("p")
        rightDoor.classList.add("right-door")
        parentDivLift.appendChild(rightDoor)

    }


}



function liftUpwardMovement(e) {
    e.preventDefault()
    console.log(e.target.parentNode)



    
}


function liftDownwardMovement(e) {
    e.preventDefault()
    console.log(e)
    
}