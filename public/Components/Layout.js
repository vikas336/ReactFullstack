import React from 'react';
import Header from './header';

const Layout = props => ({
    render() {
        return (
            <div>
                <Header />
                <section>{props.children}</section>
            </div>
        );
    }
});

export default Layout;