import React from 'react';
import Layout from '../components/Layout';

const Index = () => {
    return (
      <Layout>
         <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-2">
                <div className="p-10 lg:p-24 lg:mt-32">          
                  <h2 className="text-3xl lg:text-6xl text-gray-50">
                    Mantenimiento de la <span className="text-[#DC4062]"> página Web </span>
                  </h2>
                  <p className="text-white mt-7 text-justify text-lg md:text-xl">
                    Hello, I appreciate your visit to my website but at the moment I am making improvements, 
                    you can contact me on <span className="font-bold text-[#DC4062]"> <a href="https://www.instagram.com/alberto_osr" target="blank"> my instagram account </a></span> , I leave it at the bottom :)
                  </p>
                  <p className="uppercase text-white mt-5">Thanks!</p>
                </div>
                <div className="flex items-end justify-center w-auto">
                   <img className="lg:mb-12 w-auto" src="./404.png"></img>
                </div>
            </div>
         </div>
      </Layout>
    ); 
}
/*p-24 mt-44*/
export default Index;