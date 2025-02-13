import React from "react";
import success1 from "./fimages/success1.jpg";
import success2 from "./fimages/success2.jpg";
import success3 from "./fimages/success3.jpg";
import success4 from "./fimages/sanika.jpg";
import success5 from "./fimages/success5.jpg";
import success6 from "./fimages/success6.jpg";

const Success = () => {
  return (
    <>
      <div className="container" id="success">
        <h1 className="text-center my-5">सफलता की कहानियाँ</h1>

        <div class="container text-center">
          <div class="row">
            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src={success1} alt="Card cap" />
                <div class="card-body">
                  <h5 class="card-title">Gopal & Surekha</h5>
                  <p>Thanks to perfect match for connecting us</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src={success2} alt="Card cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    राकेश पाल और रूबी पाल जमताल अमरपाटन से
                  </h5>
                  <p>मुझे मेरे जीवन के सच्चे प्यार से मिलाने के लिए धन्यवाद।</p>
                </div>
              </div>
            </div>

            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src={success3} alt="Card cap" />
                <div class="card-body">
                  <h5 class="card-title">Basavaraj & Anu</h5>
                  <p>We are grateful for Perfect match as role in our story</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row my-5">
            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src={success4} alt="Card cap" />
                <div class="card-body">
                  <h5 class="card-title">Vikas & Arpita</h5>
                  <p>I found my true Love. Thanks to perfect Match</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src={success5} alt="Card cap" />
                <div class="card-body">
                  <h5 class="card-title">Advik & Rohini</h5>
                  <p>
                    Here ends my search for true love. Thanks to perfect Match
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm">
              <div class="card">
                <img class="card-img-top" src={success6} alt="Card cap" />
                <div class="card-body">
                  <h5 class="card-title">Rahul & Kajal</h5>
                  <p>I found my soulmate on Perfect Match. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
