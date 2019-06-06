import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost = [];
    
    for(const game of value){
     if (game.lugar_loc.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      console.log('entro al filtro 1')
      resultPost.push(game)
     } 
     ;
   };
   
     for(const game2 of value){
      if (game2.descripcion_loc.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('entro al filtro 2')
        resultPost.push(game2)
       } ;
     };
     for(const game3 of value){
      if (game3.direccion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('entro al filtro 3')
        resultPost.push(game3)
       } ;
     };

     for(const game4 of value){
      if (game4.lat.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('entro al filtro 4')
        resultPost.push(game4)
       } ;
     };

     for(const game5 of value){
      if (game5.lng.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('entro al filtro 5')
        resultPost.push(game5)
       } ;
     };

     for(const game6 of value){
      if (game6.duracion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('entro al filtro 6')
        resultPost.push(game6)
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
