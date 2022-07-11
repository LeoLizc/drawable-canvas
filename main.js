// jquery document ready
$(function(){
    // set up the events
    setupEvents();
});

function setupEvents(){
    // select the drawable canvases
    // and set up the events
    $('canvas.drawable').on('mousedown', function(e){
        // start drawing
        e.currentTarget.drawing = true;
        // set the coordinates of the last point
        e.currentTarget.lastX = e.offsetX;
        e.currentTarget.lastY = e.offsetY;
        console.log('mousedown');
    }).on('mousemove', function(e){
        if(e.currentTarget.drawing){
            // draw a line to the current mouse position
            draw(e.currentTarget, e.offsetX, e.offsetY);
        }
    }).on('mouseup', function(e){
        // stop drawing
        e.currentTarget.drawing = false;
        console.log('mouseup');
    }).on('mouseleave', function(e){
        // stop drawing
        e.currentTarget.drawing = false;
        console.log('mouseleave');
    });
    

}

function draw(canvas, x, y){
    // get the context
    var ctx = canvas.getContext('2d');
    // draw a line from the last point to the current point
    ctx.beginPath();
    ctx.moveTo(canvas.lastX, canvas.lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    // set the last point to the current point
    canvas.lastX = x;
    canvas.lastY = y;
}
