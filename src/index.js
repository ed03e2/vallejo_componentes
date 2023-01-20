import React from 'react';
import ReactDOM from 'react-dom/client';
import styled  from 'styled-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <h1>Edgar arturo vallejo corral</h1>
    <Button as="a" href="https://utd.edu.mx/">Normal</Button>
    <Button as="a" href="https://www.facebook.com/edgar.vallejo.94064/" primary>Primary</Button>
     <Button as="a" href="https://github.com/ed03e2" primary>Primary</Button>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
