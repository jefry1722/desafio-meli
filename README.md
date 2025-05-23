# 📱 Aplicación de Producto - Frontend y Backend

Este proyecto es una aplicación completa con frontend en **React** y backend en **Golang**

---

## 📁 Estructura del Proyecto

```
.
├── frontend/      # Aplicación React
└── backend/       # API en Go (Gin + Fx)
```

---

## 🚀 Inicialización del Proyecto

### 🖥️ Frontend (React)

1. Navega a la carpeta del frontend:

   ```bash
   cd frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. El frontend estará disponible en:  
   [http://localhost:5173](http://localhost:5173)

---

### 🧩 Backend (Golang con Gin + Fx)

1. Navega a la carpeta del backend:

   ```bash
   cd backend
   ```

2. Descarga los paquetes necesarios:

   ```bash
   go mod download
   go mod tidy
   ```

3. Inicia el servidor:

   ```bash
   go run main.go
   ```

4. El backend estará disponible en:  
   [http://localhost:5000](http://localhost:5000)

---

## ✅ Tecnologías Usadas

- **Frontend:**

  - React
  - Bootstrap
  - Vite

- **Backend:**
  - Go
  - Gin
  - Fx (Inyección de dependencias)

---

## 🧪 Testing

Para ejecutar los tests del backend y ver la cobertura:

```bash
go test ./... -coverprofile=coverage.out
go tool cover -func=coverage.out
```

---

## 🛠️ Autor

Desarrollado por Jefry Naicipa.

---
