import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="mt-40 bg-white py-10">
        <div className="container">
          <div className="flex flex-col items-center gap-5 justify-center">
            <ul className="flex justify-center gap-x-10 px-4 py-4">
              <li>
                <a
                  href="https://www.facebook.com/agenciabirdz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={32} color="#242424" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/agencia-birdz/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={32} color="#242424" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/agenciabirdz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={32} color="#242424"/>
                </a>
              </li>
            </ul>
              <p className="text-black text-center opacity-30">Copyright © 2024 Agência Birdz. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
