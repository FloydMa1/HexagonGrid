var screenWidth = 800;
var screenHeight = 400;
var cols = 7;
var rows = 7;
var cellSize = 30;
var grid = [];
var xOffset = 200;
var yOffset = 50;

function setup () {
    createCanvas(screenWidth, screenHeight);

    for(j = 0; j < rows; j++) {
        for(i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            
            grid.push(cell);
        }
    }
}

function draw () {
    background(0, 114, 183);

    for(var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;

    if(j % 2 === 0) {
        this.x = this.i * cellSize * 2 + xOffset;
    } else {
        this.x = this.i * cellSize * 2 + cellSize + xOffset;
    }
    
    this.y = this.j * cellSize * 1.7 + yOffset;
    this.hasPlayer = false;

    this.show = function () {
        stroke(255, 255, 255, 50)
        //fill(0, 114, 183);
 
        push(); 
        translate(this.x, this.y);
        rotate(radians(30));
        polygon(0, 0, cellSize, 6);
        pop();
    }
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}   