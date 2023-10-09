import { BsWhatsapp } from 'react-icons/bs'
import hospital from '../../assets/images/hospital.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hospital = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className='flex my-12 px-3 gap-5 flex-col md:flex-row max-w-5xl mx-auto items-center'>
            <img src={hospital} alt="" className='w-1/2' data-aos="flip-right" data-aos-duration="2000"/>
            <div className='' data-aos="fade-left" data-aos-duration="2000">
                <h1 className='text-2xl font-semibold'>Pelayanan terbaik dari parah Ahli Medis</h1>
                <p className='text-[#6C87AE] text-sm'>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <button className="btn mt-6 px-16 bg-gradient-to-r from-[#3A8EF6]  to-[#6F3AFA] text-white rounded-full"> <BsWhatsapp /> Reserve</button>
            </div>
        </div>
    );
};

export default Hospital;