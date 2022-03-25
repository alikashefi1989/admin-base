import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";


function ValidLayout(props: any) {
    return (
        <>
            <Header />
            {
                props.children
            }
            <Footer />
        </>
    )
}

export default ValidLayout
