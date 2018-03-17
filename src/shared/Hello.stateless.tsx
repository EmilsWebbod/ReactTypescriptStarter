
import * as React from 'react';
import {SFC} from 'react'

type Props = {
    header: string
    text: string
}

const Hello: SFC<Props> = ({header, text}) => (
    <div>
        <h1>{header}</h1>
        <p>{text}</p>
    </div>
);

export default Hello;