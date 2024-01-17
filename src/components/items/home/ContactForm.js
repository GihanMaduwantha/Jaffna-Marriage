import React from 'react';

function ContactForm() {
  return (
    <div className='contactFormContainer' style={{padding:'10px'}}>

      <div className="contacForm flex justify-center mt-5 contactFormBg">
        <div className='fadeUp' ></div>
        <div className="formElement w-1/2">
          {/* Left side: Form */}
          {/* <div className="bgContact bigTextContact">
          
          </div> */}
        </div>
        <div className="formElement w-1/2">
          {/* Right side: "Get Started" text */}

          <div className='bgContact ' >
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg mb-2" style={{color:'white'}}>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2" style={{color:'white'}}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="tel" className="block text-lg mb-2" style={{color:'white'}}>
                  Telephone:
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your telephone number"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-tr from-amber-900 to-yellow-300 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;