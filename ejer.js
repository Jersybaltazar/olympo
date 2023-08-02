

function extraernumeromedio() {
    const array = [1,23,3,43,5,1,1,1];
    const numeros =  array.length;
    const medio = Math.floor(numeros / 2);

    if (numeros % 2 !== 0) {
        return array[medio];
    }else{
        return(array[medio - 1] + array[medio])/2;
    }

}

console.log(extraernumeromedio());

function extraerletra(array){
   if (!Array.isArray(array) || array.length === 0) {
    //si no es un arreglo p esta vacio, retornamo null o lanzamos un error,segun lo deseas
    return null;
   }

   //obtener el último elemento del arreglo(que sera el ultimo carácter de la cadena)
   const cadena = arreglo[0];
   const ultimoelemento = cadena.charAt(cadena.length -1);
   const decimal = ultimoelemento.slice()

   return ultimoelemento;

}


const arreglo = ['me gusta mi amigas'];
const ultimaletra = extraerletra(arreglo);
console.log(ultimaletra);