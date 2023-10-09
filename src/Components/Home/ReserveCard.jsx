import card1 from '../../assets/images/card-1.svg'
import card2 from '../../assets/images/card-2.svg'
import card3 from '../../assets/images/card-3.svg'
import {BsWhatsapp} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const ReserveCard = () => {

    useEffect(()=>{
        AOS.init()
    },[])

    return (
        <div className='max-w-5xl mx-auto my-8'>
            <div className='flex justify-center gap-5 '>
                <h1 className='text-3xl font-semibold w-full'>Daftar Layanan</h1>
                <p className='text-sm text-[#6C87AE]'>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
            </div>
            {/* Card */}
            <div  className='grid px-5  grid-cols-1 md:grid-cols-3 gap-5 my-12' data-aos='fade-up' data-aos-duration="2000">
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={card1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Apotek 24 Jam</h2>
                        <p className='text-sm text-[#6C87AE]'>Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
                        <div className="card-actions justify-start">
                            <button className="btn px-16 bg-gradient-to-r from-[#3A8EF6]  to-[#6F3AFA] text-white rounded-full"> <BsWhatsapp/> Reserve</button>
                        </div>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={card2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Medical Check</h2>
                        <p className='text-sm text-[#6C87AE]'>Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
                        <div className="card-actions justify-start">
                            <button className="btn px-16 bg-gradient-to-r from-[#3A8EF6]  to-[#6F3AFA] text-white rounded-full"> <BsWhatsapp/> Reserve</button>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={card3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Professional Doctor</h2>
                        <p className='text-sm text-[#6C87AE]'>Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis</p>
                        <div className="card-actions justify-start">
                            <button className="btn px-16 bg-gradient-to-r from-[#3A8EF6]  to-[#6F3AFA] text-white rounded-full"> <BsWhatsapp/> Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReserveCard;