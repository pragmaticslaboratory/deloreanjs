import React from 'react';

const Layout = (props) => {
    return (
        <div className="layout-container">
            {props.children}
        </div>
    )
}

export default Layout;