import React, { useRef } from "react";
import Form from "../components/Form/Form";
import iconPhone from "../images/icon-phone.svg";
import iconPin from "../images/icon-pin.png";
import arrowBtn from "../images/arrow.svg";

const IndexPage = () => {

  const formRef = useRef();

  const goToForm = ()=>{
    formRef.current.selectEmailField();
  }

  return (
    <div className="">

      <div className="top-banner">
        <p className="flex justify-center  bg-black text-white .text-sm	  p-2 mb-8">
          Learn more about our latest features
        </p>
      </div>

      <h1 className="text-center text-2xl	mb-8">Company Name</h1>
      
      <main className="max-w-1095  m-auto">

        <h2 className="text-2xl mb-6 px-4">Contact Us</h2>
        <p className="text-sm mb-12 px-4">Please provide some information to get started.</p>
        
        <section className="flex flex-col-reverse md:flex-row px-4">

          <div className="w-full md:w-2/3 pr-6">
            <Form ref={formRef} />
          </div>

          <aside className="w-full md:w-1/3">
            <p className="text-base mb-6">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
            <p className="mb-3"><strong>Phone:</strong> <br/> <a href="tel:18777777777" className="text-bluesky text-lg">+1 (877) 777-7777</a></p>
            <p className="mb-6">
              <strong className="block mb-3">Hours:</strong>
              Monday - Sunday: <strong>7am - 11pm EST</strong>
            </p>
          </aside>

        </section>
      </main>

      <footer className="bg-darkgray text-white text-sm">
        <div className="flex flex-col md:flex-row max-w-1095 mx-auto px-4 py-8 md:py-20">
          
          <div className="w-full md:w-1/2 pt-4 mb-4">
            <img className="inline" src={iconPhone} alt=""/> +1 (877) 777-7777<br/>
            <img className="inline" width="16" height="auto" src={iconPin} alt=""/> 123 Main st, San Francisco, CA, 94107
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h3 className="block font-bold leading-8">Free Trial</h3>
            <a href="#" className="block leading-8">Azure</a>
            <a href="#" className="block leading-8">AWS</a>
            <a href="#" className="block leading-8">Google</a>
          </div>

          <div className="w-full md:w-1/4 relative">
            <h3 className="block font-bold leading-8">Resources</h3>
            <a href="#" className="block leading-8">Terms of Service</a>
            <a href="#" className="block leading-8">Privacy Policy</a>
            <a href="#" className="block leading-8">Support</a>

            <button onClick={goToForm} className="absolute top-100 pb-8 md:top-0 right-0 transform hover:scale-125">
              <img src={arrowBtn} alt="go to form"/>
            </button>
          </div>
        </div>
        <div className="flex px-4 py-8 border-t border-white justify-center">
          <p>© 2022 Example</p>
        </div>
      </footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>