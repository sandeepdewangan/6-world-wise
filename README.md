# React

### Installation

`npm create vite@4`
or
`npm create vite@latest`

### React Router

`npm i react-router-dom@6`

### URL for State Management

www.abc.com/app/cities/raipur?lat=32&lng=52

`/app/cities` -> path
`/raipur` -> params
`?lat=32&lng=52` -> query string

### Context API

STEP 01: Create a context. `createContext()`

STEP 02: Provide value to child component. <ContextName.Provider value={}/>

STEP 03: Consume the context value. `useContext(ContextName)`
