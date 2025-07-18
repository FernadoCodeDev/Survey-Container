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

```bash
cd backend && npm install

**demo-app** 

```bash
cd demo-app && npm install

**sdk**

```bash
cd sdk && npm install

---

## 📁 Estructura del proyecto

<details>
<summary>📂 backend</summary>

El backend está desarrollado con **Node.js**, usando el framework **Express** y escrito completamente en **TypeScript**. Utiliza **SQLite** como sistema de base de datos local y **Prisma** como ORM para el manejo de datos.

### 📦 Estructura general

```bash
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

## 📝 **Nota:** Las carpetas `dist/` y `node_modules/` se excluyen porque se generan automáticamente al compilar y al instalar dependencias.

### 🧠 ¿Qué es `prisma/`?

La carpeta `prisma/` contiene el archivo `schema.prisma`, donde se define el modelo de la base de datos.  
Aquí se declaran las **tablas** (o modelos) como `Survey`, `Question`, `Response`, etc., que luego Prisma usa para generar el acceso a la base de datos.

También puedes correr el siguiente comando para abrir una interfaz visual de la base de datos:

```bash
npx prisma studio

### 🛠️ Configuración de la base de datos

Para configurar la base de datos con SQLite, asegúrate de tener el archivo schema.prisma bien definido. Luego:

1. Instala dependencias:

```bash
npm install

2. Genera el cliente Prisma y crea la base de datos:

```bash
npx prisma generate
npx prisma db push

Esto creará automáticamente el archivo dev.db (base de datos SQLite) basado en el esquema.

3. Para ver tu base de datos ve a Prisma Studio:

```bash
npx prisma studio

###🚀 Iniciar el servidor

- entra a la carpeta backend 

```bash
cd backend 

e inicia el servidor 

```bash
npm run dev

### 🌐 Rutas disponibles
Estas rutas están definidas dentro de la carpeta `src/routes` y cada una se conecta con su respectivo controlador (`src/controllers`):

**Método* | **Ruta** | **Descripción** | 
:---: | :---: | :---: |
GET  | `/api/surveys/:id` | Obtener una encuesta por su ID |

**Método* | **Ruta** | **Descripción** | 
:---: | :---: | :---: |
POST  | `/api/responses` | Enviar respuestas de encuesta |

**Método* | **Ruta** | **Descripción** | 
:---: | :---: | :---: |
GET  | `/api/metrics/:surveyId` | Ver métricas agrupadas por pregunta |

### 📂 Explicación por carpetas
- `controllers/`: Aquí se encuentran las funciones que manejan la lógica de cada endpoint, como obtener encuestas, registrar respuestas y calcular métricas.
- `routes/`: Define las rutas del API y las conecta con los controladores correspondientes.
- `prisma/client.ts`: Archivo que crea y exporta una instancia de PrismaClient. Se importa en los controladores para acceder a la base de datos.
- `index.ts`: Archivo principal que levanta el servidor Express y configura middlewares básicos.


</details>

<details>
<summary>📂 demo-app</summary>

![aa](https://github.com/FernadoCodeDev/Project-React-Ty-Node/blob/main/Img-Readme/Readme-Image-1.png)

![aaa](https://github.com/FernadoCodeDev/Project-React-Ty-Node/blob/main/Img-Readme/Readme-Image-2.png)

</details>

<details>
<summary>📂 sdk</summary>

</details>

<details>
<summary>API</summary>

</details>


