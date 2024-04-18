import { useState } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
	const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

	const [state, setState] = useState({ markdown: placeholder, editorMaximize: false, previewerMaximize: false });

	const handleEditorMaximize = () => {
		setState({ editorMaximize: !state.editorMaximize });
	}

	const handlePreviewerMaximize = () => {
		setState({ previewerMaximize: !state.previewerMaximize });
	}

	const handleChange = (e) => {
		setState({ markdown: e.target.value })
		//console.log(state.markdown);
	}

	const classes = state.editorMaximize
		? ['editorWrapper maximized', 'previewerWrapper hide', 'fa-solid fa-minimize']
		: state.previewerMaximize
			? ['editorWrapper hide', 'previewerWrapper maximized', 'fa-solid fa-minimize']
			: ['editorWrapper', 'previewerWrapper', 'fa-solid fa-maximize'];

	return (
		<>
			<div className={classes[0]}>
				<Toolbar icon={classes[2]} text="Editor" onClick={handleEditorMaximize} />
				<Editor markdown={state.markdown} onChange={handleChange} />
			</div>
			<div className={classes[1]}>
				<Toolbar icon={classes[2]} text="Previewer" onClick={handlePreviewerMaximize} />
				<Previewer convertedMarkdown={state.markdown} />
			</div>
		</>
	)
}

export default App
