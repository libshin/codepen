import { h, Component } from "preact";

import Icon from "./Icon";

const highlight = ref => {
  if (ref) {
    hljs.highlightBlock(ref);
  }
};

let i = 0;

class Script extends Component {
  constructor(props) {
    super(props);

    this.i = i++;
    this.state = { open: false };

    this.onChange = this.onChange.bind(this);
    const text = `(() => {
    const root = document.getElementById('root_${this.i}');
    ${this.props.text}

    ReactDOM.render(<App />, root);
    })()`;

    this.text = Babel.transform(text, { presets: ["react", "es2015"] }).code;
  }

  onChange() {
    this.setState(({ open }) => ({ open: !open }));
  }

  render({ text }, { open }) {
    return (
      <div className="script_block">
        <div style={{ textAlign: "right" }}>
          <button
            type="button"
            aria-label="show source"
            onClick={this.onChange}
            style={{
              background: "none",
              border: "none",
              margin: ".5em",
              padding: ".5em"
            }}
          >
            <Icon color={open ? "rgb(77, 144, 254)" : "black"} />
          </button>
        </div>

        <div
          id={`root_${this.i}`}
          style={{
            padding: "1em",
            paddigTop: 0
          }}
        />
        <script type="text/javascript">{this.text}</script>
        {open && <h4 className="script_header">Source code</h4>}
        {open && (
          <pre style={{ margin: 0 }}>
            <code className="javascript" ref={highlight}>
              {text}
            </code>
          </pre>
        )}
      </div>
    );
  }
}

export default Script;
