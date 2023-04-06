import React, {useState} from "react";
import {motion} from 'framer-motion'
import { GoogleSpreadsheet } from "google-spreadsheet"
// const doc = new GoogleSpreadsheet(SPREADSHEET_ID)
const SPREADSHEET_ID = "1cwQJgM4sL67Ul2bd0whOlq_ZIwVt6pSkjnsf-PbYUDg"
const SHEET_ID = "0"
const CLIENT_EMAIL = "feedback@feedback-353417.iam.gserviceaccount.com"
const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+YPvHqSsTUj39\nO4CubHnj8F+BJveJQEiMlKedmk7nu+BD0ynhkw9oKRAog0l7k4kMYtMFfIHLUCRi\nXHg/rIfg6KeiLKRiHH/aTHzCyWpf9HYM1yrdiVTx+vKf57CNLgQo+6eB69CaSPLf\nLRuvFWZqlogcLFkwB9TbWmA67AbrFtk3p5XOScgmb2UN6cEKMe5A2L7LrQzpkO1r\nIZf8l9OgJUcQJCQ6H95PcGodM7f+7WdeU1d7CaqiWd/TeH5ohxijggMPb5T1s2sF\noPcJGvZiXFBT3wAi+ycRfKh0xLpTxU7zsJypvAEQH2qNTE731uPGk8fRgO3D7j1Y\n+dELoAHtAgMBAAECggEAM6CgVuZg6JXyepRi0qpXKcG7XI5hLYbRxdHgXKSGhmBU\nMoB2yJX1ZSVRnPLxgAIj9chs+n1nw2eB3my+LWJP3OWq5BdgIr0gzOXWJYqyfsAQ\nLW5CUR6XeyG3HzcZEUgr16NbKyf0g4qJ1ozoh4PxqLEWyzEZpKVTC4NIOmJcg+7P\nongXVTNVcGSeEiTCsrtTjxu73CTCmFR9lyp0nhFdWnawJ0K88hwqHG3Hnego02mx\nJWd00kj1OX0dAnEaXMX2pZt6x+mPydg7GcCQLG+TTTf/GRmPQi1CuthJyrLZBs/Z\nBb94tHJppe1qMZvIRJD+4jgf4pyHP1EYFWTBPRgNXwKBgQDwMnNvvWXRyJaY/7fk\nOgQZoC4E4TmhQ/jttEXPuNJACWH6/vBQ2xXrMNUDffAd9PlwhgerJSD23mJGGVS8\nTUcojwibwtQ4MPBJC6nJu/LxrcSz4KU96XCY0u22y2qJJW7mixBLVDj/KVm9yJ8a\nOksBGA8WupgfsAeREkw5SO3cIwKBgQDK53Z7taiZr6tnDITkHcRuKBHwxrn9pbUu\n3yOxCZmx7UKMztYYFPLqABQokNk+kEBBcXn1RKYNsTGMhlj0vxf9G41XNDrbqD+q\nafpgMuwsIgZAxc9tqTtRrhj+G2VqwKpJTSDpngG8ISMr2YNBXjGK5iIUHZC/GXpR\ndunDyDzCrwKBgQDcwQFnCOKzU29VXnBbyRZLlvO0eGrG0/nMPYqLxok1YWozjGrB\nZRlX9qFPfEdawPMff488s/r/6JLZah5+kWd81zhKL11r505vU9DQH3TAubu2thgo\nNovNaM4g2gMn2Md8CwMGuHlJyW85BVF0gW69qqbzdLqrJNVPd0mmvGgfkQKBgAVE\n+ZjA4P4Mx+DHPHRIKZ/KvpyILLBfq1LqTJz+aNVsGfxaKsk5Ug2trthW2q17RY/t\niINMIxvb7DOAEbNZeyABpSwMmTK3LeAZHH1/FQ8YWx03hemNKZM3eEKxJ3McSc/Z\nhu9KQTVHjwhGf9gkwBihXWU0V1v/J2QSOIPzIVDVAoGAdrocRTu8Y09mgwCJgGOW\nDZl7TZpdT4k/tdR+E6GLw+zLq+BlA3td7tv8dxKaAA7u1FTSLf35+qBOT08ZXxNt\neqAXOpLON9qQOP4ubyUuhodSQKVNZ/BinWh68A5qkrMd5QADerLeVTUeu7sAz8zJ\nBWEFAMGkX23GhpTwRechwKw=\n-----END PRIVATE KEY-----\n".replace(
    /\\n/g,
    "\n"
  )
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

const ContactSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [postal, setPostal] = useState("")
  const [state, setState] = useState("")
  const [hear, setHear] = useState("")
  const [capital, setCapital] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    submitData()
  }

  const submitData = () => {
    const form_value = { 
      Name: name, 
      Email: email, 
      Phone: phone, 
      Address: address, 
      Postal: postal,
      State: state,
      Hear: hear,
      Capital: capital,
      Message: message
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
        setName("")
        setEmail("")
        setPhone("")
        setAddress("")
        setPostal("")
        setState("")
        setHear("")
        setCapital("")
        setMessage("")
      } catch (e) {}
    }

    const newRow = form_value
    appendSpreadsheet(newRow)
  }

  return (
    <section className="text-gray-600 body-font bg-[#F3E5F6]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center overflow-x-hidden">
        <motion.div 
        initial={{ x: -100,opacity: 0 }}
        whileInView={{x:0, opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 capitalize font-medium text-gray-900">
          RUN YOUR BUSINESS FROM THE PALM OF YOUR HAND. WE WILL SHOW YOU HOW. 
          </h1>
          <p className="mb-8 text-[18px] leading-relaxed">
          If our concept interests you, fill out the form to learn more about our franchise opportunities. We speak English, Spanish and French. But our chatbot can answer you in almost any language. You can write or speak to it.
          </p>
        </motion.div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <motion.div 
           initial={{ x: 100,opacity: 0 }}
           whileInView={{x:0, opacity: 1 }}
           transition={{
             duration: 0.7,
           }}
          className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold">
                  Name
                </label>
                <input
                required
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="email"  className="leading-7 text-sm text-gray-600 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600 font-semibold">
                  Direct Phone no.
                </label>
                <input
                  type="tel" pattern="^\+?\d{1,3}[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}$"
                  id="phone"
                  required
                  name="phone"
                  value={phone}
                  placeholder="Enter phone"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600 font-semibold">
                  Address Area of interest
                </label>
                <input
                  type="text"
                  required
                  id="address"
                  value={address}
                  placeholder="Enter address"
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="postal" className="leading-7 text-sm text-gray-600 font-semibold">
                  Postal Code
                </label>
                <input
                  type="text"
                  required
                  id="postal"
                  name="postal"
                  value={postal}
                  placeholder="Enter postal"
                  onChange={(e) => setPostal(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600 font-semibold">
                State or Country of Interest
                </label>
                <input
                  type="text"
                  id="state"
                  required
                  name="state"
                  value={state}
                  placeholder="Enter state"
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="hear" className="leading-7 text-sm text-gray-600 font-semibold">
                How did you hear about us?
                </label>
                <input
                  type="text"
                  id="hear"
                  name="hear"
                  value={hear}
                  placeholder="Enter hear"
                  onChange={(e) => setHear(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="capital" className="leading-7 text-sm text-gray-600 font-semibold">
                Liquid Capital Available
                </label>
                <input
                  type="text"
                  id="capital"
                  name="capital"
                  value={capital}
                  placeholder="Enter capital"
                  onChange={(e) => setCapital(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  placeholder="Enter message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={handleSubmit}
                className="flex text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
