import facilities from '../../assets/images/facilities.png';
import { BsWhatsapp } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Facilites = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className='px-6 md:px-0'>
            <div className='my-12 flex flex-col-reverse md:flex-row max-w-5xl mx-auto items-center gap-5'>
                <div data-aos='fade-right' data-aos-duration="2000">
                    <h3 class="text-3xl font-semibold ">Fasilitas Mewah yang memanusiakan manusia</h3>
                    <p className='text-sm text-[#6C87AE] mt-4'>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                    <button className="btn px-16 bg-gradient-to-r from-[#3A8EF6] mt-6  to-[#6F3AFA] text-white rounded-full"> <BsWhatsapp /> Reserve</button>
                </div>
                <img src={facilities} alt="" className='w-1/2' data-aos='flip-left' data-aos-duration="2000"/>
            </div>
            <div className='text-center max-w-4xl mx-auto bg-gradient-to-r from-[#3A8EF6] my-12 p-16  to-[#6F3AFA] text-white rounded-3xl' data-aos='fade-up'>
                <h1 className='text-4xl font-bold'>Reservasi Pelayanan kami sekarang</h1>
                <p className='text-sm text-[#FFFFFFCC] mt-4'>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <div className='mt-5 flex flex-col md:flex-row justify-center gap-4 '>
                    <button className="btn btn-outline text-white border-white rounded-full"><SlCalender /> Cek Jadwal Dokter</button>
                    <button className="btn  px-16 bg-white text-[#3A8EF6] rounded-full"> <BsWhatsapp/> Reserve</button>
                </div>
            </div>
        </div>
    );
};

export default Facilites;