const numberOfLift = document.getElementById("no-of-lift")
const numberofFloor = document.getElementById("no-of-floor")
const generateBtn = document.getElementById("generate-btn")
const section = document.getElementsByTagName("section")


// events listener

generateBtn.addEventListener("click", checkTheFLoorSize)


function checkTheFLoorSize(event) {
        for (let index = 0; index < numberofFloor.value; index++) {
            console.log(`Floor ${index}`);
            event.preventDefault()

            const parentDiv = document.createElement("div");
            parentDiv.classList.add("container-lift");
            parentDiv.appendChild(section)

            const floorDiv = document.createElement("div") 
            floorDiv.classList.add("text-btn")
            floorDiv.appendChild(parentDiv);

            const floorName =  document.createElement("h3")
            floorName.innerHTML = `Floor ${index}`
            floorName.appendChild(floorDiv)

            const upButton = document.createElement("button")
            upButton.innerHTML = "Up"
            upButton.appendChild(floorDiv)

            const downButton = document.createElement("button")
            downButton.innerHTML = "Down"
            downButton.appendChild(floorDiv)


           
           
           
           

        }

}