import React from 'react';
import ReactDOM from 'react-dom/client';


const something=(
  <div>
  <h1>hello</h1>
  <h2>I'm using JSX</h2>
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(something);
