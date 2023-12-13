import React, { useEffect, useReducer, useState } from 'react'
import arrow from '../../assets/arrowR.png'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { CircularProgress } from '@mui/material';

const Footer = () => {

  const isMobile = () => {
    const match = window.matchMedia("(max-width:912px)");
    return (match && match.matches);
  };

  const emptyCredentials = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
  };

  const [credentials, setCredentials] = useState(emptyCredentials);
  const handleChange = (event) => {
    const { name, value } = event.target;
// Whatdo:set only aplphabet and numbar eatch phone numbar and name field
    if (name === 'firstName' || name === 'lastName' ||name === 'message') {
      setCredentials({ ...credentials, [name]: value.replace(/[^a-zA-Z]/g, '') });
    } else if (name === 'phoneNo') {
      setCredentials({ ...credentials, [name]: value.replace(/[^0-9]/g, '') });
    } else {
      setCredentials({ ...credentials, [name]: value });
    }
  
    if (name === 'firstName') setErrFirstname(false);
    if (name === 'lastName') setErrLastname(false);
    if (name === 'email') setErrEmail(false);
    if (name === 'phoneNo') setErrPhone(false);
  };

  const [err, setErr] = useState(false)
  const [errFirstname, setErrFirstname] = useState(false)
  const [errLastname, setErrLastname] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errPhone, setErrPhone] = useState(false)

  const [validEmail, setValidEmail] = useState(false)
  const [validPhone, setValidPhone] = useState(false)

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const [errCredentials, setErrCredentials] = useState(false)

  const userData = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstname: credentials.firstName,
      lastname: credentials.lastName,
      email: credentials.email,
      phoneNo: credentials.phoneNo,
      message: credentials.message,
    }),
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  };

  function isValidPhone(phone) {
    return /(0|1|2|3|4|5|6|7|8|9)\d{9}/.test(phone)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.firstName) {
      return setErrFirstname(true);
    };
    if (!credentials.lastName) {
      return setErrLastname(true);
    };
    if (!credentials.email) {
      return setErrEmail(true);
    } else if (!isValidEmail(credentials.email)) {
      return setValidEmail(true);
    };
    if (!credentials.phoneNo) {
      return setErrPhone(true);
    } else if (!isValidPhone(credentials.phoneNo)) {
      return setValidPhone(true);
    };

    setLoading(true);

    try {
      const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/user`, userData);
      const data = await res.json();
      if (!res.ok) {
        setLoading(false)
        if (data.error == "user already exists") {
          setErrCredentials(true);
          setCredentials(emptyCredentials);
          setLoading(false);
          return;
        };
        setCredentials(emptyCredentials);
        setLoading(false);
        setErr(true);
        return;
      };
      setSuccess(true);
      setLoading(false);
      setCredentials(emptyCredentials);
      setLoading(false);
      setErrFirstname(false);
      setErrLastname(false);
      setErrEmail(false);
      setErrPhone(false);
      setValidPhone(false);
      setErr(false);
    } catch (error) {
      setCredentials(emptyCredentials);
      setLoading(false);
      setErrFirstname(false);
      setErrLastname(false);
      setErrEmail(false);
      setErrPhone(false);
      setValidPhone(false);
      setErr(false);
      console.log(error.message);
    };
  };

  return (
    // Note: added some padding both phone and computer view
    <div className='flex-things w-full bg-black md:pt-36 pt-20'>
      <div className='lg:w-[90%] xl:w-[70%] h-full lg:flex sm:justify-between items-center text-white py-5 lg:py-0'>
        <div className='flex flex-col gap-[36px] md:gap-14 xl:gap-16'>
          <div className='text-4xl lg:text-[70px] 2xl:text-[70px] md:py-0 font-gilroy-extrabold text-white'>
            <h1 className='text-center lg:text-start'>let's talk</h1>
          </div>

          <div className='w-[90%] mx-auto md:mx-0 md:w-[310px] lg:h-[310px] text-1xl lg:text-[48px] font-gilroy-light'>
            <p className='text-center leading-tight lg:text-start'>have some great idea or brand to develop?</p>
            <p className='text-center leading-tight lg:text-start'>Let's build it together</p>
          </div>
          <div className='text-xs font-gilroy-light md:text-[16px]'>
            <p className='text-center md:text-start leading-6'>our team will reach out to you as soon as possible</p>
          </div>
        </div>
        
        <form className='flex flex-col gap-4 m-auto text-[16px] w-[80%] md:w-auto md:m-0 mt-10 md:py-1 md:mt-0' onSubmit={handleSubmit}>
          <label className='text-gray-200' htmlFor='first_name'>FIRST NAME {errFirstname ? <span className='text-red-500 pl-3'>Firstname is mandatory</span> : <span className='text-red-500'>*</span>}</label>
          <input className='outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='text' id='first_name' maxLength={25} name='firstName' value={credentials.firstName} onChange={handleChange}   />

          <label className='text-gray-200' htmlFor='last_name'>LAST NAME {errLastname ? <span className='text-red-500 pl-3'>Lastname is mandatory</span> : <span className='text-red-500'>*</span>}</label>
          <input className='outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='text' id='last_name' maxLength={25} name='lastName' value={credentials.lastName} onChange={handleChange} />

          <label className='text-gray-200' htmlFor='email'>EMAIL {errEmail ? <span className='text-red-500 pl-3'>Email is mandatory</span> : <span className='text-red-500'>*</span>}{validEmail && <span className='text-red-500 pl-3'> Please provide valid email address </span>}</label>
          <input className='outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='email' id='email' name='email' value={credentials.email} onChange={handleChange} />

          <label className='text-gray-200' htmlFor='mobile_no'>PHONE NUMBER {errPhone ? <span className='text-red-500 pl-3'>Phone No is mandatory</span> : <span className='text-red-500'>*</span>}{validPhone && <span className='pl-3 text-red-500'> Please provide valid Phone Number </span>}</label>
          
          <input className='outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='tel' id='mobile_no' maxLength={12} name='phoneNo' value={credentials.phoneNo} onChange={handleChange} />

          <label className='text-gray-200' htmlFor='message'>MESSAGE</label>
          <input className='pt-5 outline-none bg-transparent border-b-[1px] border-b-gray-300 w-full md:w-96' type='text' id='message' name='message' value={credentials.message} onChange={handleChange} />

          <button className='btn-submit'>
            <label htmlFor='submit' className='flex cursor-pointer gap-3 w-full h-full rounded-full font-gilroy-light items-center justify-center text-[18px] absolute -left-[2px] bottom-[2px] border-white border-2'>
              <input type='submit' placeholder='SUBMIT' className='cursor-pointer' />
              <img src={arrow} alt="arrow" width={15} height={15} className='object-contain' />
            </label>
          </button>
          {loading ? <CircularProgress /> :
            <>
              {success && <span className='text-green-500 font-gilroy-regular'>Your Request has been Successfully Initiated</span>}
              {errCredentials && <span className='text-red-500'>Credentials already exist</span>}
              {err && <span className='text-red-500'>Something Went Wrong</span>}
            </>
          }
        </form>
      </div>
      <div className='flex flex-col w-full h-40 justify-center xl:mt-8 items-center gap-4 text-white sm:h-80 text-lg'>
        <span className='font-gilroy-semi-bold text-[28px] md:text-[24px]'>Connect with us</span>
        <div className='flex flex-wrap gap-5 items-center'>
          {/* Note: Added social media links and they will open in new tab */}
          <a href='https://twitter.com' target="_blank">{isMobile() ? <TwitterIcon fontSize='medium' /> : <TwitterIcon fontSize='large' />}</a>
          <a href='https://linkedin.com' target="_blank">{isMobile() ? <LinkedInIcon fontSize='medium' /> : <LinkedInIcon fontSize='large' />}</a>
          <a href='https://instagram.com' target="_blank">{isMobile() ? <InstagramIcon fontSize='medium' /> : <InstagramIcon fontSize='large' />}</a>
          <a href='https://facebook.com' target="_blank">{isMobile() ? <FacebookIcon fontSize='medium' /> : <FacebookIcon fontSize='large' />}</a>
        </div>
      </div>
      <div className='w-full h-fit py-3 px-4 md:px-20 lg:px-40 flex flex-col gap-y-4 lg:flex-row justify-between items-center border-t border-gray-400'>
        <div>
          {/* Note: The copyright year will be added dynamically */}
          <p className='text-sm text-white font-gilroy-regular'>
            Copyright <CopyrightIcon fontSize='small' /> {new Date().getFullYear()} Hubnex. All Rights Reserved
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-y-4'>
          <button className='text-sm px-2 text-white font-gilroy-regular border-r border-gray-400'>
            <Link to='/about'>About Us</Link>
          </button>
          <button className='text-sm px-2 text-white font-gilroy-regular border-r border-gray-400'>
            <Link to='/data-protection'>Data Protection</Link>
          </button>
          <button className='text-sm px-2 text-white font-gilroy-regular border-r border-gray-400'>
            <Link to='/terms-and-conditions'>Terms and Conditions</Link>
          </button>
          <button className='text-sm px-2 text-white font-gilroy-regular border-r border-gray-400'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </button>
          <button className='text-sm px-2 text-white font-gilroy-regular'>
            <Link to='/contact'>Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;