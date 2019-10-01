import React from "react";
import styled from 'reshadow'

import './App.css';

const Button = ({size, children, ...props}) => styled`
@import "./variables.css";

button {
    font-size: 16px;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 20px;
    border: 2px solid;
    color: rebeccapurple;
    background: var(--coral);
}

button[|size='s'] {
  font-size: 12px;
}

button[disabled] {
    cursor: not-allowed;
    opacity: 1;

    & buttonText {
          pointer-events: none;
  }
}
`(
    <button {...props} use:size={size}>
        <buttonText as="span">{children}</buttonText>
    </button>
);

export function App() {
    return <div>Hi
        <Button size='s'>click me 2</Button>
    </div>
}
