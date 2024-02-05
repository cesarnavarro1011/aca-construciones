import React from 'react'
import home from '../img/home1.jpg';

export default function Home() {
  return (
    <div className="">
      <img className="brightness-50 absolute top-0 -z-10 " src={home} alt="logo "	/>
      <div className="h-96 flex-col flex items-center justify-center">
        <h1 className="w-auto text-5xl text-stone-50 font-bold text-center mb-5	">
          ¿Quienes Somos? 
        </h1> 
        <p className="max-w-3xl text-2xl font-normal text-stone-50 text-center">
          Somos una empresa
          dedicada a realizar proyectos,
          la industria de la construcción, con una amplia y calificada gama de servicios.
        </p>
      </div>
    </div>
  )
}
