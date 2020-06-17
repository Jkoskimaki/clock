Tools
Node 
yarn / npm 

create-react-app 
  // similar to rails new project
  // Boiler plate

  create-react-app my-app 
  npm init react-app my-app  // not as efficient as other package managers
  yarn create react-app my-app // more efficient with packages than npm

  Google Chrome
  // Chrome compatible with React
  // React dev tools, download

  React Dev Tools]
  // Need to have react website or react server running to see

  https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

  React provides a declarative API complete with state control/lifescycle methods to control the render flow

  Key principles:
    Declarative (different from object-oriented development)
    Composability
    One-way data flow
    Virtual DOM 
    State - Storage 
    Props - Properties passed down from parent/Child 
    Renders using JSX vs just HTML 
      JSX class name reserved name 
    Components have own state and own Props 


    Two different types of components:

    Logical (stateful component)
      do logic 
      state 
      lifecycle methods 
      class 


    Presentational (stateless component)
      basically just items you want to display on screen, e.g. logos


      Majority of work inside of src folder

        app.js 
        index.js 
        // Create additional files/folders inside the src folders

      ServiceWorker can load faster online ... mostly use for production-level code

      "index" file = highest-order level component ... renders first

      has listener file also so will keep running

      do "yarn start" to start server 

      don't use "eject", because will remove code/dependencies?

      Delete from "App.js" everything except:
      import react 
      export default App 

      every component needs to return some type of jsx 

      jsx only returns a single component at a time! needs to be in closing/grouping tag 
      ... e.g. use <div> tags to make closing/grouping tags


      State: can only use in logical components

      State - storage { users: [], firstName: ''}
        JS Object we can store properties in Component Storage 
        Component-wide storage (for storing values)
        When a value chnages in state, render is called 

      Look at Components using DevTools for debugging
      // Represents what state is at a given time


      Add new folder inside of components folder

      Props pass down information from reference to what you want it to be 

      Can delete node modules, because they take up a lot of space 
      to get back just run yarn 



      To Do List application:
      DOM structure 

      Index
         |
          App
         /   \
    TodoForm  List
                |
              ToDo   


    Housekeeping: 
    Remove serviceWorker.unregister();


    Higher-ordered components
    // Logic that is shared among components


    -----Notes from Henry!

    