import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter5'
})
export class Filter5Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for(const itinerario of value){
     if (itinerario.destino_it.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPost.push(itinerario)
     } ;
   };
   
   for(const itinerario1 of value){
    if (itinerario1.fecha_it.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(itinerario1)
    } ;
  };

  for(const itinerario2 of value){
    if (itinerario2.duracion_it.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(itinerario2)
    } ;
  };

  for(const itinerario3 of value){
    if (itinerario3.riesgo_it.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(itinerario3)
    } ;
  };

  for(const itinerario4 of value){
    if (itinerario4.advertencia_it.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(itinerario4)
    } ;
  };

  for(const itinerario5 of value){
    if (itinerario5.vacunas_it.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(itinerario5)
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

