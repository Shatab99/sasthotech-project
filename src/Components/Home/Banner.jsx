import doc from '../../assets/images/docfull.png'
import { FaUserDoctor } from 'react-icons/fa6'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='flex flex-col lg:flex-row items-center  bg-[#F2F7FF]'>
            <div className='px-8 mt-8' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine">
                <h1 className='text-5xl font-bold  bg-gradient-to-r from-[#3A8EF6]  to-[#6F3AFA] bg-clip-text text-transparent'>Klinik 24 siap melayani keluhan masyarakat selama 24/7.</h1>
                <p className='text-[#6C87AE] mt-3'>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <button className='btn mt-6 bg-gradient-to-r from-[#3A8EF6]  to-[#6F3AFA] text-white rounded-full'>
                    <FaUserDoctor /> Lihat Layanan</button>
            </div>
            <div className='relative'>
                <img src={doc} alt="" data-aos='flip-right'data-aos-duration="3000"/>

            </div>
        </div>
    );
};

export default Banner;