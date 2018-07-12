let i;
let babel;
const setup = () => {
  const highlightJS = document.createElement("script");
  highlightJS.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js");
  document.body.appendChild(highlightJS);
  const highlightCSS = document.createElement("link");
  highlightCSS.setAttribute("rel", "stylesheet");
  highlightCSS.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/vs.min.css");
  document.head.appendChild(highlightCSS);
  babel = document.createElement("script");
  babel.setAttribute("src", "https://unpkg.com/babel-standalone@6/babel.min.js");
  document.body.appendChild(babel);
  i = true;
};

if (!i) {
  setup();
}

export default babel;
