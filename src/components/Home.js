import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

import '../Home.css';

const Home = () => {

  return (
    <div name='home' className='w-full h-screen'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<div className='backImg'></div>
    <p className='text-pink-600'>Hi, my name is</p>
      </div>
    </div>
  )
}

export default Home;