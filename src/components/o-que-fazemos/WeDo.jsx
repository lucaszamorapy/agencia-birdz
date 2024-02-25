import React from 'react'
import Card from '../../utils/card/Card'

const WeDo = () => {
  return (
    <>
        <section id="o-que-fazemos" className="mt-40">
          <div className="container">
            <h1 className="text-4xl text-black uppercase font-semibold text-center lg:text-5xl">O que fazemos</h1>
            <p className="text-center px-5 lg:px-40 text-blackBirdz mt-5">Nossos projetos são especialmente desenvolvidos para dar ao seus produtos, marcas ou serviços visibilidade para se instalarem, crescerem e multiplicarem-se de forma eficaz e constante em meio a voraz disputa pelo sucesso!</p>
            <Card />
          </div>
        </section>
    </>
  )
}

export default WeDo