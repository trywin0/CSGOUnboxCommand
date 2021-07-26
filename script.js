const inputsDiv = document.querySelector(".inputs")

const output = document.querySelector("#output")

const usernameOutput = document.querySelector(".username")
const textcolorOutput = document.querySelector(".textcolor")
const star = document.querySelector(".star")
const weaponOutput = document.querySelector(".weapon")
const skinOutput = document.querySelector(".skin")

const inputs = []

const colorNames = ["teamcolor", "white", "red", "green", "lightgreen", "moneygreen", "lightred", "lightred2", "ctcolor", "tcolor", "lightblue", "blue", "violet"]

const colors = [null, 
"",
"",
"",
"",
"",
"",
"",
"",

]

const colorHex = [
    null,
    "#eda338",
    "#FEFEFE",
    "#FE0000",
    "#40FE40",
    "#BEFE8F",
    "#A1FE47",
    "#F93F3F",
    "#EA4B4B",
    "#5E97D8",
    "#eda338",
    "#AFC2D8",
    "#4B69FE",
    "#D22CE5"
]

let data = {
    username: null,
    weapon: null,
    skin: null,
    star: false,
    stattrak: false,
    color: 1,
}

Array.from(inputsDiv.children).forEach((child, index)=>{
    const input = child.querySelector("input")||child.querySelector("select")
    inputs.push(input)
    input.onchange = ()=>{
        data[Object.keys(data)[index]] = ["on","off"].includes(input.value)?input.checked:input.value
        console.log(data)
        updateText()
    }
})



function updateText(){
    usernameOutput.innerText = data.username
    usernameOutput.style.color = colorHex[1]
    textcolorOutput.style.color = colorHex[data.color]
    star.innerText = data.star?"⋆":""
    weaponOutput.innerText = (data.stattrak?"StatTrak™️ ":"")+(data.weapon||"")
    skinOutput.innerText = data.skin||""
    output.value = `playerradio Radio.WePlanted "Flashbang Out! ${colors[1]}${data.username} ${colors[2]}has opened a container and found: ${colors[data.color]} ${data.star?"⋆":""}${data.stattrak?" StatTrak™":""} ${data.weapon} | ${data.skin}"`
}

document.querySelector(".copybtn").onclick = ()=>{
    output.select();
    document.execCommand("copy");
}
