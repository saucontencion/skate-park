# skate-park
string de conexion, authenticate, sync, crear la base de datos. 
colocar los name en los input en el form. verificar la creacion
[x] anos_experiencia espera un int ver como hago la transformada que le esta llegando string
[x] la imagen nose como se guarda en la base de datos elegir como string o blob
[x] ver la diferencia entre redirect y render y sendfile <!-- si tengo middlewares lo mejor es usar redirect, render es para vistas, sendfile enviar el archivo directamente y es menos escalable , ya que tendria 2 instancias -->
[x] add info base a la database y foto la direccion a la img
[x] registrarme y e iniciar sesion colocar direccionamiento
[x] pasar registro a hbs, esta ya todo funcionando
[] pasar a capa controller y pasar un objeto mejor
[]_[x] ya habiendo una conexio completa hacer todo por capaz , estandarizar y bien hechas 
[]ir a por login

__[]cambiar el id por email, quizas seria mas practico que siempre lo tengo a mano

[]en partials , podria agregar una seccion de table, que se repite, admin e index y uno mas
[]viendo lo de actualizaciones y permiso para el futuro 
 **estoy desordenandome con las capas futuras, y las comprobaciones**
[] darle a la capa funcional actual no mas, por mientras

## yendo a por capaz
[x] update hecho sin id, id debe ser el correo
[]el servicio de authtificacion es el que genera jwt con el id dentro,tengo que hacer un findone para buscar el id por el correo? lo mejor por tema de seguridad
### **El enfoque de programación por capas es un patrón arquitectónico que organiza la aplicación en diferentes niveles o capas de abstracción, cada una con responsabilidades específicas y claras. Cada capa tiene una responsabilidad bien definida y interactúa con las capas adyacentes para ofrecer la funcionalidad global del sistema. Esto mejora la mantenibilidad, la escalabilidad y la separación de responsabilidades. **

[] estrucurando, datos, deberia ser parte d skates controller 
_[] reestructurando routes_admin