import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizados'
})
export class CapitalizadosPipe implements PipeTransform {

  transform(value: string, activo:boolean = true): string {

  value = value.toLowerCase();
  let nombres = value.split(' ');

  if(activo){
    nombres = nombres.map (nombre2 =>{
      return nombre2[0].toUpperCase() + nombre2.substr(1);
    });
  }else{
  nombres[0] = nombres [0][0].toUpperCase() + nombres[0].substr(1);
  }
  return nombres.join(' ');
  }

}
