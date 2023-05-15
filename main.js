var nose_x = 0
var nose_y = 0

var ojo_izq_x = 0
var ojo_der_x = 0

var distancia = 0

function preload()
{

    payaso = loadImage('https://i.postimg.cc/MGq7MJJ3/imageedit-2-9660260579.png')

}

function setup()
{
    canvas = createCanvas(500, 500)
    video = createCapture(VIDEO)
    video.hide()
    video.size(500 ,500)
    modelo = ml5.poseNet(video ,listo)
    modelo.on("pose", resultados)

}
 function draw()
 {
    image(video ,0 ,0 ,500 ,500)
    image(payaso, nose_x, nose_y, distancia, distancia + 60)
    
 }
 function listo()
 {
    console.log("ya cargo la foto")
 }

 function resultados(respuesta)
 {


if(respuesta.length>0)
{
    console.log(respuesta)
 
nose_x = respuesta[0].pose.nose.x - ( distancia/2)
nose_y = respuesta[0].pose.nose.y - ( distancia - 5)

ojo_der_x = respuesta[0].pose.rightEye.x 
ojo_izq_x = respuesta[0].pose.leftEye.x

distancia = ojo_izq_x - ojo_der_x
distancia = distancia *3


}


 }

 