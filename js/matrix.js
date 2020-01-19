var c = document.getElementById("thing");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//converting the string into an array of single characters
characters = characters.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = characters[Math.floor(Math.random()*characters.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);


// //get context
// var c = document.getElementById("c");
// var ctx = c.getContext("2d");

// //get screen height and width
// c.width = window.innerWidth;
// c.height = window.innerHeight;

// // characters in falling matrix
// characters.split('');

// //organize font, no. columns, arr of x coord
// var font = 10;
// var columns = c.width/font;
// var drop = [];

// //loop adding y coords to arr according to no. columns
// for (x = 0; x < columns; x++) {
//     drop[x] = 1;
// }

// //function for drawing the matrix
// function draw() {
//     //transleucent bg to show trail 
//     ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//     ctx.fillRect(0, 0, c.width, c.height);
//     ctx.fillStyle = "0F0";
//     ctx.font = font + "px arial";
    
//     //loop over drop
//     //text of falling characters
//     for (i = 0; i < drop.length; i++) {
//         var text = characters[Math.floor()*characters.length];
//         ctx.fillText(text, i*font, drop[i]*font);

//         if(drop[i]*font > c.height && Math.random > 0.975) 
//             drop[i] = 0;

//         drop[i]++;
//     }
// }

// setInterval(draw, 33);

