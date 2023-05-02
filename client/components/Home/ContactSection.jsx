import React, {useState} from "react";
import {motion} from 'framer-motion'
import { GoogleSpreadsheet } from "google-spreadsheet"
// const doc = new GoogleSpreadsheet(SPREADSHEET_ID)
const SPREADSHEET_ID = "13i-xDwRe1MuHa8ueyW47vNw0vIa1Q_onHfdWGndJEDc"
const SHEET_ID = "0"
const CLIENT_EMAIL = "feedback@feedback-353417.iam.gserviceaccount.com"
const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+YPvHqSsTUj39\nO4CubHnj8F+BJveJQEiMlKedmk7nu+BD0ynhkw9oKRAog0l7k4kMYtMFfIHLUCRi\nXHg/rIfg6KeiLKRiHH/aTHzCyWpf9HYM1yrdiVTx+vKf57CNLgQo+6eB69CaSPLf\nLRuvFWZqlogcLFkwB9TbWmA67AbrFtk3p5XOScgmb2UN6cEKMe5A2L7LrQzpkO1r\nIZf8l9OgJUcQJCQ6H95PcGodM7f+7WdeU1d7CaqiWd/TeH5ohxijggMPb5T1s2sF\noPcJGvZiXFBT3wAi+ycRfKh0xLpTxU7zsJypvAEQH2qNTE731uPGk8fRgO3D7j1Y\n+dELoAHtAgMBAAECggEAM6CgVuZg6JXyepRi0qpXKcG7XI5hLYbRxdHgXKSGhmBU\nMoB2yJX1ZSVRnPLxgAIj9chs+n1nw2eB3my+LWJP3OWq5BdgIr0gzOXWJYqyfsAQ\nLW5CUR6XeyG3HzcZEUgr16NbKyf0g4qJ1ozoh4PxqLEWyzEZpKVTC4NIOmJcg+7P\nongXVTNVcGSeEiTCsrtTjxu73CTCmFR9lyp0nhFdWnawJ0K88hwqHG3Hnego02mx\nJWd00kj1OX0dAnEaXMX2pZt6x+mPydg7GcCQLG+TTTf/GRmPQi1CuthJyrLZBs/Z\nBb94tHJppe1qMZvIRJD+4jgf4pyHP1EYFWTBPRgNXwKBgQDwMnNvvWXRyJaY/7fk\nOgQZoC4E4TmhQ/jttEXPuNJACWH6/vBQ2xXrMNUDffAd9PlwhgerJSD23mJGGVS8\nTUcojwibwtQ4MPBJC6nJu/LxrcSz4KU96XCY0u22y2qJJW7mixBLVDj/KVm9yJ8a\nOksBGA8WupgfsAeREkw5SO3cIwKBgQDK53Z7taiZr6tnDITkHcRuKBHwxrn9pbUu\n3yOxCZmx7UKMztYYFPLqABQokNk+kEBBcXn1RKYNsTGMhlj0vxf9G41XNDrbqD+q\nafpgMuwsIgZAxc9tqTtRrhj+G2VqwKpJTSDpngG8ISMr2YNBXjGK5iIUHZC/GXpR\ndunDyDzCrwKBgQDcwQFnCOKzU29VXnBbyRZLlvO0eGrG0/nMPYqLxok1YWozjGrB\nZRlX9qFPfEdawPMff488s/r/6JLZah5+kWd81zhKL11r505vU9DQH3TAubu2thgo\nNovNaM4g2gMn2Md8CwMGuHlJyW85BVF0gW69qqbzdLqrJNVPd0mmvGgfkQKBgAVE\n+ZjA4P4Mx+DHPHRIKZ/KvpyILLBfq1LqTJz+aNVsGfxaKsk5Ug2trthW2q17RY/t\niINMIxvb7DOAEbNZeyABpSwMmTK3LeAZHH1/FQ8YWx03hemNKZM3eEKxJ3McSc/Z\nhu9KQTVHjwhGf9gkwBihXWU0V1v/J2QSOIPzIVDVAoGAdrocRTu8Y09mgwCJgGOW\nDZl7TZpdT4k/tdR+E6GLw+zLq+BlA3td7tv8dxKaAA7u1FTSLf35+qBOT08ZXxNt\neqAXOpLON9qQOP4ubyUuhodSQKVNZ/BinWh68A5qkrMd5QADerLeVTUeu7sAz8zJ\nBWEFAMGkX23GhpTwRechwKw=\n-----END PRIVATE KEY-----\n".replace(
    /\\n/g,
    "\n"
  )
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

const ContactSection = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postal: '',
    state: '',
    hear: '',
    capital: '',
    message: ''
  });

  
  const handleSubmit = () => {
    submitData()
  }

  const submitData = () => {
    const form_value = { 
      Name: formValues.name, 
      Email: formValues.email, 
      Phone: formValues.phone, 
      Address: formValues.address, 
      Postal: formValues.postal,
      State: formValues.state,
      Hear: formValues.hear,
      Capital: formValues.capital,
      Message: formValues.message
    }

    const appendSpreadsheet = async (row) => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        })
        await doc.loadInfo()
        const sheet = doc.sheetsById[SHEET_ID]
        const result = await sheet.addRow(row)
        setFormValues({
          name: '',
          email: '',
          phone: '',
          address: '',
          postal: '',
          state: '',
          hear: '',
          capital: '',
          message: ''
        });
        setShowModal(true)
      } catch (e) {}
    }

    const newRow = form_value
    appendSpreadsheet(newRow)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <section className="text-gray-600 body-font bg-[#F3E5F6]">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto overflow-x-hidden md:flex-row">
        <motion.div 
        initial={{ x: -100,opacity: 0 }}
        whileInView={{x:0, opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 capitalize title-font sm:text-4xl">
          RUN YOUR BUSINESS FROM THE PALM OF YOUR HAND. WE WILL SHOW YOU HOW. 
          </h1>
          <p className="mb-8 text-[18px] leading-relaxed">
          If our concept interests you, fill out the form to learn more about our franchise opportunities. We speak English, Spanish and French. But our chatbot can answer you in almost any language. You can write or speak to it.
          </p>
        </motion.div>
        <div className="mx-auto lg:w-1/2 md:w-2/3">
          <motion.div 
           initial={{ x: 100,opacity: 0 }}
           whileInView={{x:0, opacity: 1 }}
           transition={{
             duration: 0.7,
           }}
            className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="name" className="text-sm font-semibold leading-7 text-gray-600">
                  Name
                </label>
                <input
                required
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  placeholder="Enter Name"
                  onChange={handleChange}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="email"  className="text-sm font-semibold leading-7 text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  id="email"
                  name="email"
                  value={formValues.email}
                  placeholder="Enter email"
                  onChange={handleChange}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="phone" className="text-sm font-semibold leading-7 text-gray-600">
                  Direct Phone no.
                </label>
                <input
                  type="tel" pattern="^\+?\d{1,3}[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}$"
                  id="phone"
                  required
                  name="phone"
                  value={formValues.phone}
                  placeholder="Enter phone"
                  onChange={handleChange}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="address" className="text-sm font-semibold leading-7 text-gray-600">
                  Address Area of interest
                </label>
                <input
                  type="text"
                  required
                  id="address"
                  value={formValues.address}
                  placeholder="Enter address"
                  onChange={handleChange}
                  name="address"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="postal" className="text-sm font-semibold leading-7 text-gray-600">
                  Postal Code
                </label>
                <input
                  type="text"
                  required
                  id="postal"
                  name="postal"
                  value={formValues.postal}
                  placeholder="Enter postal"
                  onChange={handleChange}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="state" className="text-sm font-semibold leading-7 text-gray-600">
                State or Country of Interest
                </label>
                <input
                  type="text"
                  id="state"
                  required
                  name="state"
                  value={formValues.state}
                  placeholder="Enter state"
                  onChange={handleChange}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="hear" className="text-sm font-semibold leading-7 text-gray-600">
                How did you hear about us?
                </label>
                <input
                  type="text"
                  id="hear"
                  name="hear"
                  value={formValues.hear}
                  placeholder="Enter hear"
                  onChange={handleChange}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="capital" className="text-sm font-semibold leading-7 text-gray-600">
                Liquid Capital Available
                </label>
                <input
                  type="text"
                  id="capital"
                  name="capital"
                  value={formValues.capital}
                  placeholder="Enter capital"
                  onChange={handleChange}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label htmlFor="message" className="text-sm font-semibold leading-7 text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  placeholder="Enter message"
                  onChange={handleChange}
                  className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                onClick={handleSubmit}
                className="flex px-8 py-2 text-lg text-white bg-pink-500 border-0 rounded focus:outline-none hover:bg-pink-600"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">
                    Message Sent
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                  Thank you for contacting, we will reach out to you as soon as possible
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </section>
  );
};

export default ContactSection;
