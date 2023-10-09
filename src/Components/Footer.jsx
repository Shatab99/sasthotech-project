import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#0A0E31] text-white">
                <aside>
                    <h1 className='text-2xl font-semibold '>Sasthotech</h1>
                    <p className='text-[#FFFFFFCC]'>Jl. Lebak Bulus I Kav. 29 Cilandak <br />
                        Jakarta Selatan, DKI Jakarta, Indonesia 12340</p>
                </aside>
                <nav>
                    <header className="footer-title">Compane Info</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Cabang</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">+626564465455</a>
                    <a className="link link-hover">info@klinik24.com</a>
                    <a className="link link-hover">Telp: +5646544654</a>
                </nav>
                <hr  className='text-white my-2'/>
            </footer>
            <div className='bg-[#0A0E31]'>
                <hr />
                <p className='text-[#ffffCC] text-sm text-center py-3'>Copyright © Sasthotech 2023</p>
            </div>
        </div>
    );
};

export default Footer;