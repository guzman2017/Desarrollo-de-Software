import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter7'
})
export class Filter7Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for(const guia of value){
     if (guia.nombre_guia.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPost.push(guia)
     } ;
   };

   for(const guia1 of value){
    if (guia1.cedula_guia.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(guia1)
    } ;
  };
  for(const guia2 of value){
    if (guia2.idioma_guia.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(guia2)
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

