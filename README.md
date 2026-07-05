# 🎲 Random Number Generator

A simple and interactive Random Number Generator built using React.  
This project demonstrates React state management, event handling, and conditional rendering using the `useState` hook.

## 🚀 Live Demo

https://random-number-generator-black-seven.vercel.app/

## ✨ Features

- Generates a random number between 1 and 100
- Updates the displayed number instantly
- Generates a new random number on each button click
- Displays a placeholder message before the first number is generated
- Uses conditional rendering to dynamically update the UI
- Simple and user-friendly interface

## 🛠️ Technologies Used

- React
- JavaScript
- HTML
- CSS
- React `useState` Hook

## 🧠 Concepts Practiced

- React Functional Components
- State Management with `useState`
- Event Handling with `onClick`
- Conditional Rendering
- Dynamic UI Updates
- Random Number Generation using `Math.random()`

## ⚙️ How It Works

1. Initially, the application displays a placeholder message:
   `No numbers generated yet`

2. When the user clicks the **Generate Number** button, a random number between 1 and 100 is generated.

3. The generated number is stored in React state using the `useState` hook.

4. React automatically re-renders the component and displays the new number.

5. The placeholder message disappears after the first number is generated.

## 📂 Project Structure

```text
src/
├── Random.js
├── index.js
└── index.css
