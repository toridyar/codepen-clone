import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-themes-all";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";

export default function Editor({ language, displayName, value, onChange }) {
  const handleChange = (value, viewUpdate) => {
    onChange(value);
  };
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
      </div>
      <CodeMirror
        height="200px"
        theme={dracula}
        extensions={[javascript({ jsx: true })]}
        onChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
      />
    </div>
  );
}
