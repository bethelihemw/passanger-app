countel = document.getElementById("count")
let entery= document.getElementById("enteries")
count = 0
function add(){
    count += 1
    countel.innerText=count
}

function added(){
    let con = count + " - "
    entery.innerText += con
    console.log(count)
    countel.innerText = 0
    count = 0
}