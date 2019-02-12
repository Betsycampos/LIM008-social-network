# SocialBio

## Definición del Producto

### ¿Quiénes son los principales usuarios del producto?

Los principales usuarios de nuestro producto son las personas que quieran compartir y enterarse de tips, noticias y todo lo relacionado al medio ambiente.


### ¿Cómo descubriste las necesidades de los usuarios?

Estuvimos pensando en que hay varios blogs o videos sobre estos temas de medio ambiente, pero no hay un solo lugar donde se pueda encontrar esta información.


### Cuestionario

Para validar la idea de una red social orientada a temas ecológicos se realizó un cuestionario que fue realizada a través de nuestras redes sociales ([Cuestionario - Mundo Sostenible](https://docs.google.com/forms/d/e/1FAIpQLSfGQV2V06Zvy5a_yKTEeNvjdmB4jQZYylMM_Ft7_oEQxr6lcQ/viewform?usp=sf_link) ).Dichas preguntas se pueden detallar a continuación:

 ![preguntas](https://i.ibb.co/Lpw3s2q/1.png)

 Este cuestionario fue aplicado a 13 personas, las respuestas fueron las siguientes:
 ![respuesta1](https://i.ibb.co/Ws9jhFr/2.png)

 ![respuesta2](https://i.ibb.co/z280qcX/3.png)

 Con las respuestas de las 2 primeras preguntas, podemos ver que la mayoría percibe que el mundo necesita un cambio en sus hábitos con respecto a cómo utilizamos los recursos naturales, ya que si no cambiamos en 10 años el mundo será menos habitable y con menos recursos naturales vitales para sobrevivir.

 ![respuesta3](https://i.ibb.co/YWQG23S/4.png)

 Esta pregunta fue crucial para validar la orientación de la red social, ya que el 84,62% de los encuestados coincide en que si les interesaría una red social con esta temática.
 Finalmente, la cuarta y última pregunta se realizó con la finalidad de conocer la orientación que tomaría la red social y así poder proporcionar la tecnología necesaria para que cumpla las necesidades del usuario.

 ![respuesta4](https://i.ibb.co/WyN6dn5/5.png)

### ¿Cuáles son los objetivos de estos usuarios con relación con el producto?

Sus objetivos son poder compartir y enterarse de noticias, consejos o tips sobre cómo poder mejorar en cuanto a no seguir contaminando el medio ambiente.



## Historias de Usuario

Luego de haber hecho encuestas, pudimos implementar las historias de usuario con respecto a los requerimientos de una red social.

Para todas las historias, en general, su definición de terminado son las siguientes:

1. Que sea Single Page Application
2. Que esté publicado en gh-pages
3. Que sea responsive
4. Que se haga un prototipo de baja fidelidad
5. Que se implementen los test de las funciones creadas

### HU 01: **Yo como usuario quiero crear una cuenta para registrarme en la red social**

La definición de terminado de esta historia es que el usuario pueda registrar su nombre, correo y una contraseña que se almacene en firebase.  Además puede registrarse por medio de su cuenta de Google o Facebook, y se obtendría su nombre de usuario.  El campo nombre se almacena en la colección 'user'.

### HU 02: **Yo como usuario quiero iniciar sesión para visualizar el muro de publicaciones**

La definición de terminado de esta historia es que luego de que el usuario esté registrado, pueda ingresar su correo y contraseña para acceder al muro.  También puede acceder mediante las cuentas de Google y Facebook.

### HU 03: **Yo como usuario quiero crear una publicación para compartir mis ideas ecológicas**

La definición de terminado de esta historia es que aparezca en la pantalla del usuario:
- Un text area donde pueda escribir su publicación.  
- Un select donde puede elegir la seguridad, si desea que sea _Solo yo_ (que pueda verla solo el usuario) o _Amigos_ (que todos puedan verla).
- Un botón de _Publicar_ para que pueda agregar su publicación al muro.
Se debe validar que el campo no esté vacío.

### HU 04: **Yo como usuario quiero editar mis publicaciones para modificar la idea principal de lo que escribí**

La definición de terminado de esta historia es que en cada publicación, aparezca el botón _Editar_, y al hacer clic, el texto del post pueda modificarse en un text area y el botón cambie a _Guardar_.
Una vez que el usuario ya haya terminado de editar, y le de clic a _Guardar_, el post se mostrará actualizado.

### HU 05: **Yo como usuario quiero eliminar mi publicación para que no quede registro de lo que escribí**

La definición de terminado de esta historia es que haya un botón de _Eliminar_, cuando el usuario quiera eliminar su publicación hará clic en el botón y se le pedirá que confirme que lo quiere eliminar.  Si hace clic en _Cancelar_, no se eliminará, pero si hace clic en _Aceptar_, se eliminará del muro y de la base de datos.

### HU 06: **Yo como usuario quiero poner like a una publicación para expresar que me gusta**

La definición de terminado de esta historia es que en cada publicación, haya un botón y que cuando el usuario haga clic, pueda aumentar la cantidad de likes de esa publicación.

### HU 07: **Yo como usuario quiero ver cuántos likes le han puesto a mi publicación para saber a cuantas personas les gusta**

La definición de terminado de esta historia es que en cada publicación, al costado del botón que aumenta los likes, se pueda ver cuántos likes tiene la publicación.

### HU 08: **Yo como usuario quiero ver solo mis posts para tener un seguimiento de lo que publico**

La definición de terminado de esta historia es que el usuario pueda seleccionar "Solo yo" y pueda mostrarse las publicaciones con esta seguridad, y que a la vez, puede editar y eliminar sus publicaciones.

### HU 09: **Yo como usuario quiero ver los posts públicos para enterarme de sus ideas ecológicas**

La definición de terminado de esta historia es que el usuario pueda seleccionar "Amigos" y pueda mostrarse las publicaciones con esta seguridad, y que pueda dar like, pero no editar ni elimar esas publicaciones.

### HU 10: **Yo como usuario quiero cerrar sesión para salir de la red social**

La definición de terminado de esta historia es que el usuario, después de haber hecho o haber visto las publicaciones, pueda cerrar sesión.



## Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Para realizar el prototipo de baja fidelidad de nuestra red social (***SocialBio***) se hizo uso del diseño mobile first.

### FLUJO DE NUESTRA RED SOCIAL (SocialBio)

![Imagen 1][1]  ![Imagen 2][2]  ![Imagen 3][3]

[1]: https://i.ibb.co/S6Cr24p/Whats-App-Image-2019-02-12-at-12-33-53-PM.jpg
[2]: https://i.ibb.co/V9bGm0P/Whats-App-Image-2019-02-12-at-12-35-32-PM.jpg
[3]: https://i.ibb.co/Nmj7ttQ/Whats-App-Image-2019-02-12-at-12-36-18-PM.jpg

### PROTOTIPO DE BAJA FIDELIDAD
Después de mostrar el flujo de nuestra red social a los usuarios encuestados, pudimos realizar nuestro primer prototipo, el que fue un apoyo para obtener el resultado que deseamos para nuestra red social.

* Pantalla de inicio.
* Pantalla de registro.
* Pantalla de inicio de sesión.
* Pantalla del muro de publicaciones.

![Imagen 4][4]  ![Imagen 5][5]

[4]: https://i.ibb.co/y06KyvF/Whats-App-Image-2019-02-12-at-12-11-31-PM.jpg
[5]: https://i.ibb.co/jk4wjZ3/Whats-App-Image-2019-02-12-at-12-14-56-PM.jpg

![Imagen 6][6]  ![Imagen 7][7]

[6]: https://i.ibb.co/XF4VY7T/Whats-App-Image-2019-02-12-at-12-12-22-PM.jpg
[7]: https://i.ibb.co/7tWQHBZ/Whats-App-Image-2019-02-12-at-12-15-12-PM.jpg

### PROTOTIPO DE ALTA FIDELIDAD

![Imagen 8][8]  ![Imagen 9][9] ![Imagen 10][10]

[8]: https://i.ibb.co/Gscq5px/Inicio-pantalla-movil.jpg
[9]: https://i.ibb.co/ZScx5x6/Registro-tama-o-movil.jpg
[10]:https://i.ibb.co/Fmd95my/Muro-tama-o-movil.jpg

