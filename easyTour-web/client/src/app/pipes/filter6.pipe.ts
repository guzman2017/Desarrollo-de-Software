import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter6'
})
export class Filter6Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for(const ciudad of value){
     if (ciudad.ciudad_paq.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPost.push(ciudad)
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
