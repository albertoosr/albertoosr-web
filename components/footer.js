import React from 'react';
import { AiFillGithub } from "react-icons/ai";


const Footer = () => {

    return (
        <footer className="bg-[#DC4062] sm:bg-[#40366d]">
            <div className="grid lg:grid-cols-2 gap-1 text-center p-2 pt-7 pb-7">
                <div className="text-gray-50">
                    <a href="https://www.instagram.com/alberto_osr" className="font-bold uppercase">Juan Alberto</a>
                    <label className="block font-bold uppercase text-xs mt-2">&lt; Web developer &frasl; &gt;</label>
                </div>

                <div className="text-gray-50">
                    <a href="https://www.instagram.com/alberto_osr" className="font-bold" target="blank"> @albertoosr</a>               
                </div>
            </div>
        </footer>
    );

}
/*<a href="https://github.com/albertoosr" className="block font-bold" target="_blank">GitHub: @albertoosr</a> */
export default Footer;