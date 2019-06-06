import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost = [];
    for(const proveedores of value){
     if (proveedores.nombre_pro.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPost.push(proveedores)
     } ;
   };
   for(const proveedores2 of value){
    if (proveedores2.lugar_pro.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(proveedores2)
    } ;
  };

  for(const proveedores3 of value){
    if (proveedores3.telefono_pro.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(proveedores3)
    } ;
  };

  for(const proveedores4 of value){
    if (proveedores4.email_pro.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(proveedores4)
    } ;
  };

  for(const proveedores5 of value){
    if (proveedores5.descripcion_pro.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(proveedores5)
    } ;
  };

  for(const proveedores6 of value){
    if (proveedores6.costo_pro.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultPost.push(proveedores6)
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
