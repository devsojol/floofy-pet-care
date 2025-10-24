## Project Name : floofy  -Pet-care in winter


## Project Purpose
The main goal of this project is to create a user-friendly single-page web application where pet owners can find, view, and book winter care services for their pets.


## Live Site Link:
https://floofy-pet-care.web.app/


## Key Features

###  Home Page
- Beautiful hero slider (built with Swiper.js)
- Popular Winter Care Services displayed from JSON data
- Winter Care Tips for Pets (fake JSON data)
- Meet Our Expert Vets
- Customer feedBack section

### Authentication
- Firebase Authentication (Email/Password + Google Login)
- Signup / Login / Logout system
- Password validation:
  - At least 6 characters  
  - One uppercase letter  
  - One lowercase letter  
- Password toggle (eye icon)
- Forgot password feature (functional)

### Service Details Page
- Protected route (only visible if user logged in)
- Shows all service details
- “Book Now” form with Name & Email fields  
- On submit → success toast + form reset

### My Profile Page
- Displays user name, email, and photo  
- **Update Profile** button (updates name & photo using `updateProfile()`)

### Responsive Design
- Fully responsive for mobile, tablet, and desktop
- Minimalist and modern design with soft animations

###  Functionality
- SPA behavior (no reload errors)
- Toast notifications for success and errors
- Firebase environment variables stored securely in `.env`


### NPM Packages Used
-  firebase
-  react-router-dom
-  react-toastify
-  swiper
-  framer motion
-  react-icons
-  tailwindcss
-  daisyui
-  Aos


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
