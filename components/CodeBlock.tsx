import SyntaxHighlighter from 'react-syntax-highlighter'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CodeBlock = ({ children }: any) => {

    return (<div className='flex justify-between items-center '>
        <SyntaxHighlighter language="python">
            {children}
        </SyntaxHighlighter>
        <CopyToClipboard text={children} className=" px-4 py-2 textinput mb-2">
            <button>Copy Code</button>
        </CopyToClipboard>

    </div>)
}

export default CodeBlock 