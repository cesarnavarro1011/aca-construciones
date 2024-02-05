import React from 'react'
import mision from '../img/mision.jpg';
import vision from '../img/vision.jpg';

export default function SectionsMissionvision() {
  return (
    <>
    <div className="flex w-auto h-screen justify-between pr-5">
      <div  className="w-11/12 order-2">
        <img className="h-11/12 h-4/5 brightness-50 shadow-2xl" src={mision} alt="mision "	/>
      </div>
      <div className="h-80 px-5 flex-col flex items-start justify-center order-1 pl-7">
        <h1 className="w-auto text-4xl text-slate-950 font-bold mb-5 mt-14">
          Misión
        </h1> 
        <p className="w-full text-xl font-normal text-slate-950 max-w-screen-lg">
          Nuestra misión es superar las expectativas de nuestros clientes 
          y contribuir al desarrollo del Magdalena y las comunidades en las que operamos.
        </p>
      </div>
    </div>
    <div className="flex w-auto h-screen justify-between -mt-36 relative pl-10">
    <img className="w-fit h-4/6 brightness-50 shadow-2xl" src={vision} alt="mision "/>
      <div className="h-80 px-5 flex-col flex items-start justify-center">
        <h1 className="w-auto text-4xl text-slate-950 font-bold mb-5 mt-14">
          Visión
        </h1> 
        <p className="w-full text-xl font-normal text-slate-950 max-w-screen-lg">
          Aspiramos a ser reconocidos como líderes en la industria, 
          distinguiéndonos por nuestra capacidad para realizar proyectos 
          desafiantes y complejos, así como por nuestra innovación, integridad 
          y compromiso con la satisfacción del cliente.
        </p>
      </div>
    </div>
    </>
  )
}
