# Prueba Técnica - Middleware de Catálogo y Precios

Este proyecto consta de un microservicio backend (Node.js + Express) que consume la API pública de DummyJSON, aplica transformaciones y reglas de negocio, y expone un endpoint. Un frontend (Angular) consume dicho endpoint y muestra los productos en una tabla ordenada.

## Demo en producción
- **Backend**: [https://prueba-tecnica-dgl-latam.onrender.com/api/products](https://prueba-tecnica-dgl-latam.onrender.com/api/products)
- **Frontend**: [https://front-tecnica-dgl-latam.onrender.com](https://front-tecnica-dgl-latam.onrender.com)

## Características técnicas
- **Backend**: Node.js + Express, modular, con manejo de errores y variables de entorno.
- **Frontend**: Angular 19 (standalone components), consumo de API con HttpClient.
- **Lógica de negocio**:
  - Precio final con impuesto del 16%.
  - Campo `isLowStock` (true si stock < 10).
  - Ordenamiento por `price` descendente.
- **Despliegue**: Backend en Render (Web Service), Frontend en Render (Static Site).

## Requisitos previos (para ejecución local)
- Node.js 18 o superior
- npm
- Angular CLI

## 🔧 Instalación y ejecución local

### Backend

cd backend
npm install
npm run dev

El servidor estará en http://localhost:3000. Endpoint: http://localhost:3000/api/products.

### Frontend
cd frontend
npm install
ng serve

Abre http://localhost:4200. Asegúrate de que el backend esté corriendo y que la URL en src/environments/environment.ts apunte a http://localhost:3000/api.

### Ejecución con Docker (opcional)

Puedes levantar ambos servicios con Docker Compose:

docker-compose up --build

Backend: http://localhost:3000

Frontend: http://localhost:8080

## Despliegue

El proyecto está desplegado en Render:

- Backend: Se utilizó un Web Service con Dockerfile, variables de entorno (PORT, EXTERNAL_API_URL).

- Frontend: Static Site con build command cd frontend && npm install && npm run build -- --configuration production y publish directory frontend/dist/frontend.

## Autor

Diego Fernando Vázquez Pérez - https://github.com/FexrVP