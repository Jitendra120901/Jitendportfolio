"use client";
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Image from 'next/image';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const notify = () => toast.success("Message sent successfully!", {
    theme: "dark"
  });
  const errorNotify = () => toast.error("Something went wrong! Please try again later!", {
    theme: "dark"
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)

    emailjs
      .sendForm('service_7l1yq65', 'template_l9lntlc', form.current, {
        publicKey: 'cJeSgyVihpsbbftEL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          notify()
          setIsLoading(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
          errorNotify()
          setIsLoading(false)
        },
      );
  };

  return (
    <div className="text-white lg:mt-32 mt-8 lg:px-16 px-4">
      <p className="lg:text-5xl text-3xl font-semibold text-center mb-12">Get In Touch</p>

      <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row lg:gap-64 gap-12">
        {/* Form Section */}
        <div className="flex-grow w-full">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
              <input
                type="text"
                name='name'
                placeholder="NAME"
                className="bg-transparent border-b border-white/50 focus:outline-none input w-full pb-2"
                required
              />
              <input
                type="email"
                name='email'
                placeholder="EMAIL"
                className="bg-transparent border-b border-white/50 focus:outline-none input w-full pb-2"
                required
              />
            </div>

            <textarea
              name="message"
              id="message"
              rows="7"
              className="input w-full bg-transparent border border-white/50 rounded-lg p-4 focus:outline-none"
              placeholder="Write your message..."
              required
            ></textarea>

            <button 
              className="w-full lg:w-auto inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium send-btn" 
              type='submit' 
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex-grow">
          {/* Desktop Contact Info */}
          <div className="hidden lg:block space-y-8">
            <div>
              <p className="text-[#b3b3b3] mb-2">EMAIL</p>
              <p>jitendrachoudhary2729@gmail.com</p>
            </div>

            <div>
              <p className="text-[#b3b3b3] mb-2">PHONE</p>
              <p>7049216550</p>
            </div>

            <div>
              <p className="text-[#b3b3b3] mb-2">ADDRESS</p>
              <p>Kirodimalnagar, Raigarh, Chhattisgarh (496001)</p>
            </div>

            <div>
              <p className="text-[#b3b3b3] mb-2">SOCIAL</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/jitendra-choudhary-b69668196/" target="_blank" rel="noopener noreferrer">
                  <Image src="/img/linkedin-blue.png" alt="LinkedIn" width={30} height={30} />
                </a>
                <a href="https://github.com/Jitendra120901" target="_blank" rel="noopener noreferrer">
                  <Image src="/img/github.webp" alt="GitHub" width={30} height={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Contact Info */}
          <div className="lg:hidden flex flex-col space-y-6">
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-[#b3b3b3]">EMAIL</p>
                <p className="text-sm">jitendrachoudhary2729@gmail.com</p>
              </div>

              <div className="space-y-2">
                <p className="text-[#b3b3b3]">PHONE</p>
                <p className="text-sm">7049216550</p>
              </div>
            </div>

            <div>
              <p className="text-[#b3b3b3] mb-2">ADDRESS</p>
              <p className="text-sm">Kirodimalnagar, Raigarh, Chhattisgarh (496001)</p>
            </div>

            <div>
              <p className="text-[#b3b3b3] mb-2">SOCIAL</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/jitendra-choudhary-b69668196/" target="_blank" rel="noopener noreferrer">
                  <Image src="/img/linkedin-blue.png" alt="LinkedIn" width={25} height={25} />
                </a>
                <a href="https://github.com/Jitendra120901" target="_blank" rel="noopener noreferrer">
                  <Image src="/img/github.webp" alt="GitHub" width={25} height={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact