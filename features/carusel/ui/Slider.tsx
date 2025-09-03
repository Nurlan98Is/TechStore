import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ReactNode } from "react";

interface SliderProps {
    children: ReactNode | ReactNode[];
}

export default ({ children }: SliderProps) => {
    // Преобразуем children в массив, если это не массив
    const slides = Array.isArray(children) ? children : [children];

    return (
        <div className="max-w-[337px] mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};