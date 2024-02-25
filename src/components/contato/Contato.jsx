import React from 'react'
import Forms from '../forms/Forms'

const Contato = () => {
  return (
    <>
      <section id="contato" className="mt-40 bg-blackBirdz py-10 ">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 lg:grid lg:grid-cols-2">
            <iframe className="w-[320px] h-[400px] lg:w-[600px] lg:h-[450px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14584.73834106728!2d-46.3257902!3d-23.9539121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce037460477459%3A0xb8d2de822c83c6bd!2sAg%C3%AAncia%20Birdz!5e0!3m2!1spt-BR!2sbr!4v1708887082002!5m2!1spt-BR!2sbr"></iframe>
            <Forms />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contato