import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter8'
})
export class Filter8Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for(const actividades of value){
     if (actividades.lugar_act.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPost.push(actividades)
     } ;
   };

   for(const actividades1 of value){
    if (actividades1.nombre_act.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(actividades1)
    } ;
  };
  for(const actividades2 of value){
    if (actividades2.descripcion_act.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(actividades2)
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
