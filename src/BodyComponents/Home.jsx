// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import banner1 from '../assets/1.jpg';
import banner2 from '../assets/2.jpg';
import banner3 from '../assets/3.jpg';
import banner4 from '../assets/4.jpg';
import banner5 from '../assets/5.jpg';
import 'animate.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';






const Home = () => {

    const cards = useLoaderData();
    console.log(cards)
    return (
   <div className='mx-12'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           <SwiperSlide className='text-center'>
        <div className='flex justify-center align-middle absolute'>
            <img className='w-11/12  rounded-xl drop-shadow-lg' src={banner1} alt="" />
        </div>
        <div className=' relative top-32 right-72'>
            <p className='animate__animated animate__bounceInLeft text-5xl text-slate-900 font-serif font-semibold mb-4'>Elysian</p>
            <p className='animate__animated animate__bounceInRight text-xl text-slate-600 font-bold'><i>From House to Home, We're with You.</i></p>
        <p className='animate__animated animate__bounceInLeft text-xs text-slate-600 font-bold m-5'>Guiding clients to their dream homes <br />  with personalized service, trust, and expertise—making<br />  every step from search to move seamless</p>
        </div>
        
      </SwiperSlide>
    <SwiperSlide className='text-center'>
        <div className='flex justify-center align-middle '>
            <img className='w-11/12  rounded-xl drop-shadow-lg' src={banner2} alt="" />
        </div>
        
      </SwiperSlide>
      <SwiperSlide className='text-center'>
        <div className='flex justify-center align-middle'>
            <img className='w-10/12  rounded-xl drop-shadow-lg' src={banner3} alt="" />
        </div>
        
      </SwiperSlide>
      <SwiperSlide className='text-center'>
        <div className='flex justify-center align-middle'>
            <img className='w-10/12  rounded-xl drop-shadow-lg' src={banner4} alt="" />
        </div>
        
      </SwiperSlide>
      <SwiperSlide className='text-center'>
        <div className='flex justify-center align-middle'>
            <img className='w-10/12  rounded-xl drop-shadow-lg' src={banner5} alt="" />
        </div>
        
      </SwiperSlide>
      </Swiper>


<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 mx-auto'>
{
    cards.map(card=><Cards card={card}  ></Cards>)
}
   
</div>

   </div>
    );
};

export default Home;