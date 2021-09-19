# Convention Guide

## Structure

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

```bash
.
├── pages
│   ├── api
│   │   └── todos
│   └── posts
├── public
├── src
│   ├── @types // the types folder for data, we use *.d.ts files to organize types
│   ├── __mocks__
│   ├── components
│   │   ├── general // Has the re-useable component
│   │   ├── hoc // the hight order component
│   │   └── layout // Has the the layout component likes: navbar, footer...etc
│   │       └── container
│   ├── helpers
│   ├── lib
│   ├── services
│   │   └── api // where store api
│   └── views // each folder in view folder is view for pages folder above
│       └── home // has the the *.module.scss only
│           └── todoList
│               ├── editTodo
│               └── form
└── styles // has the style like global, variable...etc for all the part of the app
```

## Features

### How to write the module css

Each child folder in views folder has the **.module.scss** file only, because is css for that pages. But in case the single view has many part and css of each part is not related to the other, we can sperate each folder one **.module.scss** file

### Ogranizing the types

We use the ```.d.ts``` file with namespace to ogranize types. Each the data in the app has specific file
.In a file has 2 namespace. Each namespace for specific case:

- Types enscapsulation
- Types for the api

### Try catch the request error

I already write the **lib/axios** to handle the global error

```ts
try {
  // some request
} catch (error) {
  error.handleGlobally();
}
```

When you dont want to globaly handle all case

```ts
try {
  // some request
} catch (error) {
  if (error.response?.status === 404) {
    // log or toast something
  } else {
    error.handleGlobally();
  }
}
```

### Helpers

- appendQuery: pass a object and url, the func will append the the key and value acting like a query to the end of your url
- local starge: a class expose funtions to handle the local storage

## Scripts

```ts
// start the dev server
"dev": "next dev",
// build
"build": "next build",
// start build
"start": "next start",
// linter all project ignore node modules
"lint": "eslint \"**/*.{ts,tsx}\" --ignore-pattern node_modules/",
// gen types for env and env.example file base from file .env 
"gen-env-example": "npx gen-env-types .env.local -o src/@types/env.d.ts -e ."
```

## Coding styles

- One component can be readable when the component has 100-150 lines only
- Components was sparated from the parent component and it not re-useable, must write im same place with parent folder
- Writing the js doc in the re-useable component and helper function
- Do not use the ```export default``` pattern
- Type will be used define for the variable and props only. A interface will be used for class only
- Type will be naming like ```TPost, TTodo```, a interface is ```IPost, ITodo```
- Hook or class, only once of them will be existed in the project
- Avoid using the props is the state for child component
- Using the path in ```tsconfig.json```

> Copyright © 2021 @mason_nguyen
