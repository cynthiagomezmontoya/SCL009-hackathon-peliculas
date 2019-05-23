const contenedorPeliculas = document.getElementById('contenedorPeliculas'); 
const contenedorPeliculas2 = document.getElementById('contenedorPeliculas2'); 
const indicadorCarrusel = document.getElementById('indicadorCarrusel'); 

/*  2 Obtener data de url */

let gvRecomendadosId = [];
gvRecomendadosId.push('tt0371746'); // iron man
gvRecomendadosId.push('tt1981115'); //thor
gvRecomendadosId.push('tt4203008'); // capi

const traerRecomendados = () => {
    //    for(let i = 0;  i < gvRecomendadosId.length; i++) 
    let lv_flag = 0;
    for (let recomendado of gvRecomendadosId) {
        //   console.log("dentro de for " + gvRecomendadosId[i]);
        //   console.log(recomendado);

        fetch('http://www.omdbapi.com/?apikey=4896bf68&i=' + recomendado)
            .then(i => i.json())
            .then(i => {
                // console.log(data.Title)
                // console.log(data.imdbID)
                    console.log(i.Poster)
                    if (i.Poster == 'N/A'){
                        i.Poster = 'img/Imagen-no-disponible.png';
                    }

                    // contenedorPeliculas.innerHTML +=   `
                    // <div class="card">
                    //     <div class="card ">
                    //         <img class="card-img-top" src="${i.Poster}" alt="${i.Title}">
                    //         <div class="card-body">
                    //             <h4 class="card-title">${i.Title}</h4>
                    //             <p class="card-text">${i.Plot}</p>
                    //             <a href="#" class="btn btn-primary">Detalles</a>
                    //         </div>
                    //     </div>
                    // </div>
                    // `


            //     contenedorPeliculas.innerHTML += `
            //     <div class="col-md-5">
            //     <div class="card">   
            //        <div class="card-header">
            //           <img class="card-img" src="${i.Poster}" alt="Card image">
            //        </div>  
            //        <div class="card-body">
            //           <h1 class="card-title">${i.Title}</h1>
            //           <div class="container">
            //              <div class="row">
            //                 <div class="col-4 metadata">
            //                    <i class="fa fa-star" aria-hidden="true"></i> 
            //                    <p>${i.imdbRating}/10</p>
            //                 </div>
            //                 <div class="col-8 metadata">Año ${i.Year}</div>
            //              </div>
            //           </div>      
            //           <p class="card-text">${i.Awards}</p>
            //          <a class="trailer-preview" href="#" target="new">
            //              <i class="fa fa-play" aria-hidden="true"></i>
            //               </a>
            //        </div>
            //     </div>
            // </div>
            //     `

            // inicio carrusel        
            if (lv_flag === 0){
                contenedorPeliculas2.innerHTML +=`
                <div class="item active" style="color:white"> <h1>${i.Title}</h1>
                    <img src="${i.Poster}" alt="${i.Title}" style="float:left">
                    <div>
                        <h3> Nominaciones${i.Awards}</h3>
                        <h3> Año ${i.Year}</h3>
                        <h3> Ranking ${i.imdbRating}/10 </h3>
                    </div>
                    </div>
                    `
              lv_flag = 1;
            }else{
                contenedorPeliculas2.innerHTML +=`
                <div class="item" style="color:white"> <h1>${i.Title}</h1>
                    <img src="${i.Poster}" alt="${i.Title}" style="float:left">
                    <div>
                        <h3> Nominaciones${i.Awards}</h3>
                        <h3> Año ${i.Year}</h3>
                        <h3> Ranking ${i.imdbRating}/10 </h3>
                    </div>
                </div>
                `
            }
            // fin carrusel

            })
            .catch(err => console.log(err.code))
    }

    for(let i = 0; i < gvRecomendadosId.length; i++){
        if (i==0 ){
            indicadorCarrusel.innerHTML += `<br>
            <li data-target="#myCarousel" data-slide-to="${i}" class="active"></li>
        `    
        }else{
            indicadorCarrusel.innerHTML += `<br>
            <li data-target="#myCarousel" data-slide-to="${i}"></li>
        `   
        }



    }


}

const appInit = ()=>{
    traerRecomendados();
    contenedorPeliculas.innerHTML = '';
}

appInit();








 





    
    
