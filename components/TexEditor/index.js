import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

const TextEditor = () => {
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
      );

    const editor = React.useRef(null);
 
    function focusEditor() {
        editor.current.focus();
    }
 
    React.useEffect(() => {
        focusEditor()
    }, []);

    return (
        <div onClick={focusEditor} className="m-10">
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={editorState => setEditorState(editorState)}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
        </div>
    )
}

export default TextEditor