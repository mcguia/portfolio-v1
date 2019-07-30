import React, { Fragment } from 'react';
import { GlobalStyle } from '@styles';

const Layout = ({ children }) => (
    <Fragment>
        <div id="root">
            <GlobalStyle />
            {children}
        </div>
    </Fragment>

);

export default Layout;
