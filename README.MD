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

        ```
    cd backend && npm install
    cd sdk && npm install
    cd demo-app && npm install


---

## 📁 Estructura del proyecto

<details>
<summary>backend</summary>

Incluye la API que gestiona encuestas, respuestas y métricas.

### Funcionalidades:
- `GET /api/surveys/:id`: Obtener una encuesta por ID
- `POST /api/responses`: Enviar respuestas
- `GET /api/metrics/:surveyId`: Ver métricas agrupadas por pregunta

### Consideraciones técnicas:
- Implementado en TypeScript
- Uso de middlewares para validación y manejo de errores
- Conexión a base de datos usando (especificar ORM o driver)
- Estructura organizada en controllers, routes y services

</details>

<details>
<summary>demo-app</summary>

![aa](https://github.com/FernadoCodeDev/Project-React-Ty-Node/blob/main/Img-Readme/Readme-Image-1.png)

![aaa](https://github.com/FernadoCodeDev/Project-React-Ty-Node/blob/main/Img-Readme/Readme-Image-2.png)

</details>

<details>
<summary>sdk</summary>

</details>

<details>
<summary>API</summary>

</details>


