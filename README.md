<a href="https://yavirac.edu.ec/web/"><img src="https://pbs.twimg.com/media/DlDOfWJW4AE6v0E.jpg" title="Yavirac" alt="Yavirac"></a>
# Aplicación móvil para reserva de viajes nacionales

El presente proyecto investigativo tiene la finalidad de mejorar la gestión de reservas de viajes, mediante el análisis de las necesidades 
de la agencia, para obtener y realizar la reserva de mejores paquetes turísticos.

### Clonar repositorio 👯

``` bash
# clonar el repositorio
$ git clone https://github.com/guzman2017/Desarrollo-de-Software.git
```

## Inicio

Estas instrucciones le permitirán obtener una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba. 
Sistema operativo utilizado: Windows 10 Home x64 bits


### Requisitos

### Descargar

* [Node JS](https://nodejs.org/es/download/) - Entorno de ejecución.
* [MySQL Community Server versión 8.0.15 o superior  ](https://dev.mysql.com/downloads/mysql/) - Dase de datos
* [MySQL Workbench  versión 8.0.15 o superior ](https://dev.mysql.com/downloads/workbench/) - Gestor de Dase de datos
* [Visual Studio Code ](https://code.visualstudio.com/download) - Editor de código


Qué cosas necesita para instalar el software y cómo instalarlo?
### Ir a la carpeta del proyecto  utilizando la consola de Node JS o CMD de Windows

```
* Node JS          versión 10.13.0
* Angular Cli      npm install -g @angular/cli
* Ionic Framework  npm install -g ionic
* Express JS       npm install express --save 
* TypeScript       npm install -g typescript --save   
* MySQL
NOTA: De preferencia utiliza el editor de código Visual Studio Code, para abrir el proyecto y ejecutar todos 
los pasos con su terminal integrada.

```

### Instalación

Pasos que le indican cómo instalar y ejecutar el entorno de desarrollo:


### Database
 La configuracion de la base de datos se encuentra en: 
 ``` bash
 $ cd /tesis/web/server/src/keys.ts
 
 ```
 ## Ejemplo
 ```typescript
// code!!
export default {
    database: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'reserva_db'
    }
}
```
``` bash
 Una vez realizado cualquier cambio en el Server para que guarde los cambios debera ejecutar:
 
 $ cd/tesis/web/server
 $ npm run build
 $ npm run dev 
 
 El backup de la base de datos se llama reserva_db se encuentra en la carpeta /Database-Backup y se debe importar 
 utilizando MySQL Workbeanch
```


### Ejecutar Servidor Web  
``` bash
# Ir a la carpeta del proyecto Server Web utilizando la consola de Node JS o CMD de Windows
$ cd /tesis/web/server 

# Instalar dependencias

$ npm install
$ tsc 
$ node build/index.js
$ npm run build 
$ npm run dev
```
**Proceso**
![Recordit GIF](http://g.recordit.co/eA6EY77v7z.gif)

### Ejecutar Proyecto Web Angular
``` bash
# Ir a la carpeta del proyecto Web Angular Cli
$ cd /tesis/web/client 

# Instalar dependencias
$ npm install
$ ng serve -o
En el navegador de internet escriba  http://localhost:4200
```
**Proceso 2**
![Recordit GIF](http://g.recordit.co/Cfw0EtMNLq.gif)
<p align="center">![Recordit GIF](http://g.recordit.co/X5tdcOAJRn.gif) </p>

### Ejecutar Proyecto móvil IonicFramework
``` bash
# Ir a la carpeta del proyecto IonicFramework
$ cd tesis/easyTour
$ npm install
$ ionic serve --lab
En el navegador de internet escriba  http://localhost:8200
**Deberá registrarse una cuenta para poder ingresar al sistema!
```
**Proceso 3**
![Recordit GIF](http://g.recordit.co/WxIMPzVNfs.gif)
![Recordit GIF](http://g.recordit.co/uulCo0CibP.gif)

### Ejecutar Server DialogFlow
``` bash
# Ir a la carpeta del proyecto IonicFramework para ejecutar para ejecutar servidor de DialogFlow
$ cd tesis/easyTour
$ node server.js
```
**Proceso 4**
![Recordit GIF](http://g.recordit.co/accj5O5kQ4.gif)




## Autor 🔨

* **Mario Andrés Guzmán Canacuan**


## License

- Copyright 2019 © 
