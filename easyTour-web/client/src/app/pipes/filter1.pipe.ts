import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for(const punto of value){
     if (punto.nombre_pun.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPost.push(punto)
     } ;
   };
   
     for(const punto2 of value){
      if (punto2.descripcion_pun.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(punto2)
       } ;
     };
     for(const punto3 of value){
      if (punto3.direccion_pun.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(punto3)
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
