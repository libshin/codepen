import { h, render } from "preact";

import babel from "./setupHL";

import Script from "./Script";

import "./index.css";

const scan = () =>
  [].forEach.call(document.querySelectorAll('script[type="text/react"]'), script => {
    let text = script.textContent;
    const split = text.match(/\n +/)[0];
    text = text.replace(new RegExp(split, "g"), "\n").trim();
    render(<Script text={text} />, script.parentNode, script);
  });

babel.onload = scan;

export default scan;
