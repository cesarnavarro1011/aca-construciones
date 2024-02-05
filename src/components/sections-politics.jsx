import React from 'react'
import checkmark from '../img/checkmark.png';

export default function SectionsPolitics() {
  return (
    <div className="flex flex-col items-center justify-center -mt-36as bg-[#030712]">
      <h1 className="
            h-46 pt-20 text-4xl text-stone-50 font-bold underline decoration-sky-500 
            underline-offset-8"
            >POLITICAS DE CALIDAD</h1>
      <ul className="pb-40 grid grid-cols-3 gap-16 justify-items-center mt-20">
        <li className="h-10 min-w-5 text-xl flex text-stone-50 font-semibold">
          <img className="size-7" src={checkmark} alt="checkmark-Sostenibilidad Ambiental"/>
            Sostenibilidad Ambiental
        </li>  
        <li className="h-10 min-w-5 text-xl flex text-stone-50 font-semibold">
          <img className="size-7 mr-1" src={checkmark} alt="checkmark-Excelencia en la Calidad"/>
            Excelencia en la Calidad
        </li> 
        <li className="h-10 min-w-5 text-xl flex text-stone-50 font-semibold">
          <img className="size-7 mr-1" src={checkmark} alt="checkmark-Desarrollo del Talento"/>
            Desarrollo del Talento
        </li>
        <li className="h-10 min-w-5 text-xl flex text-stone-50 font-semibold">
          <img className="size-7 mr-1" src={checkmark} alt="checkmark-Relaciones de Confianza"/>
            Relaciones de Confianza
        </li>
        <li className="h-10 min-w-5 text-xl flex text-stone-50 font-semibold">
          <img className="size-7 mr-1" src={checkmark} alt="a"/>
            Compromiso con la Comunidad
        </li>
      </ul>     
      <div>
      </div>
    </div>
  )
}
