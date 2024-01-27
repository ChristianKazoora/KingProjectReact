import { useParams } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const ArtViewer = ({ artArray, id }) => {
  let navigate = useNavigate();
  const link = useParams()["*"];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-full place-content-center">
      <button
        onClick={goBack}
        className=" fixed z-30 top-[9%] left-[5%] border border-transparent  bg-blue-500 text-white px-4 py-2 mb-4 hover:text-white hover:bg-transparent   hover:border-[bg-blue-500]"
      >
        Back
      </button>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full z-20 bg-[#7763637b] "
        navigation={true}
        initialSlide={id}
        centeredSlides={true}
        modules={[Pagination, Navigation]}
      >
        {artArray.map((item) => (
          <SwiperSlide>
            <div className="h-full w-full flex relative  items-center justify-center ">
              {<img className="h-auto w-auto" src={item.item} alt="" />}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArtViewer;
