import React, { useState } from "react";
import Navbar from "./fcomponents/Navbar";
import Footer from "./fcomponents/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Signup = () => {
  const [udetails, setUdetails] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    caste: "",
    fatherName: "",
    dob: "",
    state: "",
    district: "",
    height: "",
    weight: "",
    education: "",
    working: "",
    password: "",
    description: "",
    gender: "",
    village: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (udetails.name.trim() === "") {
      newErrors.name = "This field is required";
    }

    if (udetails.age.trim() === "") {
      newErrors.age = "This field is required";
    } else if (udetails.age < 18 && udetails.age > 100) {
      newErrors.age = "Please enter a valid age between 18 and 100";
    }

    if (udetails.email.trim() === "") {
      newErrors.email = "This field is required";
    }

    if (udetails.phone.trim() === "") {
      newErrors.phone = "This field is required";
    } else if (udetails.phone.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    let cp = document.getElementById("cpassword");
    if (udetails.password.trim() === "") {
      newErrors.password = "This field is required....";
    } else if (cp.value !== udetails.password) {
      newErrors.cpassword = "Confirm password is incorrect c";
    }

    setErrors(newErrors);

    console.log("--newErrors--", newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();
  // axios post request
  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    console.log("-----", name.value);
    const res = validateForm();
    console.log("-----res---", res);
    if (res) {
      console.log("-------data------");
      try {
        const { data } = await axios.post(
          "http://localhost:5000/auth/page1/createuser",
          document.querySelector("#my-form"),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(data);

        if (data.success) {
          localStorage.setItem("token", data.authToken);
          window.location = "/";
          navigate("/");
          console.log("Success");
        } else {
          alert(data.error);
        }
      } catch (error) {
        alert("Please check your database connection...");
      }
    }
  };

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Village] = useState("");
  //const [Caste, setCaste] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [Dob, setDob] = useState("");
  //const [State, setState] = useState("");
  const [District, setDistrict] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Education, setEducation] = useState("");
  const [Working, setWorking] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [Desc, setDesc] = useState("");

  const checkErrors = () => {
    //For name
    let name = document.getElementById("name");
    if (name.value === "") {
      setName("This field is required...");
      setTimeout(() => {
        setName("");
      }, 4000);
    } else {
      setName("");
    }

    //For age
    let age = document.getElementById("age");
    if (age.value === "") {
      setAge("This field is required...");
      setTimeout(() => {
        setAge("");
      }, 4000);
    } else if (age.value > 100 || age.value < 18) {
      setAge("Please enter valid age between 18 and 100...");
      setTimeout(() => {
        setAge("");
      }, 4000);
    } else {
      setAge("");
    }

    //For Email
    let email = document.getElementById("email");
    if (email.value === "") {
      setEmail("This field is required...");
      setTimeout(() => {
        setEmail("");
      }, 4000);
    } else {
      setEmail("");
    }

    //For phone number
    let phone = document.getElementById("phone");
    if (phone.value === "") {
      setPhone("This field is required...");
      setTimeout(() => {
        setPhone("");
      }, 4000);
    } else if (phone.value > 9999999999 || phone.value < 999999999) {
      setPhone("Please enter a valid number of 10 digits...");
      setTimeout(() => {
        setPhone("");
      }, 4000);
    } else {
      setPhone("");
    }

    //For Caste
    let fatherName = document.getElementById("fatherName");
    if (fatherName.value === "") {
      setFatherName("This field is required...");
      setTimeout(() => {
        setFatherName("");
      }, 4000);
    } else {
      setFatherName("");
    }

    //For dob
    let dob = document.getElementById("dob");
    if (dob.value === "") {
      setDob("Please enter your date of birth...");
      setTimeout(() => {
        setDob("");
      }, 4000);
    } else {
      setDob("");
    }

    //For state
    // let state = document.getElementById("state");
    // if (state.value === "") {
    //   setState("Please select state...");
    //   setTimeout(() => {
    //     setState("");
    //   }, 4000);
    // } else {
    //   setState("");
    // }

    //For district
    let district = document.getElementById("district");
    if (district.value === "") {
      setDistrict("This field is required...");
      setTimeout(() => {
        setDistrict("");
      }, 4000);
    } else {
      setDistrict("");
    }

    //For height
    let height = document.getElementById("height");
    if (height.value === "") {
      setHeight("This field is required...");
      setTimeout(() => {
        setHeight("");
      }, 4000);
    } else if (height.value < 3 || height.value > 8) {
      setHeight("Your height must be in between 3 & 8 inches....");
      setTimeout(() => {
        setHeight("");
      }, 4000);
    } else {
      setHeight("");
    }

    //For weight
    let weight = document.getElementById("weight");
    if (weight.value === "") {
      setWeight("This field is required...");
      setTimeout(() => {
        setWeight("");
      }, 4000);
    } else if (weight.value < 20 || weight.value > 300) {
      setWeight("Your weight must be in between 20 & 300 inches....");
      setTimeout(() => {
        setWeight("");
      }, 4000);
    } else {
      setWeight("");
    }

    //For education
    let education = document.getElementById("education");
    if (education.value === "") {
      setEducation("Please select education");
      setTimeout(() => {
        setEducation("");
      }, 4000);
    } else {
      setEducation("");
    }

    //For working
    let working = document.getElementById("working");
    if (working.value === "") {
      setWorking("Please select working...");
      setTimeout(() => {
        setWorking("");
      }, 4000);
    } else {
      setWorking("");
    }

    //For password
    let password = document.getElementById("password");
    if (password.value === "") {
      setPassword("This field is required...");
      setTimeout(() => {
        setPassword("");
      }, 4000);
    } else if (password.value.length < 8) {
      setPassword("Password lenght should be minimum 8...");
    } else {
      setPassword("");
    }

    //For password
    let cpassword = document.getElementById("cpassword");
    if (cpassword.value === "") {
      setCpassword("This field is required...");
      setTimeout(() => {
        setCpassword("");
      }, 4000);
    } else if (cpassword.value !== password.value) {
      setCpassword("Confirm password is incorrect...");
    } else {
      setCpassword("");
    }

    //For description
    let desc = document.getElementById("description");
    if (desc.value === "") {
      setDesc("This field is required...");
      setTimeout(() => {
        setDesc("");
      }, 4000);
    } else if (desc.value.minLength === 100) {
      setDesc("Minimum length should be 100....");
    } else {
      setDesc("");
    }
  };

  //On Change Handler
  const onChange = (e) => {
    const { name, value } = e.target;
    setUdetails({
      ...udetails,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />

      <div className="signup-container">
        <div className="container">
          <h1 className="title my-4">Registration</h1>
          <div className="content">
            <form id="my-form" onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={udetails.name}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{errors.name || Name}</span>
                </div>
                <div className="input-box">
                  <span className="details">Age</span>
                  <input
                    id="age"
                    type="text"
                    name="age"
                    value={udetails.age}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{errors.age || Age}</span>
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={udetails.email}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{Email}</span>
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    id="phone"
                    type="number"
                    pattern="[A-Za-z]{3}"
                    title="Please enter valid number"
                    minLength={8}
                    name="phone"
                    value={udetails.phone}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{Phone}</span>
                </div>

                <div className="input-box">
                  <span className="details">Father Name</span>
                  <input
                    id="fatherName"
                    type="text"
                    name="fatherName"
                    value={udetails.fatherName}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{FatherName}</span>
                </div>
                <div className="input-box">
                  <span className="details">Date of Birth</span>
                  <input
                    id="dob"
                    type="date"
                    name="dob"
                    max="2004-05-15"
                    placeholder="DD/MM/YYYY"
                    value={udetails.dob}
                    onChange={onChange}
                  />
                  <span className="error-red">{Dob}</span>
                </div>
                <div className="input-box">
                  <span className="details">District</span>

                  <select
                    id="district"
                    name="district"
                    value={udetails.district}
                    onChange={onChange}
                    className="custom-select"
                  >
                    <option value="">Select District</option>
                    <option value="bihar">Satna</option>
                    <option value="andhra pradesh">Rewa</option>
                    <option value="karnataka">Panna</option>
                    <option value="maharashtra">Shahdol</option>
                    <option value="delhi">Maihar</option>
                    <option value="punjab">Sidhi</option>
                  </select>
                  <span className="error-red">{District}</span>
                </div>
                <div className="input-box">
                  <span className="details">Village</span>
                  <input
                    id="village"
                    type="text"
                    name="village"
                    value={udetails.village}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{Village}</span>
                </div>

                <div className="input-box">
                  <span className="details">Height</span>
                  <input
                    id="height"
                    type="text"
                    name="height"
                    value={udetails.height}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{Height}</span>
                </div>
                <div className="input-box">
                  <span className="details">Weight</span>
                  <input
                    id="weight"
                    type="text"
                    name="weight"
                    value={udetails.weight}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{Weight}</span>
                </div>

                <div className="input-box">
                  <span className="details">Education</span>

                  <select
                    id="education"
                    value={udetails.education}
                    name="education"
                    onChange={onChange}
                    className="custom-select"
                  >
                    <option value="">Select</option>
                    <option value="bca">BCA</option>
                    <option value="mca">MCA</option>
                    <option value="bsc">Bachelor's of Science</option>
                    <option value="bsc">Bachelor's of Engineering</option>
                    <option value="bsc">Bachelor's of Arts</option>
                    <option value="bsc">Master of Arts</option>
                    <option value="msc">MSC</option>
                    <option value="bcom">Bcom</option>
                    <option value="mcom">Mcom</option>
                    <option value="bed">B.ed</option>
                    <option value="med">M.ed</option>
                    <option value="10th">10th pass</option>
                    <option value="12th">12th pass</option>
                    <option value="iit">ITI</option>
                    <option value="mbbs">MBBS</option>
                    <option value="nursing">Nursing</option>
                    <option value="iit">IIT</option>
                  </select>
                  <span className="error-red">{Education}</span>
                </div>

                <div className="input-box">
                  <span className="details">Currently Working in</span>

                  <select
                    id="working"
                    value={udetails.working}
                    onChange={onChange}
                    name="working"
                    className="custom-select"
                  >
                    <option value="">Select</option>
                    <option value="private sector">Private Sector</option>
                    <option value="private sector">
                      Currently Looking for a job
                    </option>
                    <option value="government sector">Teacher</option>
                    <option value="government sector">Indian Army</option>
                    <option value="businessman">Businessman</option>
                    <option value="it industry">IT industry</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Software</option>
                  </select>
                  <span className="error-red">{Working}</span>
                </div>

                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    id="password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                    title="Minimum lenght should be 8, must include uppercase, lowercase, number"
                    type="password"
                    name="password"
                    value={udetails.password}
                    onChange={onChange}
                    required
                  />
                  <span className="error-red">{Password}</span>
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input id="cpassword" type="password" required />
                  <span className="error-red">
                    {errors.cpassword || Cpassword}
                  </span>
                </div>

                <div className="input-box">
                  <span className="details">Tell us about yourself</span>
                  <textarea
                    name="description"
                    value={udetails.description}
                    onChange={onChange}
                    id="description"
                    cols="130"
                    rows="7"
                  ></textarea>
                  <span className="error-red">{Desc}</span>
                </div>
              </div>

              <div className="gender-details">
                <input
                  type="radio"
                  name="gender"
                  value={"Male"}
                  onChange={onChange}
                  id="dot-1"
                />
                <input
                  type="radio"
                  name="gender"
                  value={"Female"}
                  onChange={onChange}
                  id="dot-2"
                />
                <input
                  type="radio"
                  name="gender"
                  value={"Not known"}
                  onChange={onChange}
                  id="dot-3"
                />
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label for="dot-1">
                    <span className="dot one"></span>
                    <span className="gender">Male</span>
                  </label>
                  <label for="dot-2">
                    <span className="dot two"></span>
                    <span className="gender">Female</span>
                  </label>
                  <label for="dot-3">
                    <span className="dot three"></span>
                    <span className="gender">Prefer not to say</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <input type="submit" onClick={checkErrors} value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
