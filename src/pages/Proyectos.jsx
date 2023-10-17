import React from 'react';
import Proyecto from '../components/Proyecto';
import puka from '../assets/proyectos/puka.png';
import retail from '../assets/proyectos/retail.png';
import dc from '../assets/proyectos/dc.png';
import lol from '../assets/proyectos/lol.png';
import reactImage from '../assets/tecnologias/react.png';
import tailwindImage from '../assets/tecnologias/tailwind.png';
import viteImage from '../assets/tecnologias/vite.svg';
import htmlImage from '../assets/tecnologias/html.png';
import cssImage from '../assets/tecnologias/css.png'
import tesis from '../assets/proyectos/tesis.png'
import node from '../assets/tecnologias/nodejs.png'
import firebase from '../assets/tecnologias/firebase.png'
import tesla from '../assets/proyectos/tesla.png'
import astro from '../assets/tecnologias/astro.png'

export default function Proyectos() {
  return (
    <section id='proyectos' className=' bg-[#131219] py-32 lg:px-24'>
      <h1 className='text-white text-4xl'>Mis proyectos</h1>
      <div className="flex justify-around flex-wrap">
        <Proyecto
          img={puka}
          titulo={"Puka Yurac"}
          tecnologias={[reactImage, tailwindImage, viteImage]}
          descripcion={"Pagina hecha para la empresa Puka Yurac en donde muestra sus productos y servicios de una forma llamativa"}
        />
        <Proyecto
          img={retail}
          tecnologias={[htmlImage, cssImage]}
          titulo={"Retail 100%"}
          descripcion={"Pagina hecha para la empresa Retail 100% para ofrecer sus productos y servicios"}
        />
        <Proyecto
          img={dc}
          tecnologias={[reactImage, tailwindImage, viteImage]}
          titulo={"Clon de Página de DC Shoes"}
          descripcion={"Clon de la página principal de DC para practicar"}
        />
        <Proyecto
          img={tesis}
          titulo={"Aplicativo para comedor de Tecsup"}
          tecnologias={[reactImage, tailwindImage, viteImage,node,firebase]}
          descripcion={"Proyecto de tesis hecho para realizar compras en el comedor del Instituto Tecsup"}
        />
        <Proyecto
          img={tesla}
          titulo={"Clon de página de Tesla"}
          tecnologias={[astro, tailwindImage]}
          descripcion={"Clon de la página principal de Tesla"}
        />
        <Proyecto
          img={lol}
          tecnologias={[reactImage, tailwindImage, viteImage]}
          titulo={"Pagina de campeones de League of Legends"}
          descripcion={"Página que recoge datos de una API de League of Legends"}
        />
      </div>
    </section>
  )
}

