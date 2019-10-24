
let happyCore = {
  results: ['Im exited', 'Super yes!!', 'Awesome', "cool", "You Rock"]
}
let sadCore = {
  results:['No', 'Horrible', 'More or less', "Im destroyed in the inside"]
}

let meanCore = {
  results: ['I hate you', 'Disgusting', 'Stupid', "Go away", "Leave me alone"]
}

let sillyCore = {
  results: ["oops i did it again", "Eww you stink", "I like turtles", "You look like my mink"]

}

let core = happyCore

//  Magic 8-ball in one line
function shake() {
  console.log(document.getElementById("mood").value);
  document.getElementById("outp").innerHTML = core.results[Math.floor(Math.random() *4)]
  if (document.getElementById("mood").value == "Happy") {
    core = happyCore
  }
  if (document.getElementById("mood").value == "Sad") {
    core = sadCore
  }
  if (document.getElementById("mood").value == "Mean") {
    core = meanCore
  }
  if (document.getElementById("mood").value == "Silly") {
    core = sillyCore
  }
}

function Happy() {
  core = happyCore

}
function Sad() {
  core = sadCore

  console.log('Sad')

}
function Mean() {
  console.log('Mean');
}
function Silly() {
  console.log('Silly');
}
