import React, { useState, useEffect } from 'react';

const carouselItems = [
    { id: 1, title: 'Slide 1', image: 'https://www.evnia.dk/wp-content/uploads/2023/01/We-are-Hiring.jpg' },
    { id: 2, title: 'Slide 2', image: 'https://i.pinimg.com/originals/bb/48/2d/bb482d661fde753a3a44e4a88dd11487.jpg' },
    { id: 3, title: 'Slide 3', image: 'https://images6.alphacoders.com/797/thumb-1920-797137.jpg' },
];

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change image every 5 seconds (5000ms)
        return () => clearInterval(interval);
    }, [currentIndex]);


    return (
        <div className="relative">
            <div className="h-48 overflow-hidden relative">
                <div
                    className="absolute h-full w-full flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {carouselItems.map((item, index) => (
                        <div key={item.id} className="w-full h-full flex-shrink-0 relative">
                            <div className="w-full h-full relative group">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-lg"
                                    style={{ minWidth: '1068px', minHeight: '192px', objectFit: 'cover' }}
                                />
                                <div
                                    // className="absolute top-1 bottom-0 left-0 w-full bg-sky-700 bg-opacity-25 py-2 px- text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center w-32"
                                    // style={{ height: '20%', borderRadius: '0 0 10px 10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                                >
                                    {/* <h2 className="text-xl font-bold">{item.title}</h2> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                        className="text-white text-2xl px-4 py-2 rounded-l-lg hover:text-sky-700 hover:text-2xl transform scale-110 transition-all duration-300 group"
                        onClick={prevSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                        className="text-white text-2xl px-4 py-2 rounded-r-lg hover:text-sky-700 hover:text-2xl transform scale-110 transition-all duration-300 group"
                        onClick={nextSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-5 absolute w-full bottom-1">
                {carouselItems.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-sky-700 shadow-sky-300' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                        onMouseEnter={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};
