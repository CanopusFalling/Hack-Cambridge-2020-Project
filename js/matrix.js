let c = document.getElementById("c");
let ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//characters
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
characters = characters.split("");

let font_size = 10;
let columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
let drops = [];
for (let x = 0; x < columns * 25; x++)
	drops[x] = 1;

//drawing the characters
function draw()
{
	c.height = window.innerHeight;
	c.width = window.innerWidth;
	columns = c.width / font_size;
	//Black BG for the canvas
	//translucent BG to show trail
	/* ctx.fillStyle = "rgba(100, 100, 100, 0)";
	ctx.fillRect(0, 0, c.width, c.height); */

	ctx.fillStyle = "rgba(0,255,0,1)"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for (let i = 0; i < drops.length; i++)
	{
		//a randomize
		let text = characters[Math.floor(Math.random() * characters.length)];

		ctx.fillText(text, i * font_size, drops[i] * font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if (drops[i] * font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);


