💸 Administrador de Presupuesto

Esta aplicación es una herramienta intuitiva y dinámica diseñada para ayudarte a gestionar y visualizar tus gastos de manera efectiva. Desde establecer un presupuesto hasta categorizar y rastrear cada gasto, la app te proporciona una visión clara de tus finanzas.

Desarrollada con React, TypeScript y Tailwind CSS, en este proyecto, he profundizado en el manejo avanzado del estado global con useContext y useReducer, así como en la integración de librerías de UI para una experiencia de usuario interactiva y fluida.

🚀 ¡Explora el Proyecto!

👉 Expense Planner en Netlify/Vercel 👈

✨ Características Principales

🌍 Manejo de Estado Global con useContext y useReducer:

La lógica central y el estado de la aplicación (presupuesto, gastos, filtros) se gestionan globalmente a través de un Context API, cuyo estado es administrado por un useReducer. Esto permite un flujo de datos eficiente y escalable, eliminando el "prop drilling".

Toda la implementación del contexto y el reducer está encapsulada en un Custom Hook, facilitando la reutilización y la legibilidad del código.

📊 Gráfica Circular Interactiva (react-circular-progressbar):

Visualización dinámica del porcentaje de presupuesto gastado y restante.

La gráfica se actualiza con animaciones suaves y progresivas a medida que se añaden, editan o eliminan gastos, proporcionando un feedback visual inmediato.

📋 Gestión Dinámica de Gastos:

Formulario de Presupuesto: Una primera pantalla dedicada a establecer el presupuesto inicial. La interfaz de gestión de gastos se muestra condicionalmente solo cuando el presupuesto es válido (> 0).

Filtrado por Categoría: Un selector permite filtrar la lista de gastos por categoría, mejorando la usabilidad y la organización.

Listado de Gastos: Muestra los gastos con su nombre, monto, fecha e icono de categoría.

⚡ Interacciones Suaves y Eficientes (react-swipeable-list):

La lista de gastos permite acciones de "swipe" (deslizar) para revelar opciones de eliminar o actualizar un gasto, proporcionando una experiencia de usuario moderna y fluida.

Al seleccionar "Actualizar", el formulario de gastos se precarga con los datos existentes para una edición rápida.

➕ Adición de Nuevos Gastos (Modal con Headless UI):

Un botón flotante + abre una ventana modal para añadir nuevos gastos.

Implementado con Headless UI, lo que demuestra la capacidad de trabajar con librerías de componentes UI sin imponer estilos, permitiendo un control total con Tailwind CSS.

💾 Persistencia de Datos con Local Storage: El presupuesto y todos los gastos se guardan en el localStorage del navegador, asegurando que la información persista entre sesiones.

🛡️ Tipado Estricto con TypeScript: Todo el proyecto está completamente tipado con TypeScript, lo que garantiza la robustez, previene errores en tiempo de desarrollo y mejora la mantenibilidad del código base.

🎨 Estilizado Profesional con Tailwind CSS: Interfaz de usuario limpia, moderna y responsiva, construida eficientemente con las utilidades de Tailwind CSS.

⚙️ Tecnologías y Librerías Utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.

TypeScript: Superset de JavaScript que añade tipado estático.

Tailwind CSS: Framework CSS de utilidad para un estilizado rápido y responsivo.

Vite: Herramienta de construcción rápida y ligera para proyectos React.

react-circular-progressbar: Para la visualización de la gráfica de presupuesto.

react-swipeable-list: Para las interacciones de deslizar en la lista de gastos.

@headlessui/react: Para la creación de componentes UI sin estilos, como el modal.

💻 Cómo Ejecutar el Proyecto Localmente

npm install
npm run dev

💡 Próximas Funcionalidades (Roadmap)
Este proyecto representa una base sólida, y tengo planes para expandirlo aún más:

Autenticación de Usuarios: Permitir a los usuarios crear cuentas y sincronizar sus datos de gastos.

Integración con API REST/Base de Datos: Persistir los datos del usuario en una base de datos real (ej. Firebase, MongoDB, PostgreSQL) para una mayor escalabilidad y acceso multi-dispositivo.

Notificaciones o Alertas: Avisos sobre límites de gasto o próximos pagos.

Testeo Unitario y de Integración: Escribir pruebas robustas para asegurar la calidad y el correcto funcionamiento de la lógica de la aplicación.

🧑‍💻 Conéctate Conmigo
¡Gracias por visitar mi proyecto! Estoy activamente buscando oportunidad como Desarrollador Front-end. Este proyecto es un testimonio de mi entusiasmo por las tecnologías modernas y mi compromiso con el aprendizaje continuo y la creación de soluciones eficientes. Si tienes alguna pregunta, comentario o una oportunidad interesante, no dudes en contactarme:

GitHub: https://github.com/luisgoweb

LinkedIn: https://www.linkedin.com/in/luis-gonzalez-dev-full-stack/

Correo Electrónico: luisgocodev@gmail.com
