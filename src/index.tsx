import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


//yarn create react-app web --template typescript
//yarn start
//delete o readme.md, app.css, index.css, app.test.tsx, logo.svg, serviceWorker.ts, setupTests.ts
//delete da pasta public: tudo menos o index
//
//yarn add react-router-dom
//yarn add @types/react-router-dom -D
//sugestão: react-select para estilizar os campos tipo select
//yarn add axios

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

