# **Survey Container** 
![SurveyContainer](https://github.com/FernadoCodeDev/Survey-Container/blob/main/Img-Readme/SurveyContainer.png)


# 📦 Survey Container

**Survey Container** es una solución completa desarrollada como parte de una prueba técnica para construir un sistema de encuestas internas modular, reutilizable y escalable. Este proyecto incluye:

- Un SDK frontend en React + TypeScript (`/sdk`)
- Un backend en Node.js + Express + TypeScript (`/backend`)
- Una API funcional para gestionar encuestas, respuestas y métricas
- Una app de demostración (`/demo-app`) que integra el SDK

## 🧠 ¿Qué es Survey Container?

Survey Container es un sistema de encuestas interno pensado para integrarse fácilmente en diferentes aplicaciones. Está compuesto por un paquete npm exportable (`<SurveyWidget />`) y una API para manejo de datos. Fue creado con TypeScript en todos sus componentes, siguiendo principios de modularidad y escalabilidad.

### 🚀 ¿Qué necesidad resuelve?

- Permite a empresas recolectar feedback interno de forma ágil.
- Su diseño modular permite integrarlo fácilmente en múltiples entornos frontend.
- Ofrece una API clara y tipada para obtener resultados de encuestas y métricas.

### ⚙️ Tecnologías utilizadas

**Front-End** | **Back-End** | **Bases de Datos** | 
:---: | :---: | :---: |
<img src="https://skillicons.dev/icons?i=react,typescript" alt="frontend Skills" /> |<img src="https://skillicons.dev/icons?i=nodejs,express" alt="Backend Skills" /> | <img src="https://skillicons.dev/icons?i=sqlite" alt="Databases Skills" /> |

### 🧪 Cómo probar Survey-Container
- clona el repositorio
- instala las dependencias de cada carpeta

**Backend**

```
cd backend && npm install
```

**demo-app** 

```
cd demo-app && npm install
```

**sdk**

```
cd sdk && npm install
```

---

## 📁 Estructura del proyecto

<details>
<summary>📂 backend</summary>

El backend está desarrollado con **Node.js**, usando el framework **Express** y escrito completamente en **TypeScript**. Utiliza **SQLite** como sistema de base de datos local y **Prisma** como ORM para el manejo de datos.

### 📦 Estructura general

```
/backend
│
├── prisma/
│ └── schema.prisma ← Definición del modelo de la base de datos
│
├── src/
│ ├── controllers/ ← Métodos para manejar encuestas, respuestas y métricas
│ ├── models/ ← (Si tienes interfaces o tipos definidos)
│ ├── prisma/
│ │ └── client.ts ← Inicializa la conexión con Prisma
│ ├── routes/ ← Define rutas para surveys, responses y métricas
│ └── index.ts ← Archivo principal para levantar el servidor
│
├── .env ← Variables de entorno
├── package.json
└── tsconfig.json
```

> 📝 **Nota:** Las carpetas `dist/` y `node_modules/` se excluyen porque se generan automáticamente al compilar y al instalar dependencias.

### 🧠 ¿Qué es `prisma/`?

La carpeta `prisma/` contiene el archivo `schema.prisma`, donde se define el modelo de la base de datos.  
Aquí se declaran las **tablas** (o modelos) como `Survey`, `Question`, `Response`, etc., que luego Prisma usa para generar el acceso a la base de datos.

También puedes correr el siguiente comando para abrir una interfaz visual de la base de datos:

```
npx prisma studio
```

### 🛠️ Configuración de la base de datos

Para configurar la base de datos con SQLite, asegúrate de tener el archivo schema.prisma bien definido. Luego:

1. Instala dependencias:

```
npm install
```

2. Genera el cliente Prisma y crea la base de datos:

```
npx prisma generate
npx prisma db push
```

Esto creará automáticamente el archivo dev.db (base de datos SQLite) basado en el esquema.

3. Para ver tu base de datos ve a Prisma Studio:

```
npx prisma studio
```

### 🚀 Iniciar el servidor

- entra a la carpeta backend 

```
cd backend 
```

e inicia el servidor 

```
npm run dev
```

### 🌐 Rutas disponibles
Estas rutas están definidas dentro de la carpeta `src/routes` y cada una se conecta con su respectivo controlador (`src/controllers`):

| **Método** | **Ruta**                  | **Descripción**                         |
|:----------:|:--------------------------|:----------------------------------------|
| GET        | `/api/surveys/:id`        | Obtener una encuesta por su ID          |
| POST       | `/api/responses`          | Enviar respuestas de encuesta           |
| GET        | `/api/metrics/:surveyId`  | Ver métricas agrupadas por pregunta     |


### 📂 Explicación por carpetas
- `controllers/`: Aquí se encuentran las funciones que manejan la lógica de cada endpoint, como obtener encuestas, registrar respuestas y calcular métricas.
- `routes/`: Define las rutas del API y las conecta con los controladores correspondientes.
- `prisma/client.ts`: Archivo que crea y exporta una instancia de PrismaClient. Se importa en los controladores para acceder a la base de datos.
- `index.ts`: Archivo principal que levanta el servidor Express y configura middlewares básicos.

</details>

<details>
<summary>📂 demo-app</summary>

## 🎯 ¿Qué es `demo-app`?

La carpeta `demo-app` contiene una aplicación web desarrollada con **React**, **TypeScript** y **Vite**.  
Esta aplicación sirve como demostración de cómo utilizar el componente `SurveyWidget` del SDK, mostrando su funcionamiento en distintos escenarios de uso real.

---

## ⚙️ Tecnologías usadas

<img src="https://skillicons.dev/icons?i=react,typescript,vite" alt="frontend Skills" /> 

- 📦 React Router DOM
- 🎨 Estilos personalizados con CSS (sin Tailwind por compatibilidad con el SDK)


## 🚀 ¿Cómo iniciar el proyecto?

Primero, asegúrate de haber instalado las dependencias:

```
cd demo-app
npm install
```

Luego, para iniciar el servidor en desarrollo:

```
npm run dev
```

## 🧭 Navegación y rutas
La lógica de rutas está definida en src/main.tsx, y utiliza react-router-dom. Las rutas disponibles son:

| **Ruta** | **Componente**                  | **Descripción**                         |
|:----------:|:--------------------------|:----------------------------------------|
| /                   | `MetricsViewer`  | Página inicial: muestra todas las encuestas disponibles en la base de datos  |
| /app                | `App`            | Página para ingresar manualmente el ID de una encuesta                       |
| /survey/:surveyId   | `App`            | Página para responder la encuesta seleccionada                               |


El enrutamiento se define así en `main.tsx`:

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={<MetricsViewer />} />
    <Route path="/app" element={<App />} />
    <Route path="/survey/:surveyId" element={<SurveyPage />} />
  </Routes>
</BrowserRouter>
```

### 🧪 Funcionalidad principal

- Al iniciar la aplicación, se listan todas las encuestas disponibles.
- Cada encuesta muestra sus preguntas y un botón “Contestar encuesta” que redirige a `/survey/:surveyId`.
- Desde esa vista puedes completar y enviar tus respuestas.
- La interfaz es simple, priorizando la funcionalidad por encima del diseño visual.
- También puedes probar la vista de encuesta manualmente desde `/app` ingresando un ID válido.

### 🔐 Seguridad
La app está diseñada para prevenir inyecciones SQL en los campos de entrada.


### 🎨 Estilos
El archivo de estilos principal es `src/index.css`.

> Debido a que el SDK no compila directamente con Tailwind CSS, en esta app se usan estilos personalizados con CSS nativo.

Dentro de `index.css` encontrarás un comentario explicando por qué se optó por esta estrategia en lugar de usar Tailwind.

### 📸 Pantallas
Vista principal con encuestas:

![Vista principal con encuestas](https://github.com/FernadoCodeDev/Project-React-Ty-Node/blob/main/Img-Readme/Readme-Image-1.png)

Vista de encuesta con campos para responder

![Vista de encuesta con campos para responder](https://github.com/FernadoCodeDev/Project-React-Ty-Node/blob/main/Img-Readme/Readme-Image-2.png)

</details>

<details>
<summary>📂 sdk</summary>

## 📦 ¿Qué es `sdk`?

La carpeta `sdk` contiene el paquete reutilizable que expone el componente `SurveyWidget`, el cual permite integrar encuestas de forma sencilla en cualquier aplicación.  
Este SDK está hecho en **React** y **TypeScript**, y es el corazón de la funcionalidad para contestar encuestas conectadas al backend.

## ⚙️ Tecnologías usadas
 
<img src="https://skillicons.dev/icons?i=react,typescript" alt="frontend Skills" /> 

---

## 🚀 Instalación

Igual que en las otras carpetas, solo debes instalar las dependencias:

```
cd sdk
npm install
```

### 🧱 Estructura del SDK

```
/sdk
│
├── src/
│   ├── components/
│   │   └── SurveyWidget.tsx ← Componente principal para mostrar y contestar encuestas
│   ├── types/
│   │   └── index.ts ← Tipos TypeScript para `Survey`, `Question` y `Response`
│   └── index.ts ← Punto de entrada del paquete que exporta el componente
│
├── package.json
└── tsconfig.json

```

### 🧩 ¿Qué hace SurveyWidget?

El componente `SurveyWidget` es un formulario dinámico que:

- Recibe el ID de una encuesta como prop (`surveyId`).
- Hace una petición al backend para buscar la encuesta correspondiente.
- Muestra el título y todas las preguntas asociadas a esa encuesta.
- Permite al usuario responder cada pregunta.
- Valida que no se envíen campos vacíos.
- Envía las respuestas al endpoint `/api/responses` usando fetch.
- Muestra alertas al usuario dependiendo del éxito o fallo de la operación.

Además, este componente evita errores comunes como:

- Enviar respuestas incompletas.
- Dejar campos vacíos.
- Perder el estado al cambiar de input.

### 🧠 Tipos definidos

Dentro de `src/types/index.ts` se definen las siguientes interfaces:

- `Survey`: Representa una encuesta con `id`, `text` y un array de `questions`.
- `Question`: Cada pregunta tiene un `id` y su `text`.
- `Response`: Representa la respuesta enviada a una pregunta (`questionId`, `content`).

### 📁 Exportación del componente

El componente se exporta desde `src/index.ts` para poder importarlo directamente desde cualquier proyecto:

```
export { SurveyWidget } from './components/SurveyWidget';
```

Este SDK está diseñado para ser ligero, funcional y reutilizable, facilitando su integración en cualquier frontend compatible con React.

</details>

<details>
<summary>📡 API</summary>

## API

Este directorio contiene el código del Backend de la aplicación, desarrollado con Node.js, Express, TypeScript, y la base de datos SQLite, utilizando Prisma como ORM.

### 🧩 ¿Cómo funciona?
Al iniciar esta parte del proyecto, se levanta un servidor en `localhost:3000` donde podrás interactuar con la API para crear y consultar encuestas.


### 🚀 Iniciar el servidor
Primero, asegúrate de haber instalado las dependencias:

```
cd backend
npm install
```

Luego, para ejecutar el servidor en modo desarrollo:

```
npm run dev
```

Al iniciar correctamente, deberías ver el siguiente mensaje en consola:
`API funcionando 🚀`

### 🗃️ Base de datos
Al ejecutar el backend por primera vez, la base de datos ya debe estar creada (ver instrucciones en el apartado Backend). En este punto, estará vacía, por lo que al visitar la URL:

`http://localhost:3000/api/surveys`

`[]`

### 🧪 Probar la API
Para agregar encuestas y probar el sistema, se recomienda utilizar **Postman**:

- Abre Postman y crea una nueva **petición POST**
- Usa como URL: `localhost:3000/api/surveys`
- Ve a la pestaña **Body**, selecciona **raw**, y elige **JSON** como tipo de contenido.
- Usa la siguiente plantilla de ejemplo para enviar tu encuesta:

```
{
  "qualification": "Nombre de la encuesta",
  "questions": [
    { "text": "¿Cuál es tu lenguaje favorito?" },
    { "text": "¿Qué herramientas usas a diario?" }
  ]
}
```

> Puedes agregar la cantidad de preguntas que desees. El formato es flexible.

- Haz clic en **Send** y si todo está correcto, la encuesta se guardará.
- Refresca la página en tu navegador (`localhost:3000/api/surveys`) y ahora verás la encuesta agregada en el array.

### 📌 Notas adicionales
Si ya tienes abierto el local de `demo-app`, también puedes refrescar la página y verás reflejada la nueva encuesta disponible para ser contestada desde el Front-End.

La API está preparada para recibir datos seguros y evitar inyecciones SQL mediante el uso de **Prisma ORM** y buenas prácticas en los controladores.

</details>


