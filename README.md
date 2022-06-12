
# Basto Challenge


## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node, Express y MongoDB.
- Creación de un Formulario CRUD de datos de vacas.

## Comenzando

 1. Se debe iniciar git con `git init`
.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `src`. En estas carpetas estará el código del back-end y el front-end respectivamente. Se debe hacer npm install en ambas carpetas, para instalar todas las dependencias necesarias para correr el proyecto.

En `api` hay un archivo llamado: `config.js` dentro de la carpeta `configDB`:
Aquí se configura la BD de Mongo con la URI.
El contenido de `src` fue creado usando: Create React App.


#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Node
- [ ] MongoDB

#### Frontend

- Formulario de Creación de Animales.
- Formuario para editar el Animal.
- Tabla principal donde se ven todos los animales.
- SearchBar para buscar animales por ID Senasa.

#### Backend

- Rutas principales

- [ ] __GET /animales:
  - Obtener un listado de los animales.

- [ ] __GET /animales/:{idAnimal}
  - Obtener el detalle de un animal en particular.

- [ ] __POST /animales:
 - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de animales por body.
- [ ] __PUT /animales/edit/:{idAnimal}
 - Recibe los datos del animal a editar recolectados desde el formulario controlado de la ruta de edición de animales por body y el Id por params.
- [ ] __DELETE /animales/delete/:{idAnimal}
 - Recibe los datos del animal a eliminar recolectados desde el componente por body y el Id por params.


