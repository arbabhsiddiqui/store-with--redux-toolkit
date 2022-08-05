import React, { Fragment } from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// bootstrap import
import { Image } from "react-bootstrap";

// images import
import aboutImage from "../../assets/image/about/about-us.jpg";
import team1 from "../../assets/image/about/team/team-1.png";
import team2 from "../../assets/image/about/team/team-2.png";
import team3 from "../../assets/image/about/team/team-3.png";
import team4 from "../../assets/image/about/team/team-4.png";
import team5 from "../../assets/image/about/team/team-5.png";
import team6 from "../../assets/image/about/team/team-6.png";
import globeFree from "../../assets/image/about/services/globe-free.png";
import lockFree from "../../assets/image/about/services/lock-free.png";
import qualityFree from "../../assets/image/about/services/quality-free.png";
import tagFree from "../../assets/image/about/services/tag-free.png";

const About = () => {
  const teamObj = [team1, team2, team3, team4, team5, team6];
  return (
    <Fragment>
      {/* <!-- banner-section  --> */}
      <div className="banner">
        <div className="overlay">
          <div className="text">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      {/* <!--main section-----> */}

      <main>
        {/* <!----------about-section---------------------------> */}
        <div className="about">
          <div className="image">
            <Image src={aboutImage} />
          </div>
          <div className="about-us">
            <h3>Who We Are</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              iste accusamus voluptatibus, esse fugit iure, dolore excepturi
              ipsam corrupti qui magni sit facere vero mollitia voluptate unde
              tempora recusandae possimus quia est. Aspernatur repellendus
              laudantium ipsam ipsum mollitia impedit atque libero distinctio
              tenetur facere error culpa corrupti quod inventore quo, blanditiis
              temporibus animi ab illo! Eveniet, explicabo facere. Dolorum,
              debitis delectus. Autem, esse repellat. Ipsa dicta repudiandae
              minus sint eum quam laborum ipsum numquam. Facere, quia
              voluptatibus. Illo deleniti cupiditate quae quisquam porro odio
              eos molestiae quaerat vitae. Provident eligendi, in corrupti
              minima at nostrum tempora maiores aliquam? Asperiores, sequi.
            </p>
          </div>
        </div>
        {/* <!----------our team-section---------------------------> */}

        <div className="our-team">
          <h5>A Few Words About</h5>
          <h2>Our Team</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis
            recusandae aspernatur vero alias voluptate ipsam accusantium porro,
            dicta rem optio similique beatae nesciunt laboriosam voluptates
            itaque rerum harum tempora quis velit. Quod repellat expedita
            asperiores quibusdam a reiciendis nihil.
          </p>

          <div className="brand-layout container">
            <div className="glide" id="glide2">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 3000 }}
                  >
                    {teamObj.map((team, i) => {
                      i++;
                      return (
                        <SwiperSlide key={i}>
                          <Image src={team} alt="" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  {/* <li className="glide__slide">
                    <Image src={team1} />
                    <h4 className="card-title">Harvey Spector</h4>
                    <p className="designation">Founder - CEO</p>
                  </li>
                  <li className="glide__slide">
                    <Image src={team2} />
                    <h4 className="card-title">Harvey Spector</h4>
                    <p className="designation">Founder - CEO</p>
                  </li>
                  <li className="glide__slide">
                    <Image src={team3} />
                    <h4 className="card-title">Harvey Spector</h4>
                    <p className="designation">Founder - CEO</p>
                  </li>
                  <li className="glide__slide">
                    <Image src={team4} />
                    <h4 className="card-title">Harvey Spector</h4>
                    <p className="designation">Founder - CEO</p>
                  </li>
                  <li className="glide__slide">
                    <Image src={team5} />
                    <h4 className="card-title">Harvey Spector</h4>
                    <p className="designation">Founder - CEO</p>
                  </li>
                  <li className="glide__slide">
                    <Image src={team6} />
                    <h4 className="card-title">Harvey Spector</h4>
                    <p className="designation">Founder - CEO</p>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!---------------follow us section----------------------> */}

        <div className="follow">
          <div className="overlay">
            <div className="col-1"></div>
            <div className="col-2">
              <div className="border"></div>
              <h1>Follow Us</h1>
              <div className="social-icons">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>

        <div className="services">
          <div className="card">
            <Image src={globeFree} />
            <h4>Worldwide Shipping</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
          <div className="card">
            <Image src={lockFree} />
            <h4>Secure Payments</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
          <div className="card">
            <Image src={qualityFree} />
            <h4>Best Quality</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
          <div className="card">
            <Image src={tagFree} />
            <h4>Best Offers</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default About;
