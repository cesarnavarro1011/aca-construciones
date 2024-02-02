import React from 'react';
import './App.css';
import logo from './logo.png';
import home from './home1.jpg';
import mision from './mision.jpg';
import vision from './vision.jpg';
import checkmark from './checkmark.png';

function App() {
  return (
  <div>
    <header className="w-auto h-16 flex justify-between items-center text-center backdrop-blur-sm "> 
      <img className="size-14 ml-5" src={logo} alt="logo"/>
      <ul className="flex text-stone-50 font-normal">
        <li className="flex-initial w-36 cursor-pointer" href="#¿Quienes Somos?">¿Quienes Somos?</li>
        <li className="flex-initial w-24 cursor-pointer" href="#Misión">Misión</li>
        <li className="flex-initial w-24 cursor-pointer" href="#Visión">Visión</li> 
        <li className="flex-initial w-36 cursor-pointer" href="#Politicas De Calidad">Politicas De Calidad</li>
        <li className="flex-initial w-36 cursor-pointer" href="#Contactanos">Contactanos</li>
      </ul>
    </header>   
    <div className="w-auto  h-screen">
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
    <div className="flex w-auto h-screen justify-between -mt-3">
    <img className="w-fit h-4/5 brightness-50 order-2 shadow-2xl" src={mision} alt="mision "	/>
      <div className="h-80 px-5 flex-col flex items-start justify-center order-1 pl-7">
        <h1 className="w-auto text-4xl text-slate-950 font-semibold mb-5 mt-14">
          Misión
        </h1> 
        <p className="w-full text-xl font-normal text-slate-950 max-w-screen-lg">
          Nuestra misión es superar las expectativas de nuestros clientes 
          y contribuir al desarrollo del Magdalena y las comunidades en las que operamos.
        </p>
      </div>
    </div>
    <div className="flex w-auto h-screen justify-between -mt-36 relative">
    <img className="w-fit h-4/6 brightness-50 shadow-2xl" src={vision} alt="mision "  />
      <div className="h-80 px-5 flex-col flex items-start justify-center">
        <h1 className="w-auto text-4xl text-slate-950 font-semibold mb-5 mt-14">
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
    <div className="flex w-screen h-screen flex-col items-center justify-center -mt-40 bg-[#030712]">
      <h1 className="h-20 p-10 text-4xl text-stone-50 font-bold">POLITICAS DE CALIDAD</h1>
      <ul className="h-auto grid grid-cols-3 gap-16 justify-items-center mt-20">
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
  </div>
  );  
}

export default App;
