import React from 'react';

const Alert = props => (
  <div className={"notification " + props.type}>
    <button onClick={() => props.setAlertVisible(false)} className="delete"></button>
    <ul>
      {
        props.messages.map((message, index) => <li key={index}>{message}</li>)
      }
    </ul>
  </div>
);

export default Alert;