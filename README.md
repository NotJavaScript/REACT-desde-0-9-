---

# Proyecto: Autenticación con JWT y Gestión de UX en React

Este repositorio representa un avance clave en el dominio de **React JS**, enfocándose en la integración de seguridad mediante la autenticación con **JSON Web Tokens (JWT)** y la implementación de patrones de diseño para mejorar la experiencia de usuario (*UX*). Se pone especial énfasis en el uso de Hooks personalizados como estándar de **buenas prácticas**.

El objetivo de esta fase es conectar el frontend con servicios de backend protegidos y gestionar estados de carga de manera profesional.

---

## 🚀 Funcionalidades y Aprendizaje

### 1. Autenticación Robusta con JWT

Se ha desarrollado la lógica necesaria para que la aplicación interactúe con sistemas de autorización basados en tokens, garantizando un flujo de identidad seguro.

* **Integración de JWT:** Consumo de servicios de backend para la validación de credenciales (usuario y contraseña) y manejo de tokens de acceso.
* **Protección de Rutas:** Implementación de lógica para restringir el acceso a componentes específicos basándose en el estado de autenticación del usuario.

### 2. Optimización de la Experiencia (UX)

Para evitar una interfaz estática o confusa durante las peticiones asíncronas, se han integrado elementos visuales de retroalimentación.

* **Pantallas de Carga (Loading States):** Creación de componentes de carga que informan al usuario sobre los procesos en segundo plano.
* **Gestión de Estados Asíncronos:** Control preciso de los ciclos de vida de las peticiones para mostrar u ocultar elementos de la interfaz según corresponda.

---

## 📝 Notas sobre el entorno

Para que el proyecto sea plenamente funcional, es necesario considerar los siguientes puntos técnicos:

* **Dependencia de API Externa:** El código requiere de una API activa que gestione JWT para procesar el inicio de sesión. Actualmente, la lógica está preparada para integrarse en cuanto el endpoint esté disponible.
* **Hooks como Buenas Prácticas:** Se ha priorizado el uso de Hooks para encapsular la lógica de autenticación, promoviendo un código limpio, reutilizable y fácil de mantener.
* **Arquitectura Escalable:** La estructura está diseñada para que la adición de la base de datos y el backend sea una transición fluida y sin errores de compatibilidad.

---

## 🎓 Objetivos de Aprendizaje

* [x] Implementación de **flujos de autenticación** con JWT en el frontend.
* [x] Creación y gestión de **pantallas de carga** profesionales.
* [x] Uso avanzado de **Hooks** siguiendo estándares de Clean Code.
* [x] Manejo de **estados globales** para la sesión del usuario.
* [x] Integración de lógica de **seguridad en React**.

---
