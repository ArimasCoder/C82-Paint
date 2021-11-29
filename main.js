var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
 color="orange";
 width_of_line=2;

 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e)
 {
     mouseEvent="mouseDown";
 }

 canvas.addEventListener("mouseleave", my_mouseleave);

 function my_mouseleave(e)
 {
     mouseEvent="mouseleave";
 }

 canvas.addEventListener("mouseup", my_mouseup);

 function my_mouseup(e)
 {
     mouseEvent="mouseup";
 }

 canvas.addEventListener("mousemove", my_mousemove);

 function my_mousemove(e)
 {
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_x, current_y, 20, 0, 2*Math.PI);
        ctx.stroke();
    }
}