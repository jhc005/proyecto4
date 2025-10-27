export const PALABRAS=require("../data/palabras.json")

export function getCategorias(){
    let lista=Object.keys(PALABRAS)
    return lista
}
export function realizarIntento(palabra:string, display:string, letra:string){
    let palabraAdivinar = palabra
    let disGenerar = display.split("")

    const char = letra
    let valor = false;
    

    for (let i = 0; i < palabraAdivinar.length; i++) {
        if(palabraAdivinar.charAt(i).toUpperCase() === char.toUpperCase()){
            disGenerar[i] = char
            valor = true;
        }
    }
    return  {
        actualizado:valor,
        display: disGenerar.join("")
    }
}

export function generarPalabraAleatoria(categoria:string){

    const palabraRandom=Math.floor(Math.random()*PALABRAS[categoria].length)
    return PALABRAS[categoria][palabraRandom]

}
export function generarCategoriaAleatoria(){

    const categoriaRandom=Math.floor(Math.random()*getCategorias().length)
    const categoria=getCategorias()[categoriaRandom]

    return categoria

}


 export function generarDisplayInicial(palabra:string){

        let e=""
        for(let i=0;i<palabra.length;i++){
            e+="-"


        }
        return e

 }
