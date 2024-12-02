import appImage from '../../assets/images/ap.png'
import googleplay from '../../assets/images/googleplay.jpg'
import appstore from '../../assets/images/appstore.jpg'
export const Pricing = () => {
  const APKUrl = 'https://play.google.com/store/apps/details?id=host'
  const IOSUrl = 'https://apps.apple.com/us/app/expo-go/id982107779'

  return (
    <section className="container p-5 m-auto my-[10rem] space-y-10 md:space-y-20 text-white">
      {/* Header Section (outside the div with the image and button) */}
      <div className="space-y-8 text-center md:max-w-[32.563rem] m-auto">
        <h2 className="text-3xl font-bold">Discover the XeraKar App</h2>
        <p className="text-gray">
          Transform the way you work and get paid with our app. Built for
          creators, freelancers, and entrepreneurs who want to manage their
          projects seamlessly.
        </p>
      </div>

      {/* Image, Explanation, and Button Section */}
      <div className="flex flex-col items-end space-y-6 !justify-end md:flex-row md:space-y-0 md:space-x-10 md:justify-center bg-cyan-200 rounded-[25px] max-w-4xl mx-auto relative ">
        {/* Image Section */}
        <img
          src={appImage}
          alt="Xerakar App"
          className="w-[80%] md:w-auto max-w-[516px] md:absolute top-[-51px] left-[-83px]"
        />

        {/* Explanation and Button Section */}
        <div className=" w-full md:w-[60%] p-5 md:p-8 text-center md:text-left">
          <p className="text-lg text-gray-700">
            With the XeraKar App, you can:
            <ul className="list-disc list-inside mt-3 text-gray-600">
              <li>Organize and track your projects efficiently.</li>
              <li>Send invoices and receive payments seamlessly.</li>
              <li className=" text-[17px] ">
                Connect with opportunities tailored to your skills and goals.
              </li>
              <li>Stay focused and achieve your professional dreams.</li>
            </ul>
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Start turning your passion into a rewarding career. Whether you’re a
            solo creator or an entrepreneur, XeraKar App is designed to help
            you grow and succeed.
          </p>
          <div className="flex !flex-row !mt-[120px] gap-4">
            <a href={APKUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={googleplay}
                alt="Download on Google Play"
                className="!w-[200px] !h-[70.16px] !text-center rounded-2xl !border-none"
              />
            </a>

            <a href={IOSUrl} target="_blank" rel="noopener noreferrer">
              <img
                height="70.16px"
                src={appstore}
                alt="Download on App Store"
                className="!w-[200px] !h-[70.16px] !text-center rounded-2xl !border-none"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
