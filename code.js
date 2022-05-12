song1 = "";
song2 = "";
song1_status = ""
song2_status = ""
scoreLeftWrist = ""
score = ""

leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        scoreLeftWrist = results[0].pose.keypoints[9].score
        console.log ("scoreLeftWrist = " + scoreLeftWrist)

        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y 
        console.log("leftWristX" + leftWristX +"leftWristY" + leftWristY)

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWrist" + rightWristX + "rightWristY" + rightWristY)

    }
}

function preload(){
    song1 = loadSound("giorno theme.mp3")
    song2 = loadSound("SecretSong.mp3")
}

function setup(){
    canvas  = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('All Systems Are a Go')
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function preload(){
    song = loadSound('giorno theme.mp3')
} 

function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}

function stop(){
    song.stop()
}

function draw(){
    image(video, 0 ,0 ,600, 500)

    song1_status = song1.isPlaying()
    song2_status = song2.isPlaying() 
}