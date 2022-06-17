import React from "react";
import { Board } from "./Board";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/home-page.css";
import { ImportantLink } from "./ImportantLink";
export const Home = () => {
  return (
    <div className="pb-5">
      {/* ============================= Slider Section Start ============================ */}
      <div>
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
        >
          <SwiperSlide>
            <img
              src={require("../../assets/images/img1.JPG")}
              className="img-fluid"
              loading="lazy"
              alt="images_1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/images/img2.JPG")}
              className="img-fluid"
              loading="lazy"
              alt="images_1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/images/img3.JPG")}
              className="img-fluid"
              loading="lazy"
              alt="images_1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/images/img4.JPG")}
              className="img-fluid"
              loading="lazy"
              alt="images_1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/images/img5.JPG")}
              className="img-fluid"
              loading="lazy"
              alt="images_1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../../assets/images/img6.JPG")}
              className="img-fluid"
              loading="lazy"
              alt="images_1"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ============================= Slider Section End ============================== */}

      {/* ============================= Information Section Start ======================= */}
      <div className="container mt-5">
        <h3 className="text-center fw-bold orange-text-color">
          Information Section
        </h3>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Board heading="Notice Board"></Board>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ImportantLink heading="Important Links"></ImportantLink>
          </div>
        </div>
        <hr className="mt-5 orange-bg-color" />
      </div>
      {/* ============================= Information Section End ========================= */}

      {/* ============================= Founder Section Start ========================= */}

      <div className="container mt-5">
        <h3 className="text-center fw-bold orange-text-color">Founder</h3>
        <div className="row mt-4">
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center mb-3">
            <img
              src={require("../../assets/images/founder.JPG")}
              alt="principalimage"
              className="img-fluid img-thumbnail"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="col-lg-7 col-sm-12 d-flex align-items-center">
            <p className="text-justify">
              Shri Badan Singh Higher Secondary School was established in 1968
              by the renowned village head late Pandit Shri Nathuram Sharma Ji.
            </p>
          </div>
        </div>
        <hr className="mt-5 orange-bg-color" />
      </div>

      {/* ============================= Founder Section End =========================== */}

      {/* ============================= Vision Section Start ============================ */}
      <div className="container mt-5">
        <h3 className="text-center fw-bold orange-text-color">
          Vision & Mission
        </h3>
        <div className="col-12 mt-5">
          <p>
            <span className="fw-bold">Our Vision:</span>
            <br />
            <p className="text-justify">
              Our goal is to create well-rounded, self-assured, and responsible
              individuals who strive to reach their greatest potential. We will
              accomplish this by creating a welcoming, cheerful, safe, and
              supportive learning environment in which all students are treated
              equally and all accomplishments are recognised.
            </p>
          </p>
          <p>
            <span className="fw-bold">Our Mission:</span>
            <br />
            <p className="text-justify">
              Our Mission is to provide high quality education and childcare in
              a safe, respectful and inclusive environment that builds a
              foundation for life-long learning. Our focus is to provide a
              stimulating early learning and child care experience which
              promotes each child’s social/emotional, physical and cognitive
              development.
            </p>
          </p>
        </div>
        <hr className="mt-5 orange-bg-color" />
      </div>
      {/* ============================= Vision Section End ============================== */}

      {/* ============================= Gallery Section Start ============================== */}
      <div className="container mt-5">
        <h3 className="text-center fw-bold orange-text-color">
          Picture Gallery
        </h3>
        <div className="mt-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1800: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage1.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage2.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage3.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage4.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage5.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage6.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage7.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage8.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage9.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage10.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage11.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/images/galleryimage12.JPG")}
                className="img-fluid img-thumbnail"
                loading="lazy"
                alt="images_1"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* ============================= Gallery Section End ============================== */}
    </div>
  );
};
