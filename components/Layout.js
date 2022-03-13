import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './footer';

const Layout = ({children}) => {
    
    return (
        <>
            <Head>
                <title>Web Projects | Juan Alberto</title>
            </Head>
            <Header/>
            <div className="bg-[#4F4287] min-h-screen">
                <div className="container mx-auto">
                    {children}
                </div>
            </div>

            <Footer/>
        </>
    );

}

export default Layout;