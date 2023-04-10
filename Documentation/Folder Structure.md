# Folder Structure

The SoundHive application has the following folder structure:

```kotlin
SoundHive/
├── public/
│   ├── index.html
│   ├── logo192.png
│   └── logo512.png
│
├── src/
│   ├── assets/
│   │   └── images/
│   ├── constant/
│   │   └── ErrorCodes
│   ├── components/
│   │   ├── auth/
│   │   │   ├── ForgotPassword/
│   │   │   ├── LoginForm/
│   │   │   ├── RegisterForm/
│   │   │   ├── ResetPassword/
│   │   │   └── VerificationForm/
│   │   ├── profile/
│   │   ├── search/
│   │   ├── space/
│   │   ├── SpaceCreationForm/
│   │   └── Toolbar/
│   ├── pages/
│   │   ├── errors/
│   │   │   └── ErrorPage/
│   │   ├── public/
│   │   │   ├── LandingPage/
│   │   │   ├── LoginPage/
│   │   │   └── RegistrationPage/
│   │   └── private/
│   │       ├── Dashboard/
│   │       ├── UserProfile/
│   │       ├── SpaceCreationPage/
│   │       ├── SpacePage/
│   │       ├── SearchPage/
│   │       ├── OfflineSpacesPage/
│   │       ├── RoomPage/
│   │       ├── InvitePage/
│   │       └── ForgotPasswordPage/
│   ├── config/
│   │   └── firebase.js
│   ├── contexts/
│   ├── hooks/
│   ├── router/
│   │   └── routes.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   ├── utils/
│   └── App.js
│
├── package.json
├── README.md
└── index.js

```
