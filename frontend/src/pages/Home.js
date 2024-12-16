import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";
import RegisterForm from "../components/registerForm";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const client = createClient("tGQuBdTutDCwbczh2FGcpmG3ju86qKTHMMhUqjATQ9teiarKjU9MgX8i");
      const query = "Basketball";
      try {
        const photos = await client.photos.search({ query, per_page: 5 });
        setImages(photos.photos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to NBA Compare</h1>
        <p className="hero-subtitle">
          Dive into the world of basketball and compare NBA players and teams
          across generations.
        </p>
      </header>

      <section className="content-grid">
        <div className="content-box top-box">
          <h2>Player Stats</h2>
          <p>Compare key performance stats of your favorite players.</p>
        </div>
        <div className="content-box middle-box">
          <h2>Matchup Analysis</h2>
          <p>See head-to-head comparisons between iconic players.</p>
        </div>
        <div className="content-box bottom-box">
          <h2>Join Our Community</h2>
          <p>Register now to create your personalized comparison lists.</p>
        </div>
      </section>

      <section className="image-gallery">
        <h2>Basketball Moments</h2>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.src.original}
                alt={image.alt || "Basketball moment"}
                className="image-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="register-section">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Home;
