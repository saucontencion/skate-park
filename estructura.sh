project/
├── routes/
│   ├── authRoutes.js          # Rutas de autenticación
│   ├── participantRoutes.js   # Rutas de participantes
│   └── adminRoutes.js         # Rutas de administrador
├── controllers/
│   ├── authController.js      # Lógica de autenticación
│   ├── participantController.js
│   └── adminController.js
├── services/
│   ├── authService.js         # Lógica relacionada con usuarios y login
│   ├── participantService.js
│   └── adminService.js
├── middlewares/
│   └── authMiddleware.js      # Protección de rutas
├── views/
│   ├── partials/
│   ├── login/       # Página de inicio de sesión
│   ├── participants/
│   ├── admin/
│   └──  main.hbs    # Layout principal
├── public/
│   ├── css/                   # Archivos CSS
│   └── js/                    # Archivos JS
├── config/
│   └── database.js            # Configuración de PostgreSQL
├── .env                       # Variables de entorno (JWT_SECRET, etc.)
├── app.js                     # Configuración de Express
└── package.json
