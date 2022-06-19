import { useEffect, useState } from 'react';
import propaganda01 from '../images/propaganda01.webp'
import propaganda02 from '../images/propaganda02.webp'
import propaganda03 from '../images/propaganda03.webp'
import propaganda04 from '../images/propaganda04.webp'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const featuredProducts = [
    propaganda01, 
    propaganda02, 
    propaganda03,
    propaganda04,
];

let count = 0

export function SlideProducts() {

    const [currentIndex, setCurrentIndex ] = useState(0)

    useEffect(() => {
        startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 5000)
    }

    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
    }

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-10">
          <div className="w-full relative select-none">
            <div className='aspect-auto flex justify-center'>
                <img src={featuredProducts[currentIndex]} alt="" />
            </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start">
                <button onClick={handleOnPrevClick}><MdArrowBackIosNew className='text-5xl p-2 text-orange-500 rounded-full bg-zinc-100 backdrop-blur-3xl' /></button>
                <button onClick={handleOnNextClick}><MdArrowForwardIos className='text-5xl p-2 text-orange-500 rounded-full bg-zinc-100 backdrop-blur-3xl' /></button>
            </div>
          </div>
        </div>
      );
}