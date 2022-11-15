import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
    language: string,
    children: string
}

const Code = ({ language, children } : Props) => (
    <SyntaxHighlighter language={ language } style={ dracula } showLineNumbers={true} wrapLines={true}>
        { children }
    </SyntaxHighlighter>
);

export default Code;