import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter4'
})
export class Filter4Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for(const especie of value){
     if (especie.nombre_es.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPost.push(especie)
     } ;
   };
   if (resultPost.length=== 0) {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'No se encontraron resultados!',
      timer: 3000
      
    })
   }
    return resultPost;
  }

}

