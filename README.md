# auth-service

architech for auth services
<!-- auth-service/
├── src/
│   ├── config/          # DB config, Kafka config, ENV
│   ├── controllers/     # Request handlers (login, register)
│   ├── routes/          # Route files
│   ├── models/          # Mongoose schemas
│   ├── services/        # Business logic
│   ├── events/          # Kafka producers & consumers
│   │   ├── producers/
│   │   └── consumers/
│   ├── middlewares/     # JWT verify, error handlers
│   └── index.js         # Entry point
├── .env
├── .gitignore
├── package.json
└── README.md -->



[ Client App / React Native ]
↓
[ API Gateway ]
↓
┌───────────┬────────────┬────────────┐
│           │            │            │
│ Auth Svc  │ User Svc   │ Leave Svc  │  ← All Node.js
│ MongoDB   │ MySQL      │ MySQL      │
│ Kafka Pub │ Kafka Sub  │ Kafka Sub  │
└───────────┴────────────┴────────────┘



/HRWORLD
│
├── auth_service/       --> JWT auth, login, register
├── user_service/       --> Profile data, user CRUD
├── employee_service/   --> Employee management
├── leave_service/      --> Leave requests and approval
├── notification_service/ --> Optional, kafka/email/SMS
├── api_gateway/        --> Reverse proxy + route manager
└── common/             --> Shared libs (e.g. logger, middlewares)
