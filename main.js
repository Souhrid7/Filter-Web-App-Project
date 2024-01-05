function preload() {

}
function setup() {
canvas=createCanvas(250,250)
canvas.center()
video=createCapture(VIDEO)
video.size(250,250)
video.hide()
postnet=ml5.poseNet(video,modelLoaded)
postnet.on('pose', gotResult)
}
function take_snapshot() {
    save('myFilterImage.jpg')
}
function draw() {
    image(video,0,0,250,250)
}
function modelLoaded() {
    console.log('postnet is loaded')
}
function gotResult(results) {
    if(results.length>0) {
        //console.log(results)
        console.log("nose x="+results[0].pose.nose.x)
        console.log("nose y="+results[0].pose.nose.y)
    }
}