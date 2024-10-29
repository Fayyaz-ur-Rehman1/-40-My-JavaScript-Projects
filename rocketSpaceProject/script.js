let rocketDiv = document.getElementById("mydiv");

document.addEventListener("mousemove", (e) => {
    move(e);
})

const move = (e) =>  {
    let x = e.pageX;
    let y = e.pageY;

    rocketDiv.style.left = x + "px";
    rocketDiv.style.top = y  + "px";


}