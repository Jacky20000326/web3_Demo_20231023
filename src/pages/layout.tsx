import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <h1>All Page Layout</h1>
            <div>{children}</div>
        </>
    );
};

export default Layout;
