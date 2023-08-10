import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
// import { pageViewsTracking } from "../ReactGAFunction";
init(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_ID); 
const SignUpTraining = () => {
  const effect_Trans = "transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 duration-300"
  
  let list_course = [
    "All programs",
    "Foundations of Deep Learning",
    "Advanced Computer Vision with Deep Learning",
    "Advanced NLP and Sequences",
    "Unsupervised and Reinforcement Learning",
    "AI in Production",
    "Deep Learning for Audio ",
    "Deep Learning for Product Managers ",
    "Deep Learning for Graphs",
    "AI for Graphs and Knowledge Bases",
  ];
  let list_country = [
    "Singapore",
    "United States (East Coast)",
    "United States (West Coast)",
    "United Kingdom",
    "Germany",
    "Netherlands",
    "Australia",
    "Thailand",
    "Indonesian",
    "Phillipines",
    "Other",
  ];
  const [country, setCountry] = useState("");
  const [sendMg, setsendMg] = useState(false);
  const [checked, setchecked] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (data) => {
    const form = document.querySelector("#contact-form");

    sendForm("default_service",process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID, "#contact-form").then(
      function (response) {
        setsendMg(true);
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    console.log("data", data);
    // pageViewsTracking("FindOutMore", data);
  };

  useEffect(() => { }, []); 

  return (
    <section className="w-full mb-9">
      <div className="flex flex-col h-full relative items-center">
        <div className="relative xs:[90%] sm:[90%] md:[70%] lg:w-[80%] xs:px-5 sm:px-5 md:px-0 lg:px-0">
          {!sendMg && (
            <div className="relative float-left w-full mr-[4%] my-[15px] ">
              <div className="p-0 min-h-0">
                <div className="block my-[15px] mx-0 ">
                  <h1 className=" text-5xl text-black font-normal font-serif items-center">Find out more info</h1>
                </div>

                <hr
                  style={{
                    color: "black",
                    backgroundColor: "black",
                    height: 2,
                    borderRadius: "100px",
                  }}
                />
              </div>
            </div>
          )}
          {sendMg && (
            <div className="text-center my-12 text-black">
              <h1 className=" font-normal tracking-normal text-2xl">Thanks for submitting the form</h1>
            </div>
          )}

          {!sendMg && (
            <form className="w-full" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className=" box-border border-0 p-0 m-0 max-w-full">
                <div className=" box-border mb-[18px] w-1/2 float-left">
                  <label className=" text-xl text-[#333333] block float-none w-auto font-medium leading-5 pt-0 pb-1 box-border">
                    <span className=" box-border font-serif font-medium text-base">First Name</span>
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className=" box-border mr-2">
                    <input
                      style={{ border: "1px solid #cbd6e2" }}
                      className=" min-h-[27px] py-0 px-[15px] box-border max-w-full w-full bg-[#f5f8fa] rounded-sm text-[#33475b] inline-block h-10 font-serif text-[20px] font-normal leading-6"
                      type="text"
                      {...register("first_name", {
                        required: true,
                        maxLength: 20,
                      })}
                    />
                  </div>
                </div>
                <div className=" box-border mb-[18px] w-1/2 float-left">
                  <label className=" text-xl text-[#333333] block float-none w-auto font-medium leading-5 pt-0 pb-1 box-border">
                    <span className=" box-border font-serif font-medium text-base">Last Name</span>
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className=" box-border mr-2">
                    <input
                      style={{ border: "1px solid #cbd6e2" }}
                      className=" min-h-[27px] py-0 px-[15px] box-border max-w-full w-full bg-[#f5f8fa] rounded-sm text-[#33475b] inline-block h-10 font-serif text-[20px] font-normal leading-6"
                      type="text"
                      {...register("last_name", {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className=" box-border border-0 p-0 m-0 max-w-full">
                <div className=" box-border mb-[18px] w-1/2 float-left" style={{ width: "100%" }}>
                  <label className=" text-xl text-[#333333] block float-none w-auto font-medium leading-5 pt-0 pb-1 box-border">
                    <span className=" box-border font-serif font-medium text-base">Email Address</span>
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className=" box-border mr-2">
                    <input
                      style={{ border: "1px solid #cbd6e2" }}
                      className=" min-h-[27px] py-0 px-[15px] box-border max-w-full w-full bg-[#f5f8fa] rounded-sm text-[#33475b] inline-block h-10 font-serif text-[20px] font-normal leading-6"
                      type="text"
                      {...register("email_address", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className=" box-border border-0 p-0 m-0 max-w-full">
                <div className=" box-border mb-[18px] w-1/2 float-left" style={{ width: "100%" }}>
                  <label className=" text-xl text-[#333333] block float-none w-auto font-medium leading-5 pt-0 pb-1 box-border">
                    <span className=" box-border font-serif font-medium text-base">Country</span>
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div>
                    <select
                      style={{ border: "1px solid #cbd6e2" }}
                      className=" min-h-[27px] py-0 px-[15px] box-border max-w-full w-[99%] rounded-sm bg-[#f5f8fa] inline-block h-10 text-sm font-normal leading-[22px] text-[#33475b]"
                      defaultValue="default" {...register("country")}>
                      <option
                        className=" text-base p-[10px] m-5 my-[30px]"
                        value="default" disabled hidden>
                        Select your Country
                      </option>
                      {list_country.map((n) => (
                        <option
                          className=" text-base p-[10px] m-5 my-[30px]"
                          key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className=" box-border border-0 p-0 m-0 max-w-full">
                <div className=" box-border mb-[18px] w-1/2 float-left" style={{ width: "100%" }}>
                  <label className=" text-xl text-[#333333] block float-none w-auto font-medium leading-5 pt-0 pb-1 box-border">
                    <span className=" box-border font-serif font-medium text-base">Which program is your interest?</span>
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div>
                    <select
                      style={{ border: "1px solid #cbd6e2" }}
                      className=" min-h-[27px] py-0 px-[15px] box-border max-w-full w-[99%] rounded-sm bg-[#f5f8fa] inline-block h-10 text-sm font-normal leading-[22px] text-[#33475b]"
                      defaultValue="default" {...register("interest")}>
                      <option
                        className=" text-base p-[10px] m-5 my-[30px]"
                        value="default" disabled hidden>
                        Choose here
                      </option>
                      {list_course.map((n) => (
                        <option
                          className=" text-base p-[10px] m-5 my-[30px]"
                          key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className=" box-border border-0 p-0 m-0 max-w-full">
                <div className=" box-border mb-[18px] w-1/2 float-left" style={{ width: "100%" }}>
                  <div className="flex flex-row p-0 items-center justify-center text-black">
                    <input
                      className="h-4 w-4 float-left mr-2"
                      type="checkbox"
                      id="checkedMe"
                      onChange={(e) => {
                        if (checked) {
                          setchecked(false);
                        } else {
                          setchecked(true);
                        }

                        console.log("onchange", checked);
                      }}
                      checked={checked}
                    // onClick={(event) => handleChechbox(event)}
                    />{" "}
                    <label className="m-0 text-xl w-full">
                      I agree to be contacted by Red Dragon AI per our{" "}
                      <a>privary policy</a>
                      <span className="w-full text-xl" style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                </div>
              </div>
              <input type="hidden" name="contact_number" value={contactNumber} />
              <div className="flex justify-center items-center w-full">
                <input
                  style={{ border: "1px solid #de0800" }}
                  className={effect_Trans+" hover:bg-[#ff1b12] cursor-pointer w-fit text-white font-normal touch-manipulation my-0 mx-[0.1rem] p-2 bg-[#de0800] rounded-xl"}
                  type="submit" value="Find Out More Info" />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUpTraining;



// const Fieldset = styled.div`
//   box-sizing: border-box;
//   border: 0;
//   padding: 0;
//   margin: 0;
//   max-width: 100%;
// `;

// const Inside_Fieldset = styled.div`
//   box-sizing: border-box;
//   margin-bottom: 18px;
//   width: 50%;
//   float: left;
//   label {
//     display: block;
//     float: none;
//     width: auto;
//     font-weight: 500;
//     line-height: 20px;
//     padding-top: 0;
//     margin-bottom: 4px;
//     box-sizing: border-box;
//     font-size: 20px;
//     color: #333333;
//     span {
//       font-weight: 500;
//       line-height: 20px;
//       font-family: "DM Sans", sans-serif;
//       font-size: 16px;
//       color: #333333;
//       box-sizing: border-box;
//     }
//   }

//   @media only screen and (min-width: 768px) and (max-width: 991px) {
//     label {
//       span {
//         font-size: 1.25rem;
//       }
//     }
//   }
// `;

// const Inside_Input = styled.div`
//   box-sizing: border-box;
//   margin-right: 8px;
// `;

// const Input_user = styled.input`
//   display: inline-block;
//   height: 40px;
//   font-family: "DM Sans", sans-serif;
//   font-size: 20px;
//   font-weight: normal;
//   line-height: 22px;
//   color: #33475b;
//   border: 1px solid #cbd6e2;
//   border-radius: 3px;
//   background-color: #f5f8fa;
//   width: 100%;
//   max-width: 100%;
//   box-sizing: border-box;
//   padding: 0 15px;
//   min-height: 27px;
// `;

// const InputDivCheckBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 0px;
//   align-items: center;
//   justify-content: center;

//   input[type="checkbox"] {
//     -webkit-appearance: checkbox;
//     -moz-appearance: checkbox;
//     appearance: checkbox;
//     display: inline-block;
//     width: auto;
//     margin-right: 10px;
//   }

//   label {
//     margin: 0px;
//     font-size: 20px;
//     width: 100%;
//     @media only screen and (min-width: 320px) and (max-width: 479px) {
//       font-size: 16px;
//     }
//     /* SMARTPHONES LANDSCAPE */
//     @media only screen and (min-width: 480px) and (max-width: 767px) {
//     }
//     /* TABLETS PORTRAIT */
//     @media only screen and (min-width: 768px) and (max-width: 991px) {
//     }
//     /* TABLET LANDSCAPE / DESKTOP */
//     @media only screen and (min-width: 992px) {
//     }
//   }
//   span {
//     font-size: 20px;
//     width: 100%;
//   }
// `;

// const BtnDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// const SendBtn = styled.input`
//   margin: 0rem 0.1rem;
//   padding: 0.5rem 0.5rem;
//   background-color: #de0800;
//   font-size: 1.2rem;
//   font-weight: 400;
//   border-radius: 10px;
//   touch-action: manipulation;
//   border: 1px solid #de0800;
//   color: white;
//   width: fit-content;
//   cursor: pointer;
//   :hover {
//     background-color: #ff1b12;
//   }
// `;
