let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

//test
/*c.beginPath()
c.fillStyle = "black";
c.arc(105,70,60,0.2,Math.PI*2)
c.fill()

c.fillStyle = "red";
c.font = "25px verdana";
c.fillText("GoatMan",50,75);*/


class Ball{
    constructor(x,y){
        //dayere e farzi
        this.r = 60;
        this.x = x || random(0+this.r,innerWidth-(this.r * 3));
        this.y = y || random(0+this.r,innerHeight-(this.r * 3));

        //speed

        document.querySelector("#sp").addEventListener("click",e=>{
            if(this.vx > 0 && this.vy > 0){
                this.vx += 3;
                this.vy += 3;
            }else{
                this.vx -= 3;
                this.vy -= 3;
            }
        })

        document.querySelector("#ps").addEventListener("click",e=>{
            if(this.vx < 0 && this.vy < 0){
                this.vx += 3;
                this.vy += 3;
            }else{
                this.vx -= 3;
                this.vy -= 3;
            }
        })

        this.vx = 5;
        this.vy = 5;

        //color
        this.color1;
        this.color2;
        this.color3;

        this.draw()
    }
    draw(){
        //test
        /*c.beginPath()
        c.arc(this.x + 55,this.y - 5,this.r,0.2,Math.PI*2)
        c.fill()*/
        c.font = "50px verdana";
        c.fillText("GoatMan",this.x,this.y);
        
    }
    update(){
        this.color1 = random(1,400);
        this.color2 = random(1,400);
        this.color3 = random(1,400);
        if(this.x + (this.r * 3) > innerWidth || this.x < 0){
            this.vx = -this.vx;
            c.fillStyle = `rgb(${this.color1},${this.color2},${this.color3})`
        }
        if(this.y > innerHeight || this.y - this.r + 50 < 0){
            this.vy = -this.vy;
            c.fillStyle = `rgb(${this.color1},${this.color2},${this.color3})`
        }
        this.vx += cv;
        this.vy += cv;

        this.x += this.vx
        this.y += this.vy
        this.draw();
    }
}
let cv = 0;
let iv = 1;
let balls = [];
for(let i = 0;i<1;i++){
    balls.push(new Ball);
}

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    balls.forEach(e=>{
        e.update()
    })
    requestAnimationFrame(animate)

}
animate()

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("resize",e=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
document.querySelector("#ad").addEventListener("click",e=>{
    balls.push(new Ball());
})
document.querySelector("#cr").addEventListener("click",e=>{
    cv += 1;
    cv += 1;
})
