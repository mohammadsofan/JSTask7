const audio= new Audio("./sound.mp3");
const buttons = document.querySelectorAll('.box button');
const result = document.querySelectorAll('.box span');
const counter=[0,0,0,0];
for(let i=0;i<buttons.length;i++){
    buttons[i].onclick=()=>{
        counter[i]++;
        result[i].textContent=counter[i];
        audio.play();

    }
}