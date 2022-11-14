// function prepararCanvas4(){
//     let cvs= document.querySelectorAll('canvas');

//     cvs.forEach(function(e){
//         e.width=280;
//         e.height=280;
//     });
//     //canvas4(idcv);
// }
function pintarImagen(f,c){
    let cv= document.querySelector('canvas'),
        ctx=cv.getContext('2d'),
        imagen,
        regiones = 4,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    imagen=new Image();
    
    imagen.onload=function(){
        ctx.drawImage(imagen, c*ancho-2, f*alto-2,ancho,alto);
        // sacaRejilla2();
        //canvas4();
    }
    imagen.src= './ss5.JPG';
}

function canvas4(idCV){
    //prepararCanvas4();
    let cvs= document.querySelectorAll('canvas');

    cvs.forEach(function(e){
        e.width=280;
        e.height=280;
    });

    let cv = document.querySelector('#' + idCV),
        ctx = cv.getContext('2d');

    ctx.fillStyle='#414141';

    cv.onclick = function (evt){
        console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);
        
        //vamos a sacar la columna en la que hacemos clic
        let cv= document.querySelector('canvas'),
            ctx=cv.getContext('2d'),
            regiones =4,
            ancho=cv.width/regiones,
            alto=cv.height/regiones;
        
        let fila, columna;
        
        
        columna = Math.floor(evt.offsetX / ancho);
        fila = Math.floor(evt.offsetY / alto);
        
        console.log(fila +' - ' + columna);
        
        
        //pintamos imagen en cada columna-fila
        pintarImagen(fila,columna);
        
    }

    
    

    // pinto una | vertical en medio del canvas
    ctx.moveTo(cv.width/2,0);
    ctx.lineTo(cv.width/2,cv.height);
        ctx.moveTo(cv.width/2,0);//repetimos para que se vea mas oscura
        ctx.lineTo(cv.width/2,cv.height);
        ctx.moveTo(cv.width/2,0);
        ctx.lineTo(cv.width/2,cv.height);

        ctx.moveTo(cv.width/4,0);//linea vertical izq medio
        ctx.lineTo(cv.width/4,cv.height);
        
        ctx.moveTo(3*cv.width/4,0);//linea vertical der medio
        ctx.lineTo(3*cv.width/4,cv.height);

    //lineas horizontales
    ctx.moveTo(0,cv.height/2);
    ctx.lineTo(cv.width,cv.height/2);
        ctx.moveTo(0,cv.height/2);
        ctx.lineTo(cv.width,cv.height/2);
        ctx.moveTo(0,cv.height/2);
        ctx.lineTo(cv.width,cv.height/2);

        ctx.moveTo(0,cv.height/4);
        ctx.lineTo(cv.width,cv.height/4);

        ctx.moveTo(0,3*cv.height/4);
        ctx.lineTo(cv.width,3*cv.height/4);

    ctx.strokeStyle='#414141';
    ctx.lineWidth=1;
    ctx.stroke();
}


function canvas9(idCV){
    let cvs= document.querySelectorAll('canvas');

    cvs.forEach(function(e){
        e.width=380;
        e.height=380;
    });
    canvas92(idCV);

    let cv = document.querySelector('#' + idCV),
    ctx = cv.getContext('2d');
    // pinto una | vertical en medio del canvas
        //repetimos para que se vea mas oscura

                    /*ctx.moveTo(cv.width/3,0);//oscura vertical1
                    ctx.lineTo(cv.width/3,cv.height);
                        ctx.moveTo(cv.width/3,0);
                        ctx.lineTo(cv.width/3,cv.height);
                        ctx.moveTo(cv.width/3,0);
                        ctx.lineTo(cv.width/3,cv.height);

                    ctx.moveTo(2*cv.width/3,0);//oscura vertical2
                    ctx.lineTo(2*cv.width/3,cv.height);
                        ctx.moveTo(2*cv.width/3,0);
                        ctx.lineTo(2*cv.width/3,cv.height);
                        ctx.moveTo(2*cv.width/3,0);
                        ctx.lineTo(2*cv.width/3,cv.height);*/

    ctx.moveTo(cv.width/9,0);//vert 1
        ctx.lineTo(cv.width/9,cv.height);
        
        ctx.moveTo(2*cv.width/9,0);//vert 2
        ctx.lineTo(2*cv.width/9,cv.height);

    ctx.moveTo(4*cv.width/9,0);//vert 4
        ctx.lineTo(4*cv.width/9,cv.height);

        ctx.moveTo(5*cv.width/9,0);//vert 5
        ctx.lineTo(5*cv.width/9,cv.height);

        ctx.moveTo(7*cv.width/9,0);//vert 7
        ctx.lineTo(7*cv.width/9,cv.height);

        ctx.moveTo(8*cv.width/9,0);//vert 8
        ctx.lineTo(8*cv.width/9,cv.height);

        /*
    //lineas horizontales
    ctx.moveTo(0,cv.height/3);//horizontal oscura1
    ctx.lineTo(cv.width,cv.height/3);
        ctx.moveTo(0,cv.height/3);
        ctx.lineTo(cv.width,cv.height/3);
        ctx.moveTo(0,cv.height/3);
        ctx.lineTo(cv.width,cv.height/3);
        ctx.moveTo(0,cv.height/3);
        ctx.lineTo(cv.width,cv.height/3);

    ctx.moveTo(0,2*cv.height/3);//horizontal oscura2
    ctx.lineTo(cv.width,2*cv.height/3);
        ctx.moveTo(0,2*cv.height/3);
        ctx.lineTo(cv.width,2*cv.height/3);
        ctx.moveTo(0,2*cv.height/3);
        ctx.lineTo(cv.width,2*cv.height/3);
        ctx.moveTo(0,2*cv.height/3);
        ctx.lineTo(cv.width,2*cv.height/3);
*/

    ctx.moveTo(0,cv.height/9);//horiz 1
        ctx.lineTo(cv.width,cv.height/9);

        ctx.moveTo(0,2*cv.height/9);//horiz 2
        ctx.lineTo(cv.width,2*cv.height/9);

        ctx.moveTo(0,4*cv.height/9);//horiz 4
        ctx.lineTo(cv.width,4*cv.height/9);

        ctx.moveTo(0,5*cv.height/9);//horiz 5
        ctx.lineTo(cv.width,5*cv.height/9);

        ctx.moveTo(0,7*cv.height/9);//horiz 7
        ctx.lineTo(cv.width,7*cv.height/9);

        ctx.moveTo(0,8*cv.height/9);//horiz 8
        ctx.lineTo(cv.width,8*cv.height/9);

    
    ctx.strokeStyle='#929292';
    ctx.lineWidth=1;
    ctx.stroke();
}


function canvas92(idCV){
    let cv = document.querySelector('#' + idCV),
    ctx = cv.getContext('2d');



    ctx.moveTo(cv.width/3,0);//oscura vertical1
    ctx.lineTo(cv.width/3,cv.height);
        ctx.moveTo(cv.width/3,0);
        ctx.lineTo(cv.width/3,cv.height);
        ctx.moveTo(cv.width/3,0);
        ctx.lineTo(cv.width/3,cv.height);

    ctx.moveTo(2*cv.width/3,0);//oscura vertical2
    ctx.lineTo(2*cv.width/3,cv.height);
        ctx.moveTo(2*cv.width/3,0);
        ctx.lineTo(2*cv.width/3,cv.height);
        ctx.moveTo(2*cv.width/3,0);
        ctx.lineTo(2*cv.width/3,cv.height);

    //lineas horizontales
    ctx.moveTo(0,cv.height/3);//horizontal oscura1
    ctx.lineTo(cv.width,cv.height/3);
        ctx.moveTo(0,cv.height/3);
        ctx.lineTo(cv.width,cv.height/3);
        ctx.moveTo(0,cv.height/3);
        ctx.lineTo(cv.width,cv.height/3);
        ctx.moveTo(0,cv.height/3);
        ctx.lineTo(cv.width,cv.height/3);

    ctx.moveTo(0,2*cv.height/3);//horizontal oscura2
    ctx.lineTo(cv.width,2*cv.height/3);
        ctx.moveTo(0,2*cv.height/3);
        ctx.lineTo(cv.width,2*cv.height/3);
        ctx.moveTo(0,2*cv.height/3);
        ctx.lineTo(cv.width,2*cv.height/3);
        ctx.moveTo(0,2*cv.height/3);
        ctx.lineTo(cv.width,2*cv.height/3);

    ctx.strokeStyle='#000';
    ctx.lineWidth=1;
    ctx.stroke();
}