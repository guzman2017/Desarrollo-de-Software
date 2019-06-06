import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 2) return value;
    const resultPost = [];
    for(const categoria of value){
     if (categoria.nombre_cat.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPost.push(categoria)
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

