import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>पाल समाज विवाह</h3>
                <p>
                  बगहाई <br />
                  रामपुर बाघेलान, जिला - सतना
                  <br />
                  भारत, मध्य प्रदेश
                  <br />
                  <br />
                  <strong>Phone:</strong> 7770838846
                  <br />
                  <strong>Email:</strong> maneeshpal85@gmail.com
                  <br />
                </p>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    {" "}
                    <a href="/">Home</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Join with us</h4>
                <ul>
                  <li>
                    {" "}
                    <a href="/signup">Register</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/admin">Admin Login</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  हमसे नीचे दिए गए प्लेटफ़ॉर्म पर जुड़ें। सभी अपडेट यहीं पोस्ट
                  किए जाएंगे...
                </p>
                <div class="social-links mt-3">
                  <a href="/" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="/" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="/" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="/" class="google-plus">
                    <i class="bx bxl-skype"></i>
                  </a>
                  <a href="/" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
<div class="container py-4">
  <div class="copyright">
    &copy; Copyright <strong><span>Perfect Match</span></strong>. All Rights Reserved
  </div>
  
</div> */}
      </footer>
    </>
  );
};

export default Footer;
