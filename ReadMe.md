# Simple Todo App with React, Redux, and Tailwind CSS

## Overview
This is a simple Todo application built with **React** for the frontend, **Redux** for state management, and **Tailwind CSS** for styling. The app allows users to add, complete, and delete todos. It uses three Redux reducers to handle the following actions:
- **Add Todo**: Add a new todo item to the list.
- **Complete Todo**: Mark a todo item as completed.
- **Delete Todo**: Remove a todo item from the list.
``` js 
 reducers:{
    addTodo: (state, action) => {
      if(action.payload !== ''){
        state.items.push({
        id: Date.now(),
        Task: action.payload,
        completed: false
      })}
      
    },
    completeTodo: (state , action) =>{
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    DeleteTodo: (state , action)=>{
      state.items = state.items.filter(item=> item.id !== action.payload)
    }
  }
  ```

This project serves as a beginner-friendly introduction to using Redux for state management in a React application.

## Features
- Add new todos with a text input.
- Mark todos as completed.
- Delete todos from the list.
- Responsive design styled with Tailwind CSS.

## Technologies Used
- **React**: Frontend library for building the user interface.
- **Redux**: State management for handling todos.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript (ES6+)**: Core programming language.
- **HTML5**: Markup for the app structure.

 
 