noseX=0;
noseY=0;


function preload()
{
    muche=loadImage('https://i.postimg.cc/T3wqXZKH/muche.png');
}

function setup()
{
canvas=createCanvas(380,300);
canvas.position(500,280);
video=createCapture(VIDEO);
    video.hide();
    tint_colour="";

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
image(video,0,0,380,300);
tint(tint_colour);

image(muche,noseX,noseY,40,32);
}

function take_snapshot()
{
    save('aryans_jadu.png');
}

function filter_colour()
{
    tint_colour=document.getElementById("filter_colour").value;
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-140;
        noseY=results[0].pose.nose.y-65;
        console.log("Nose X = "+noseX);
        console.log("Nose Y = "+noseY);
    }
}

function modelLoaded()
{
    console.log("PoseNET is Initialize");
}
