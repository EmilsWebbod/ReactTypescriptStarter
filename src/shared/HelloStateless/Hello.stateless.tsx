
import * as React from 'react';
import {SFC} from 'react'
const styles = require('./Hello.stateless.scss');

type Props = {
    header: string
    text: string
}

const Hello: SFC<Props> = ({header, text}) => (
    <div className={styles.Hello}>
        <h1>{header}</h1>
        <p>{text}</p>
    </div>
);

export default Hello;