// calling the arrows
// let arrow_left = document.getElementById("slider_arrow_left");
// let arrow_right = document.getElementById("slider_arrow_right");

// let con = 1;
// arrow_right.addEventListener("click",next_event);

// function next_event(){
//     // let image2 = "img/bg-event-2.jpg";
//     // let image = document.getElementById("container_slider");
//     // let image_event2 = document.createElement("img");
//     // image_event2.setAttribute("src",image2);
//     // image_event2.setAttribute("id","slider_image");
//     // // image_event2.setAttribute("width", "390");
//     // image.appendChild(image_event2);
    // let image4 = document.getElementsByClassName("slider_image");
    // image4.style.display="none";
//     for(con=1; true; con++){
//         // let imagen = document.getElementById("container_slider");
//         // let image1 = document.createElement("img");
//         // image1.setAttribute("class","slider_image_first");
//         console.log("ggg");
//     }
        
        
    
// }   
// function siguiente(){
//     let image = document.getElementById("slider_image_first").style.display ="none";
//     let new23 = document.getElementById("slider_image2").style.display="inline-block";
// }

let arrow_left = document.getElementById("slider_arrow_left");
let arrow_right = document.getElementById("slider_arrow_right");
let container_slider = document.getElementById("container_slider");
let imagenes = document.getElementsByClassName("slider_image").length;


arrow_right.addEventListener("click", siguiente);
let imagenestodo = [

]

for(i=0; i<=12 ; i++){
    function siguiente(){  
        arrow_right.onclick= function (){
            let image = document.getElementById("slider_image_first").style.display ="none";
            let imagen2 = document.getElementsByClassName("slider_image").visibility ="inline-block";
            // let imagenes = document.getElementsByClassName("slider_image").length;
            
        };
    }
}
siguiente();
