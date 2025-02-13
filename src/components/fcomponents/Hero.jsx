import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>अपने जीवनभर की खुशियों के लिए अपना परफेक्ट साथी खोजें</h1>
              <h2>
                क्या आप अपने जीवनसाथी को पाने के अगले कदम के लिए तैयार हैं?
              </h2>
              <div>
                <Link to="/signup" class="btn-get-started scrollto">
                  आज ही पंजीकरण करें
                </Link>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img">
              <img src="" class="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
