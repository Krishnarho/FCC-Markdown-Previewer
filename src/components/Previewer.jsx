import React from 'react'
import { marked } from 'marked';
//import Markdown from 'react-markdown'

function Previewer({ convertedMarkdown }) {
    marked.setOptions({
        breaks: true,
    });
    return (
        <div className='converted'
            dangerouslySetInnerHTML={{
                __html: marked(convertedMarkdown)
            }}
            id='preview'
        />
        //<div className='converted' id='preview'><Markdown remarkPlugins={[remarkGfm]}>{convertedMarkdown}</Markdown></div>
    )
}

export default Previewer