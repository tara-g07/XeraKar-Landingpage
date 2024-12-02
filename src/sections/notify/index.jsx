// import { AnimatePresence } from 'framer-motion'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { Error, Modal } from '../../components'
// import { email_validation } from './validation'
import linkdin from '../../assets/images/linkdin.jpg'
import insta from '../../assets/images/instagram.jpg'
import twitter from '../../assets/images/twitterpng.png'
import email from '../../assets/images/email.jpg'
import phone from '../../assets/images/phone.jpg'
export const Notify = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm()
  // const error = errors.email?.message

  // const [{ email, submitted }, setState] = useState({
  //   email: null,
  //   submitted: false,
  // })

  // const closeModal = () => {
  //   setState({ submitted: false, email })
  // }

  // const onSubmit = data => {
  //   setState({ email: data.email, submitted: true })
  //   reset()
  // }

  return (
    <>
      <section className="container p-5 mx-auto mb-40 space-y-10 bg-no-repeat bg-contain bg-bg-footer-squiggle">
        {/* <h2 className="text-3xl font-bold text-center">
          Contact Information
        </h2> */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <ul className="space-y-7">
            <li className="!items-center">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-lg text-blue-600 hover:underline"
              >
                <img
                  src={phone}
                  alt="phone"
                  className="w-8 h-8 rounded-[15px]"
                />
                <div className="ml-[85px]"> +1 (234) 567-890</div>
              </a>
            </li>
            <li className="flex flex-row">
              <a
                href="info@xerakar.com"
                className="flex items-center gap-3 text-lg text-blue-600 hover:underline"
              >
                <img
                  src={email}
                  alt="email"
                  className="w-8 h-8 rounded-[15px]"
                />{' '}
                info@xerakar.com
              </a>
              <a
                href="support@xerakar.com"
                className="flex items-center gap-3 text-lg text-blue-600 hover:underline ml-4"
              >
                support@xerakar.com
              </a>
            </li>

            <li>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkdin}
                    alt="LinkedIn"
                    className="w-8 h-8 rounded-[15px]"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={insta}
                    alt="Instagram"
                    className="w-8 h-8 rounded-[15px]"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter"
                    className="w-8 h-8 rounded-[15px]"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* <form
          noValidate
          autoComplete="off"
          className="flex justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-end gap-5 w-[100%] max-w-[29rem] m-auto">
            <div className="flex flex-col w-[80%]">
              <div className="flex justify-between mb-2">
                <label htmlFor="email">Email Address</label>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {error && <Error message={error} key={error} />}
                </AnimatePresence>
              </div>
              <input
                className="p-3 transition-all duration-500 rounded-md bg-cyan-200 focus:outline-none hover:bg-cyan-300 focus:bg-cyan-300"
                type="email"
                id="email"
                placeholder="john@gmail.com"
                {...register('email', email_validation)}
              />
            </div>
            <button className="p-3 font-bold transition-all duration-500 rounded-md bg-cyan-100 text-midnight hover:bg-cyan-400">
              Submit
            </button>
          </div>
        </form> */}
      <div className="sm:text-[24px] gap-5 text-[12px] text-gray-400 flex justify-center ">
            <span>
              © All rights of this site belong to Xera Kar company.  Any copying is prosecuted.
            </span>
          </div> 
          </section>
     
      {/* <AnimatePresence initial={false}>
        {submitted && <Modal email={email} fn={closeModal} />}
      </AnimatePresence> */}
    </>
  )
}
