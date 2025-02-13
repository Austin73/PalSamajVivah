import React from "react";
import aboutImage from "./fimages/about2.png";

const About = () => {
  return (
    <>
      <section id="about" class="about">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img
                src={aboutImage}
                class="img-fluid"
                alt=""
                data-aos="zoom-in"
              />
            </div>
            <div class="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">हमें क्यों चुनें??</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                पाल समाज विवाह यहाँ है ताकि आप उन लोगों से जुड़ सकें जो भी सच्चे
                प्यार और साथी की तलाश में हैं।
              </p>
              <div class="row">
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <i class="bx bx-receipt"></i>
                  <h4>सर्वश्रेष्ठ प्रोफाइल्स</h4>
                  <p>
                    {" "}
                    चिंता न करें, हमारी सत्यापन प्रक्रिया हमारे प्लेटफ़ॉर्म पर
                    हर प्रोफ़ाइल की प्रामाणिकता को सुनिश्चित करती है।
                  </p>
                </div>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <i class="bx bx-cube-alt"></i>
                  <h4>सफलता की कहानियाँ:</h4>
                  <p>
                    उन अनगिनत लोगों में शामिल हों जिन्होंने पाल समाज विवाह के
                    जरिए अपना जीवनसाथी पाया है। दिल को छू लेने वाली सफल प्रेम
                    कहानियाँ पढ़ें जो आशा जगाती हैं।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
