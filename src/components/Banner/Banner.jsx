import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920",
      title: "Discover Amazing Movies",
      description: "Explore our vast collection of films across all genres",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920",
      title: "Share Your Favorites",
      description: "Create your personal collection of favorite movies",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1920",
      title: "Join Our Community",
      description: "Connect with other movie enthusiasts",
    },
  ];

  return (
    <div>
      <div className="w-full h-[300px] lg:h-[500px] pt-8 lg:pt-12 z-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="h-full"
        >
          {slides.map((singleData, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full flex items-center justify-center">
                <div
                  className="w-full h-full rounded-xl flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${singleData?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "center",
                    backgroundAttachment: "fixed",
                    backgroundClip: "border-box",
                    backgroundBlendMode: "overlay",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
                    <div className="max-w-3xl">
                      <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                        {singleData.title}
                      </h1>
                      <p className="text-lg lg:text-xl mb-8">
                        {singleData.description}
                      </p>
                      <Link to="/movies" className="hidden lg:block">
                        <button className="btn bg-indigo-600 hover:bg-indigo-600 flex items-center text-white">
                          <FaArrowRight />
                          Explore Movies
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
