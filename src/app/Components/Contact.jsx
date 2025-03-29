"use client";
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const notify = () => toast.success("Message sent succesfully!", {
    theme: "dark"
  });
  const errorNotify = () => toast.success("Something went wrong! Please try again later!", {
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
    <div className="text-white lg:mt-32 mt-8 lg:px-16">
      <p className="lg:text-5xl text-2xl font-semibold text-center">Get In Touch</p>

      <div className="mt-16 flex flex-col lg:flex-row lg:gap-64 gap-8">
        <div className="flex-grow">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex justify-between lg:gap-16 gap-4">
              <input
                type="text"
                name='name'
                placeholder="NAME"
                className="bg-transparent focus:outline-none input flex-grow"
                required
              />
              <input
                type="email"
                name='email'
                placeholder="email"
                className="bg-transparent focus:outline-none input flex-grow"
                required
              />
            </div>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              className="input mt-12 focus:outline-none w-full"
              placeholder="Write your message..."
              required
            ></textarea>


            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium mt-8 send-btn" type='submit' disabled={isLoading}>
              {isLoading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        <div className="flex-grow flex-col flex-wrap justify-between hidden lg:flex">
          <div>
            <p className="text-[#b3b3b3]">EMAIL</p>
            <p>jitendrachoudhary2729@gmail.com</p>
          </div>

          <div>
            <p className="text-[#b3b3b3]">PHONE</p>
            <p>7049216550</p>
          </div>

          <div>
            <p className="text-[#b3b3b3]">ADDRESS</p>
            <p>Kirodimalnagar, Raigarh, Chhattisgarh (496001)</p>
          </div>

          <div>
            <p className="text-[#b3b3b3]">SOCIAL</p>
            <div className="flex gap-4">
                <a className="mt-1" href="https://www.linkedin.com/in/jitendra-choudhary-b69668196/" target="_blank"><img src="/img/linkedin-blue.png" alt="" width="30" /></a>
                <a className="mt-1" href="https://github.com/Jitendra120901" target="_blank"><img src="/img/github.webp" alt="" width="30" /></a>
              </div>
          </div>
        </div>

        <div className='flex gap-8 mt-8 lg:hidden'>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[#b3b3b3]">EMAIL</p>
              <p>jitendrachoudhary2729@gmail.com</p>
            </div>

            <div>
            <p className="text-[#b3b3b3]">ADDRESS</p>
            <p>Kirodimalnagar, Raigarh, Chhattisgarh (496001)</p>
            </div>

          </div>

          <div className="flex flex-col gap-4">
            <div>

              <p className="text-[#b3b3b3]">PHONE</p>
              <p>7049216550</p>
            </div>

            <div>
              <p className="text-[#b3b3b3]">SOCIAL</p>
              <div className="flex gap-2">
                <a className="mt-1" href="https://www.linkedin.com/in/v-satish2023/" target="_blank"><img src="/img/linkedin-blue.png" alt="" width="30" /></a>
                <a className="mt-1" href="https://github.com/s4t1sh" target="_blank"><img src="/img/github.webp" alt="" width="30" /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
