# Desafío de Desarrollador Front-end en TypeScript + React.js


## Objetivo

Desarrollar un mock-up funcional de un marketplace, a partir de un repositorio con utilidades, que permita a los usuarios registrarse, iniciar sesión y comenzar a invertir en activos inmobiliarios listados por desarrolladores. El objetivo es crear una interfaz intuitiva y atractiva que ofrezca una experiencia de usuario fluida, facilitando la toma de decisiones de inversión mediante una presentación clara y detallada de las propiedades disponibles.
Requisitos:

### Funcionalidad:

+ La primera página del mock-up debe ser el registro de el/la usuario/a.
+ La segunda página del mock-up debe ser el inicio de sesión de el/la usuario/a.
+ La tercera página del mock-up debe ser el catálogo. 
+ El mock-up debe contar con la navegación de las páginas mencionadas en su correspondiente orden.
+ Las primeras dos páginas deben interactuar con la API propuesta en la ruta relativa src/client/http/Broket.ts

### Desafíos:

+ Desarrollar las páginas de registro, inicio de sesión y catálogo, según el diseño propuesto en Figma bajo el paradigma de la programación funcional.
+ Agregar el manejo de errores en las páginas de registro e inicio de sesión.
+ Refactorizar el cliente Broker, en la ruta relativa src/client/http/Broker.ts, según el paradigma de la programación funcional.  
+ Navegación (Opcional, Puntos Extra): implementar un mecanismo que permita realizar la navegación a través de las páginas bajo el paradigma de la programación funcional.  

### Tecnologías:

+ Utilizar TypeScript para el desarrollo front-end.
+ Utilizar la biblioteca React.js para el desarrollo de componentes.
+ Utilizar los componentes dispuestos en la ruta relativa src/ui/components.

### Configuración de la API Externa:

+ Proporcionar instrucciones sobre cómo se obtendría el acceso desde el front-end a AWS Lambda.


### Características Opcionales (Puntos Extra):

+ Agregar funcionalidades que permitan generalizar el desarrollo bajo el paradigma de la programación funcional.  


## Directrices para la Entrega

+ Realizar un fork del repositorio provisto en GitHub que cuente con lo solicitado.
+ Incluir un archivo README.md con instrucciones sobre cómo se realizaron los desafíos propuestos y cómo se ejecuta el cliente web.
+ Documentar cualquier suposición realizada y describir el enfoque utilizado para la implementación.




## Desarrollo desafío

Para el desarrollo de los mockup se disponibilizan 4 archivos: 
* SignLayout.tsx: Es un template que se reutiliza para las vistas de Login y Register.
* Login.tsx 
* Register.tsx
* Catalog.tsx 

Para el caso de las rutas se utilizó la libreria `react-router-dom` y se generó una estructura base en el archivo index.js que envuelve las vistas principales y se organizan como sigue:
- http://localhost:3000/login
- http://localhost:3000/register
- http://localhost:3000/catalog



La refactorización del archivo Broker.ts se dejó en la misma ruta del broker original src/client/http/BrokerRefactor.ts siguiendo el paradigma de funciones puras de la programación funcional.

### Configuración API externa

Para la configuración de esta API es necesario cumplir con los siguientes requisitos:
* Crear y configurar la función lambda con sus respectivas politicas de permisos.
* Exponer la función lambda a través de una API gateway

* Elegir un cliente http para hacer las solicitudes, puede ser axios o fetch.
* Generar un archivo .env y agregar la url de la api

```bash

API_URL = https://api-url.execute-api.region.amazonws.com/your-stage

```

Ejemplo de función para llamar una funcion lambda con api gateway:

```javascript

const callLambdaFunction = (endpoint: string, token: string,  data?: any): IO<Promise<any>> => {
    
    const url = `${API_URL}/${endpoint}`;
    return fetch(url, { headers: createHeaders(token),body: JSON.stringify(data)})
        .then(handleResponse)
        .catch(error => { 
            console.log("error lambda function call", error);
            return null
        });
}

const getBrokers = async() => {
    const result =  await callcallLambdaFunction("mi-endpoint", {val1: "valor-uno", val2: "valor-dos"});
    console.log(result);
}
```

En el ejemplo se usaron las funciones refactorizadas en el Broker.ts como **createHeaders**  y **handleResponse**