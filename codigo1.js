
var tamanyoCanvas;
var numsudo;
var tamx; //cv.width/tamanyo sudoku
var tamy;
var idsudo;

function prepararCanvas4(){
        let cvs= document.querySelectorAll('canvas');
    
        cvs.forEach(function(e){
            e.width=280;
            e.height=280;
        });
        //canvas4(idcv);
}

function desBoton4(){
    
    let html='';
    html='<input type="button" class="botonTamanyo2" disabled value="4x4">';
    html+='<input type="button" class="botonTamanyo" disabled value="9x9">';

    document.querySelector('.medio>div').innerHTML = html;
    console.log('CAMBIO BOTON');
}

function boton4(){
    let html='';
    html='<input type="button" id="cuatro" class="botonTamanyo2" onclick="canvas4('+"cv00"+');" value="4x4">';
    html+='<input type="button" id="nueve" class="botonTamanyo" onclick="canvas9('+"cv00"+');" value="9x9">';

    document.querySelector('.medio>div').innerHTML = html;
    console.log('CAMBIO BOTON');
}

function canvas4(idCV){
    
    let cvs= document.querySelectorAll('canvas');

    cvs.forEach(function(e){
        e.width=280;
        e.height=280;
    });
    
    tamanyoCanvas=4;
    console.log(tamanyoCanvas);

    let cv = document.querySelector('#cv00' /*+ idCV*/),
        ctx = cv.getContext('2d');

    ctx.fillStyle='#414141';

    cv.onclick = function (evt){
        console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);
        
        //vamos a sacar la columna en la que hacemos clic
        let cv= document.querySelector('canvas'),
            regiones =4,
            ancho=cv.width/regiones,
            alto=cv.height/regiones;
        
        let fila, columna;
        
        
        columna = Math.floor(evt.offsetX / ancho);
        fila = Math.floor(evt.offsetY / alto);
        
        console.log(fila +' - ' + columna);
        
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
    ctx.save();console.log('guardo canvas');
}
//***********/
function sololineas4(){
    console.log('pinto lineas');
    let cv = document.querySelector('#cv00' /*+ idCV*/),
        ctx = cv.getContext('2d');

    ctx.fillStyle='#a3a3a3';
    cv.onclick = function (evt){
        console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);
        
        //vamos a sacar la columna en la que hacemos clic
        let cv= document.querySelector('canvas'),
            regiones =4,
            ancho=cv.width/regiones,
            alto=cv.height/regiones;
        
        let fila, columna;       
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
        //console.log(fila +' - ' + columna);        
    }

    //pinto una | vertical en medio del canvas

    ctx.moveTo(cv.width/4,0);//linea vertical izq medio
    ctx.lineTo(cv.width/4,cv.height);
    
    ctx.moveTo(3*cv.width/4,0);//linea vertical der medio
    ctx.lineTo(3*cv.width/4,cv.height);

    //lineas horizontales
    ctx.moveTo(0,cv.height/4);
    ctx.lineTo(cv.width,cv.height/4);

    ctx.moveTo(0,3*cv.height/4);
    ctx.lineTo(cv.width,3*cv.height/4);

    ctx.strokeStyle='#a3a3a3';
    ctx.lineWidth=1;
    ctx.stroke();
    

}

function medio4(){
    console.log('pinto lineas');
    let cv = document.querySelector('#cv00' /*+ idCV*/),
        ctx = cv.getContext('2d');

    // ctx.fillStyle='#a3a3a3';
    //pinto una | vertical en medio del canvas
    ctx.moveTo(cv.width/2,0);
    ctx.lineTo(cv.width/2,cv.height);

    //lineas horizontales
    ctx.moveTo(0,cv.height/2);
    ctx.lineTo(cv.width,cv.height/2);
        

    ctx.strokeStyle='#303030';
    ctx.lineWidth=1.5;
    ctx.stroke();
}

function sololineas9(){
    let cv = document.querySelector('#cv00' ),
    ctx = cv.getContext('2d');

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
/******************/
function id4(){
    console.log(tamanyoCanvas);
}


function desBoton9(){
    
    let html='';
    html='<input type="button" class="botonTamanyo" disabled value="4x4">';
    html+='<input type="button" class="botonTamanyo2" disabled value="9x9">';

    document.querySelector('.medio>div').innerHTML = html;
    console.log('CAMBIO BOTON');
}

function boton9(){
    let html='';
    html='<input type="button" id="cuatro" class="botonTamanyo" onclick="canvas4('+"cv00"+');" value="4x4">';
    html+='<input type="button" id="nueve" class="botonTamanyo2" onclick="canvas9('+"cv00"+');" value="9x9">';

    document.querySelector('.medio>div').innerHTML = html;
    console.log('CAMBIO BOTON');
}
function canvas9(idCV){

    let cvs= document.querySelectorAll('canvas');

    cvs.forEach(function(e){
        e.width=380;
        e.height=380;
    });
    canvas92(idCV);
    tamanyoCanvas=9;
    console.log(tamanyoCanvas);

    let cv = document.querySelector('#' + idCV),
    ctx = cv.getContext('2d');
    // pinto una | vertical en medio del canvas
        //repetimos para que se vea mas oscura

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
       
    ctx.strokeStyle='#383838';
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



    cv.onclick = function (evt){
        console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);
        
        //vamos a sacar la columna en la que hacemos clic
        let cv= document.querySelector('canvas'),
            ctx=cv.getContext('2d'),
            regiones =9,
            ancho=cv.width/regiones,
            alto=cv.height/regiones;
        
        let fila, columna;
        
        
        columna = Math.floor(evt.offsetX / ancho);
        fila = Math.floor(evt.offsetY / alto);
        
        console.log(fila +' - ' + columna);
        
        
        //pintamos imagen en cada columna-fila
        // pintarImagen(fila,columna);
        
    }
    ctx.stroke();
}

//=======================================
//setTimeOut
var tiemposudo;
function actualizarCronoST(){
    
    if(document.querySelector('#crono').getAttribute('data-parar'))
        return false;
    //tomar el numero de segundo acumulados
    let valor    =  parseInt(document.querySelector('#crono').getAttribute('data-valor')) + 1,
        horas    =  Math.floor(valor / 3600),//nos quedamos con la parte entera inferior
        minutos  =  Math.floor((valor - horas * 3600) / 60),
        segundos =  valor - horas * 36000 - minutos * 60;

        horas = (horas<10?'0':'') + horas;
        minutos = (minutos<10?'0':'') + minutos;
        segundos = (segundos<10?'0':'') + segundos;
        document.querySelector('#crono').innerHTML=`${horas}:${minutos}:${segundos}`;
        document.querySelector('#crono').setAttribute('data-valor',valor);
        setTimeout( actualizarCronoST,1000);
        tiemposudo=`${horas}:${minutos}:${segundos}`;
        //console.log(tiemposudo);
        sessionStorage.setItem('tiemposudo', tiemposudo);
}

function pararST(){
    document.querySelector('#crono').setAttribute('data-parar','si');
}

function iniciarST(){
    document.querySelector('#crono').innerHTML='00:00:00';

    document.querySelector('#crono').setAttribute('data-valor','0');
    document.querySelector('#crono').removeAttribute('data-parar');
    setTimeout( actualizarCronoST,1000); //ejecutara la funcion cada segundo

}
//=========================================
var sudo;
var idcelda;
function sacaNumeros(){
    // var e= document.getElementById("cuatro");
    // e.disabled=true;
    // console.log('disabled true');
    
    let xhr = new XMLHttpRequest(),
        url='api/sudoku';
    
    let cv = document.querySelector('#cv00'),
        ctx = cv.getContext('2d');

    console.log('vamos a sacar los numeros');
    console.log(tamanyoCanvas);

    url += '/generar/'+tamanyoCanvas;
    console.log(url);

    xhr.open('POST', url, true);
    console.log('abro post');

    xhr.onload=function(){
        console.log(xhr.responseText);
        let r= JSON.parse(xhr.responseText);
        console.log(r);
        sessionStorage.setItem('idsudo',r.ID);
        sessionStorage.setItem('numerosSudo',r.SUDOKU);
        sessionStorage.setItem('tokensudo',r.TOKEN);
        numsudo=r.SUDOKU;
        console.log(numsudo);
        sudo=r;
        console.log(r.TOKEN);
        idsudo=r.ID;
        console.log(idsudo);
        // sessionStorage.setItem('sudo', r.ID);
         sessionStorage.setItem('sudo-'+ r.ID, r.TOKEN);
        console.log(sessionStorage);
    

        tamx=cv.width/tamanyoCanvas;
        tamy=cv.height/tamanyoCanvas;
        console.log(tamx );
        console.log(tamy );
        
        for(x=0; x<numsudo.length; x++){
            for(y=0; y<numsudo[x].length; y++){
                
                console.log(numsudo[x][y]);
                sessionStorage.setItem('id:'+x+'-'+y, numsudo[x][y]);
                    //(x) para las columnas (y) para las filas
                    if(tamanyoCanvas==4){
                        if(numsudo[x][y]!='0'){
                            idcelda=[x,y];
                            console.log(idcelda);
                            pintar04(tamx, tamy ,x,y);
                            //cursorCeldas(x,y);
                            ctx.fillStyle='#000';
                            ctx.textAlign='center';
                            ctx.font='30px sans-serif,arial';
                            ctx.beginPath();
                            ctx.fillText(numsudo[x][y], tamx*x + tamx/2  ,tamy*y + tamy/2 +8 );
                            //sacaCeldas4(numsudo[x][y], x,y,idcelda);
                        }else{
                            idcelda=[numsudo[x][y]];
                            console.log(idcelda);
                            sacaCeldas4(numsudo[x][y], x,y,idcelda);
                        }
                    }else{
                        if(numsudo[x][y]!='0'){
                            document.getElementById("cv00").style.cursor = "pointer";
                            pintar09(tamx, tamy,x,y);
                            ctx.fillStyle='#000';
                            ctx.textAlign='center';
                            ctx.font='27px sans-serif,arial';
                            ctx.fillText(numsudo[x][y], tamx*x + tamx/2  ,tamy*y + tamy/2 +8 );
                            //sacaCeldas9(numsudo[x][y],x,y);
                        }else{
                            sacaCeldas9(numsudo[x][y], x,y);
                        }
                    }

            }
        }

    };
    xhr.send();
    ctx.save();console.log('guardonumeros en canvas');


}


function pintar04(tax,tay,x,y){//pintar rectangulo con strokeREct
    let cv = document.querySelector('#cv00' ),
        ctx = cv.getContext('2d');

    ctx.strokeStyle ='#2A44B2';
    ctx.lineWidth =4;

    //ctx.fillStyle='#FFB518';
    ctx.fillStyle='#dfeef1';
    ctx.fillRect(tax*x+1,tay*y+1,tax-2,tay-2);//horizontal,vertical
    
}

function pintar09(tax,tay,x,y){//pintar rectangulo con strokeREct
    let cv = document.querySelector('#cv00' ),
        ctx = cv.getContext('2d');

    ctx.strokeStyle ='#2A44B2';
    ctx.lineWidth =4;

    //ctx.fillStyle='#FFB518';
    ctx.fillStyle='#dfeef1';
    ctx.fillRect(tax*x+1,tay*y+1,tax-2,tay-2);//horizontal,vertical
    
 
}

function sacaCeldas4(num, x,y, id){//pinta las celdas al hacer clic
    
    let cv = document.querySelector('#cv00'),
        ctx = cv.getContext('2d');
    console.log(num);
    console.log(id);
    if(id==0){
    //quitaDisponibles();
    cv.onclick = function (evt){
        console.log(num);
        sacaDisponibles();
       
            console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);
            
            //vamos a sacar la columna en la que hacemos clic
            let cv= document.querySelector('canvas'),
                regiones =tamanyoCanvas,
                ancho=cv.width/regiones,
                alto=cv.height/regiones;
            
            let fila, columna;
            
            
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            
            console.log(fila +' - ' + columna);
            let celda=[fila,columna];
            console.log(celda);
            // ctx.fillStyle='#F3FA5D';
            ctx.fillStyle='#000cf7';
                ctx.fillRect(ancho*columna+1,alto*fila+1,ancho-2,alto-2);
            //refrescaNumeros();
            
        
        
    }
}


}
function sacaCeldas9(num,x,y){
    let a= 'tesaco' + x + y+'-'+ num;
    console.log(a);
    let a2=a.split('-');
    console.log(a2[1]);
    let a3=a2[1];
    
    let cv = document.querySelector('#cv00' /*+ idCV*/),
        ctx = cv.getContext('2d');
    
        
        cv.onclick = function (evt){
            //quitarDisponibles();
            console.log(num);
            sacaDisponibles();
           
                console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);
                
                //vamos a sacar la columna en la que hacemos clic
                let cv= document.querySelector('canvas'),
                    regiones =9,
                    ancho=cv.width/regiones,
                    alto=cv.height/regiones;
                
                let fila, columna;
                    columna = Math.floor(evt.offsetX / ancho);
                    fila = Math.floor(evt.offsetY / alto);
                
                console.log(fila +' - ' + columna);
                let celda=[fila,columna];
                console.log(celda);
                
                ctx.fillStyle='#000cf7';
                    ctx.fillRect(ancho*columna+1,alto*fila+1,ancho-2,alto-2);
                //refrescaNumeros();
                celda.onclick=function(){
                    console.log('pintaaaaaaaaaaaaaaaaa');
                }
            }
            
        }

function sacamasCeldas4(){//pinta las celdas al hacer clic
    quitaDisponibles2();
    let cv = document.querySelector('#cv00'),
        ctx = cv.getContext('2d');
   // console.log(num);
   // console.log(id);
 //if(id==0){
    cv.onclick = function (evt){
        //console.log(num);
        sacaDisponibles();
       
            console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);
            
            //vamos a sacar la columna en la que hacemos clic
            let cv= document.querySelector('canvas'),
                regiones =tamanyoCanvas,
                ancho=cv.width/regiones,
                alto=cv.height/regiones;
            
            let fila, columna;
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            
            
            
            console.log(fila +' - ' + columna);
            let celda=[fila,columna];
            console.log(celda);
            ctx.fillStyle='#000cf7';
                ctx.fillRect(ancho*columna+1,alto*fila+1,ancho-2,alto-2);
            //refrescaNumeros();
    
        }
        
  //  }
}

function sacamasCeldas9(){//pinta las celdas al hacer clic
    quitaDisponibles2();
    let cv = document.querySelector('#cv00'),
        ctx = cv.getContext('2d');
   // console.log(num);
   // console.log(id);
 //if(id==0){
    cv.onclick = function (evt){
        //console.log(num);
        sacaDisponibles();
       
            console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);
            
            //vamos a sacar la columna en la que hacemos clic
            let cv= document.querySelector('canvas'),
                regiones =tamanyoCanvas,
                ancho=cv.width/regiones,
                alto=cv.height/regiones;
            
            let fila, columna;
            
            
            columna = Math.floor(evt.offsetX / ancho) ;
            fila = Math.floor(evt.offsetY / alto) ;
            
            console.log(fila +' - ' + columna);
            let celda=[fila,columna];
            console.log(celda);
            // ctx.fillStyle='#F3FA5D';
            ctx.fillStyle='#000cf7';
                ctx.fillRect(ancho*columna+1,alto*fila+1,ancho-2,alto-2);
            //refrescaNumeros();
            celda.onclick=function(){
                console.log('pintaaaaaaaaaaaaaaaaa');
            }
        }
        
  //  }
}
///=================
// function pintaBlanco(){
//     //pinta las celdas al hacer clic
//         let cv = document.querySelector('#cv00'),
//             ctx = cv.getContext('2d');

//         let
//             regiones =4,
//             ancho=cv.width/regiones,
//             alto=cv.height/regiones;
//             let fila, columna;
        
//         //console.log(num);
//         //console.log(id);
//      //if(id==0){
//         cv.onmousemove = function (evt){
//             //console.log(num);
//             //sacaDisponibles();
            
                
                
//             columna = Math.floor(evt.offsetX / ancho);
//             fila = Math.floor(evt.offsetY / alto);
//             //console.log('CLICK:' + evt.offsetX + ' - ' + evt.offsetY);

//         }
                
//                 //vamos a sacar la columna en la que hacemos clic
               
               
                
//                 console.log(fila +' - ' + columna);
//                 let celda=[fila,columna];
//                 console.log(celda);
//                 ctx.fillStroke='#fff';
//                 ctx.fillRect(ancho*columna+1,alto*fila+1,ancho-2,alto-2);
//                 //refrescaNumeros();
//                 // celda.onclick=function(){
//                 //     console.log('pintaaaaaaaaaaaaaaaaa');
//                 // }
//             ctx.stroke();
            
        
    
    
// }
//=======================================================
function sacaDisponibles(){
    //if(document.querySelector('#bEmpieza').innerHTML=""){
        let html='';
        if(tamanyoCanvas==4){
           // html+='<div class="medio">';
            html+='<span>Números disponibles</span>';
            html+='<hr>';
            html+='<button id="f1" onclick="cogeFicha1();">1</button>';
            html+='<button id="f2" onclick="cogeFicha2();">2</button>';
            html+='<button id="f3" onclick="cogeFicha3();">3</button>';
            html+='<button id="f4" onclick="cogeFicha4();">4</button>';
            //html+='</div>';
        }else{
            //html+='<div class="medio">';
            html+='<span>Números disponibles</span>';
            html+='<hr>';
            html+='<button id="f1" onclick="cogeFicha1();">1</button>';
            html+='<button id="f2" onclick="cogeFicha2();">2</button>';
            html+='<button id="f3" onclick="cogeFicha3();">3</button>';
            html+='<button id="f4" onclick="cogeFicha4();">4</button>';
            html+='<button id="f5" onclick="cogeFicha5();">5</button>';
            html+='<button id="f6" onclick="cogeFicha6();">6</button>';
            html+='<button id="f7" onclick="cogeFicha7();">7</button>';
            html+='<button id="f8" onclick="cogeFicha8();">8</button>';
            html+='<button id="f9" onclick="cogeFicha9();">9</button>';
           // html+='</div>';
        }
        document.querySelector('#bEmpieza>.medio').innerHTML +=html;
    //}
}

function quitaDisponibles(){
    let html ="";
    document.querySelector("#bEmpieza>.medio").innerHTML=html;
    
    if(tamanyoCanvas==4){
        sacamasCeldas4();

    }else{
        sacamasCeldas9();
    }
        

}

function quitaDisponibles2(){
    // let html ="";
    // document.querySelector("#bEmpieza>.medio").innerHTML=html;

}

//=========================================
function terminalo(){
    sessionStorage.clear();
}
//==============================
function empiezaPartida(){
    sessionStorage.clear();
    console.log(sessionStorage);
    if(tamanyoCanvas==4){
        desBoton4();
    }else{
        desBoton9();
    }
    sacaNumeros();
    let html ='';

    html+='<div class="medio2">';
    // html+='<h5>Tiempo partida:</h5>';


    // html+='<section>';
    html+='<span>Tiempo partida:</span><output id="crono" class="crono">00:00:09</output>';
    html+='<hr>';
    //html+='<div class="medio">';
    html+='<button class="corr" onclick="corrigelo();">Corregir</button>';
    html+='<button class="fin" onclick="terminalo();">Finalizar</button>';
    html+='</div>';

    html+='<div class="medio">';

    // if(tamanyoCanvas==4){
    //     html+='<div class="medio">';
    //     html+='<span>Números disponibles</span>';
    //     html+='<hr>';
    //     html+='<button id="f1" onclick="cogeFicha1();">1</button>';
    //     html+='<button id="f2" onclick="cogeFicha2();">2</button>';
    //     html+='<button id="f3" onclick="cogeFicha3();">3</button>';
    //     html+='<button id="f4" onclick="cogeFicha4();">4</button>';
    //     html+='</div>';
    // }else{
    //     html+='<div class="medio">';
    //     html+='<span>Números disponibles</span>';
    //     html+='<hr>';
    //     html+='<button id="f1" onclick="cogeFicha1();">1</button>';
    //     html+='<button id="f2" onclick="cogeFicha2();">2</button>';
    //     html+='<button id="f3" onclick="cogeFicha3();">3</button>';
    //     html+='<button id="f4" onclick="cogeFicha4();">4</button>';
    //     html+='<button id="f5" onclick="cogeFicha5();">5</button>';
    //     html+='<button id="f6" onclick="cogeFicha6();">6</button>';
    //     html+='<button id="f7" onclick="cogeFicha7();">7</button>';
    //     html+='<button id="f8" onclick="cogeFicha8();">8</button>';
    //     html+='<button id="f9" onclick="cogeFicha9();">9</button>';
    //     html+='</div>';
    // }
    
        // html+='</section>';
    html+='</div>';
    document.querySelector('#bEmpieza').innerHTML =html;
    iniciarST();
}
var id
function porencima(){//pinta la celda al pasar por encima
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        ctx2 = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    cv.onmousemove=function (evt){
        let fila, columna;
                   
        columna = Math.floor(evt.offsetX / ancho);
        fila = Math.floor(evt.offsetY / alto);
        ctx2.fillStyle='#F3FA5D';
        ctx2.fillRect(ancho*columna+1,alto*fila+1,ancho-2,alto-2);
        ctx2.stroke();
    }
}
//==============FICHAS=========================================
function cogeFicha1(){
    //quitaDisponibles2();
    let b=1;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
        //pintaBlanco();
        
            let fila, columna;
            // ctx.strokeStyle='#414141';
            // ctx.fillStyle='#000';
            ctx.lineWidth=1;
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            //ctx.beginPath();
            ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);

            ctx.textAlign='center';
            ctx.font='27px sans-serif,arial';
            
            ctx.beginPath();
            ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
            ctx.strokeStyle='#000';
            //ctx.beginPath();
            //ctx.fillRect(ancho*columna+1,alto*fila+1,ancho-2,alto-2);//horizontal,vertical

            console.log(fila+'-'+columna);
            guardaCanvios(b,fila,columna);
            
            ctx.stroke();
            quitaDisponibles();
            console.log('quito disponiblesz');
            sacaCeldas4();
           
    }
    
    
}
function cogeFicha2(){
    let b=2;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
            let fila, columna;
                   
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);

            ctx.textAlign='center';
            ctx.font='27px sans-serif,arial';
            ctx.beginPath();
            ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
            // if(tamanyoCanvas==4){

            //     sololineas4();
            //     medio4();
            // }else{
            //     sololineas9();
            // }
            ctx.fillStyle='#000';
            console.log(fila+'-'+columna);
            guardaCanvios(b,fila,columna);
            ctx.stroke();
            quitaDisponibles();
            sacaCeldas4();
    }
}
function cogeFicha3(){
    let b=3;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
            let fila, columna;
                   
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);


            ctx.textAlign='center';
            ctx.font='27px sans-serif,arial';
            ctx.beginPath();
            ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
            // if(tamanyoCanvas==4){

            //     sololineas4();
            //     medio4();
            // }else{
            //     sololineas9();
            // }
            ctx.fillStyle='#000';
            console.log(fila+'-'+columna);
            guardaCanvios(b,fila,columna);
            ctx.stroke();
            quitaDisponibles();
            sacaCeldas4();
    }
}
function cogeFicha4(){
    let b=4;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
            let fila, columna;
                   
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);


            ctx.textAlign='center';
            ctx.font='27px sans-serif,arial';
            ctx.beginPath();
            ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
            // if(tamanyoCanvas==4){

            //     sololineas4();
            //     medio4();
            // }else{
            //     sololineas9();
            // }
            ctx.fillStyle='#000';
            console.log(fila+'-'+columna);
            guardaCanvios(b,fila,columna);
            ctx.stroke();
            quitaDisponibles();
            sacaCeldas4();
    }
}
function cogeFicha5(){
    let b=5;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
            let fila, columna;
                   
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);


            ctx.textAlign='center';
            ctx.font='27px sans-serif,arial';
            ctx.beginPath();
            ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
            // if(tamanyoCanvas==9){
            // sololineas9();
            // }
            ctx.fillStyle='#000';
            console.log(fila+'-'+columna);
            guardaCanvios(b,fila,columna);
            ctx.stroke();
            quitaDisponibles();
            sacaCeldas4();
    }
}
function cogeFicha6(){
    let b=6;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
            let fila, columna;
                   
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);

            ctx.textAlign='center';
            ctx.font='27px sans-serif,arial';
            ctx.beginPath();
            ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
            // if(tamanyoCanvas==9){
            //     sololineas9();
            //     }
                ctx.fillStyle='#000';
            console.log(fila+'-'+columna);
            guardaCanvios(b,fila,columna);
            ctx.stroke();
            quitaDisponibles();
            sacaCeldas4();
    }
}
function cogeFicha7(){
    let b=7;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
            let fila, columna;
                   
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);

            ctx.textAlign='center';
            ctx.font='27px sans-serif,arial';
            ctx.beginPath();
            ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
            // if(tamanyoCanvas==9){
            //     sololineas9();
            //     }
                ctx.fillStyle='#000';
            console.log(fila+'-'+columna);
            guardaCanvios(b,fila,columna);
            ctx.stroke();
            quitaDisponibles();
            sacaCeldas4();
    }
}
function cogeFicha8(){
    let b=8;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
            let fila, columna;
                   
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);

            ctx.textAlign='center';
            ctx.font='27px sans-serif,arial';
            ctx.beginPath();
            ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
            // if(tamanyoCanvas==9){
            //     sololineas9();
            // }
            ctx.fillStyle='#000';
            console.log(fila+'-'+columna);
            guardaCanvios(b,fila,columna);
            ctx.stroke();
            quitaDisponibles();
            sacaCeldas4();
    }
}
function cogeFicha9(){
    let b=9;
    console.log(b);
    
    let cv= document.querySelector('canvas'),
        ctx = cv.getContext('2d'),
        regiones =tamanyoCanvas,
        ancho=cv.width/regiones,
        alto=cv.height/regiones;
    
    cv.onclick=function(evt){
        let fila, columna;
                
        columna = Math.floor(evt.offsetX / ancho);
        fila = Math.floor(evt.offsetY / alto);
        ctx.clearRect(ancho*columna +1,alto*fila +1, ancho-2, alto-2);

        ctx.textAlign='center';
        ctx.font='27px sans-serif,arial';
        ctx.beginPath();
        ctx.fillText(b, ancho*columna + ancho/2  ,alto*fila + alto/2 +8 );
        // if(tamanyoCanvas==9){
        //     sololineas9();
        // }
        ctx.fillStyle='#000';
        console.log(fila+'-'+columna);
        guardaCanvios(b,fila,columna);
        ctx.stroke();
        quitaDisponibles();
            sacaCeldas4();
    }
}
//================================================================

function guardaCanvios(b,f,c){     
      
    for(x=0; x<numsudo.length; x++){
        for(y=0; y<numsudo[x].length; y++){
            //console.log(numsudo[x][y]);
                if(f==y && c==x) {
                    if(numsudo[x][y]==0)
                //(x) para las columnas (y) para las filas
                        numsudo[c][f]=b;
                
                }
        }
    }
    console.log(numsudo);
}

//=============Corregir
function corrigelo(){
    let url='api/sudoku/' + idsudo;
        url += '/comprobar';
        console.log(url);

    fd= new FormData;
    console.log(numsudo);
    let auto= sessionStorage['sudo-'+ idsudo];
        console.log(sessionStorage['sudo-'+ idsudo]);
    let juego=JSON.stringify(numsudo);
    let sinhuecos= completa();
    console.log(sinhuecos);
    //let juego=numsudo;
    console.log(juego);

    if(sinhuecos==true){
        fd.append('juego', juego);

        fetch(url, {method:'POST', body: fd, headers:{'Authorization':auto}}).then(function(respuesta){
            if(respuesta.ok){
                respuesta.json().then(function(datos){
                    console.log(datos);

                    if(datos.FALLOS.length==0){
                        console.log('sin falllos');
                        pararST();
                        
                            let html='';
                            let ts=sessionStorage['tiemposudo'];
                            html+= '<div>';
                            html += '<img src="misudoku1.png">';
                            html += '<h2>¡¡¡ENHORABUENA!!!</h2>';
                            html += '<p>'+ ' Has completado el sudoku en un tiempo de ' + ts + '</p>';
                            html += '<button class="acep" onclick="cerrarMODAL1();">Aceptar </button>';

                            html += '</div>';
                    
                            modalSINERRORES(html);
                    }else{
                            let html='';
                            
                            html+= '<div>';
                            html += '<img src="misudoku1.png">';
                            html += '<h2>HAY '+datos.FALLOS.length +' errores</h2>';
                            html += '<p> ¿Quieres intentar corregirlos?</p>';
                            html += '<button class="yes" onclick="vamosCorrige();">SI </button>';
                            html += '<button class="no" onclick="NOcorrige();">NO </button>';

                            html += '</div>';
                            modalERROR(html);
                            console.log(datos.FALLOS);
                            
                            //let ht='';
                            //ht ='<div> <h2>FALLOS</h2> ';
                            for(let i=0; i<datos.FALLOS.length; i++){
                                    console.log('columna' + datos.FALLOS[i].fila);
                                    console.log('fila' + datos.FALLOS[i].columna);

                                    let col=datos.FALLOS[i].fila;
                                    let fil=datos.FALLOS[i].columna;
                                    marcaFALLOS(fil,col);
                            }
                            //ht ='</div>';
                            //document.querySelector("#losfallos").innerHTML +=ht;
                            //fallitos(ht);
                            //document.querySelector('#bEmpieza>.medio').innerHTML +=html;
                           
                    }

                });
            }else{
                console.log('Error en comprobar sudoku');
            }
        });
    }/*else{
        let html='';
                            
        html+= '<div>';
        html += '<img src="misudoku1.png">';
        html += '<h2>HAY HUECOS VACIOS</h2>';
        html += '<p> Debes rellenar todos los huecos del sudoku</p>';
        html += '<button class="yes" onclick="vamosCorrige();">Volver al sudoku </button>';
        html += '</div>';
        modalRELLENA(html);
    }*/
}

function completa(){
    console.log(numsudo);
    let llena=false;
    let vacios=-1;

    for(let x=0; x<numsudo.length; x++){
        for(let y=0; y<numsudo[x].length; y++){
            if(numsudo[x][y]==0){
                vacios= vacios +1;
            }
        }
    }

    if(vacios==-1){
        llena=true;
    }
    return llena;
}

//=============Terimar
function terminalo(){
    console.log('quiero terminar');

    let xhr=new XMLHttpRequest(),
        auto=sessionStorage['sudo-'+ idsudo];
        url='api/sudoku/'+idsudo;
        console.log(idsudo);
    
    xhr.open('DELETE', url, true);

    xhr.onload=function(){
        //console.log(xhr.responseText);
        let r= JSON.parse(xhr.responseText);
        console.log(r);
        if(r.RESULTADO=='OK'){
            console.log('todo correcto');
            pararST();
            location.href='index.html';
        }else{
            console.log('no se ha podido eliminar');
        }
    }
    xhr.setRequestHeader('Authorization', auto);
    
    xhr.send();
}

//================MODALES===========
function modalSINERRORES(html){
    let div = document.createElement('div');

    div.setAttribute('id','capa-fondo');
    div.innerHTML=html;
    document.body.appendChild(div);
    
    
}

function cerrarMODAL1(){
    document.querySelector('#capa-fondo').remove();
    location.href='index.html';
}

function modalERROR(html){
    let div = document.createElement('div');

    div.setAttribute('id','capa-fondo');
    div.innerHTML=html;
    document.body.appendChild(div); 
}

function vamosCorrige(){
    document.querySelector('#capa-fondo').remove();
}

function NOcorrige(){
    pararST();
    document.querySelector('#capa-fondo').remove();
    location.href='index.html';

}
function modalRELLENA(html){
    let div = document.createElement('div');

    div.setAttribute('id','capa-fondo');
    div.innerHTML=html;
    document.body.appendChild(div); 
}

function fallitos(ht){
    let div = document.createElement('div');

    div.setAttribute('id','medio');
    div.innerHTML=ht;
    document.body.appendChild(div);
}
function marcaFALLOS(fil,col){
    let cv = document.querySelector('#cv00'),
        ctx = cv.getContext('2d');
        
        let tamx=cv.width/tamanyoCanvas;
        let tamy=cv.height/tamanyoCanvas;
    
        ctx.fillStyle ='#f500004f';
        ctx.lineWidth =3;

    ctx.fillRect(tamx*col+3, tamy*fil+3, tamx-6, tamy-6);

    // cv.onmousemove=function(evt){
    //     console.log(evt);
    //     var dentro=true;
    //     console.log(dentro);
    //     ctx.clearRect(tamx*col+3, tamy*fil+3, tamx-6, tamy-6);

    //     // ctx.fillRect(tamx*col+3, tamy*fil+3, tamx-6, tamy-6);
    // }



}
//===========================
function cursorCeldas(x,y){
    let cv = document.querySelector('#cv00' /*+ idCV*/),
        ctx = cv.getContext('2d');
    cv.onmousemove = function (evt){
        
            console.log('Move:' + evt.offsetX + ' - ' + evt.offsetY);
            
            //vamos a sacar la columna en la que hacemos clic
            let cv= document.querySelector('canvas'),
                regiones =tamanyoCanvas,
                ancho=cv.width/regiones,
                alto=cv.height/regiones;
            
            let fila, columna;
            
            
            columna = Math.floor(evt.offsetX / ancho);
            fila = Math.floor(evt.offsetY / alto);
            
            console.log(fila +' - ' + columna);
            let celda=[fila,columna];
            console.log(celda);
            ctx.fillStyle='#F3FA5D';
                ctx.fillRect(ancho*columna+1,alto*fila+1,ancho-2,alto-2);
            //refrescaNumeros();
            celda.onclick=function(){
                console.log('pintaaaaaaaaaaaaaaaaa');
            }
        }
        
    
    
    
    
    
    let fila, columna;
            
            
    columna = Math.floor(evt.offsetX / ancho);
    fila = Math.floor(evt.offsetY / alto);

    console.log(sessionStorage['id:' + x +'-'+y]);

}