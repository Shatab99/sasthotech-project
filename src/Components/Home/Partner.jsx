import img1 from '../../assets/images/image1.jpg'
import img2 from '../../assets/images/image2.png'
import img3 from '../../assets/images/image3.png'
import img4 from '../../assets/images/image4.png'
import img5 from '../../assets/images/image5.png'

const Partner = () => {
    return (
        <div className='py-8 bg-[#E2EDFF;]'>
            <h1 className='text-3xl font-semibold text-center'>Partner & Friends</h1>
            <div className='flex flex-wrap justify-center gap-6 mt-5  '>
                <img src={img1} alt="" className='w-22 h-16'/>
                <img src={img2} alt="" className='w-22 h-16'/>
                <img src={img3} alt="" className='w-22 h-16'/>
                <img src={img4} alt="" className='w-22 h-16'/>
                <img src={img5} alt="" className='w-22 h-16'/>

            </div>
        </div>
    );
};

export default Partner;