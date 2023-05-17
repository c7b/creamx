import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

  /*
  Add in case of extra checks for potential problems in your app during development
  Verifying that components within it do not use any deprecated lifecycle methods.
Checking for unexpected side effects during the rendering phase, such as state mutations.
Warning about legacy string ref API usage.
Detecting whether unexpected component state updates occur.
And more.

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  

  However it remove lcoalstorage for the app
  */
)
