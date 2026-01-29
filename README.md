
#  AdTech Quiz Web App

An interactive quiz-based web application built to assess and reinforce knowledge from **The AdTech Book**.  
This app delivers a smooth, engaging quiz experience with real-time progress tracking and a clear results summary.

Designed as part of an internship project, the application focuses on clean UI, modular architecture, and scalable frontend practices.

---

##  Features

-  Elegant landing page with quiz overview and call-to-action
-  One-question-at-a-time quiz flow
- Real-time progress tracking
-  Immediate answer validation
-  Results summary after quiz completion
-  Reusable and modular React components
-  Fast development and build performance using Vite
-  Fully type-safe implementation using TypeScript

---

##  Tech Stack

- **Frontend Framework:** React  
- **Language:** TypeScript  
- **Build Tool:** Vite  
- **Styling:** CSS  
- **Package Manager:** npm  

---


## Folder Structure

```text
AdTech-QuizApp-C1XIntern/
├── components/
│   ├── AboutUs.tsx
│   ├── Button.tsx
│   ├── Landing.tsx
│   ├── Layout.tsx
│   ├── Quiz.tsx
│   └── Results.tsx
│
├── data/
│   └── questions.ts
│
├── public/
│
├── App.tsx
├── index.html
├── index.tsx
├── index.css
│
├── metadata.json
├── types.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
````

---

## Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/lavanitha/AdTech-QuizApp-C1XIntern.git

# Navigate to the project directory
cd AdTech-QuizApp-C1XIntern

# Install dependencies
npm install

# Start the development server
npm run dev
````

---

## Quiz Logic Overview

- Questions are sourced from `data/questions.ts`
- Each question supports multiple-choice options
- User selections are validated instantly
- Quiz progress is tracked internally
- Final score and performance summary are displayed upon completion

---

##  Project Purpose

This project was developed to:

- Demonstrate practical React + TypeScript skills
- Apply modular component-based design
- Build a real-world quiz engine
- Create a clean, readable, and scalable frontend codebase
- Showcase internship-level production readiness

---

##  Author

**Mary Lavanitha Sunder**  
Frontend Developer | Intern  
GitHub: https://github.com/lavanitha

---

##  License

This project is for educational and internship demonstration purposes.




