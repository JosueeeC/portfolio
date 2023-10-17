import React from 'react'
import avatar from '../assets/avatar.png'
import { motion } from "framer-motion"

export default function AcercaDeMi() {
  return (
    <section id="sobremi" className='bg-[#0F2866] 2xl:h-screen text-center py-12 flex justify-center items-center'>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={1} className="bg-[#181818] w-[90%] lg:w-3/4 my-12 px-4 py-12 md:p-12 text-white rounded-xl flex items-center">
        <img src={avatar} alt="" className='w-1/2 lg:h-1/2 hidden lg:flex' />
        <div className="flex flex-col  lg:w-1/2">
          <h1 className='nes-text is-warning text-5xl text-center pb-20 pt-12'>Sobre mi</h1>
          <div className="pb-20">
            <h1 className='nes-text is-primary text-4xl text-left pb-4'>Josue Castillo</h1>

            <h1 className='nes-text is-primary text-2xl text-left'>Desarrollador Backend</h1>
          </div>
          <p className='text-left '>Estudiante de 6to ciclo de la carrera de Diseño y Desarrollo de Software en Tecsup </p>
          <br />
          <p className='text-left '>Desarrollador Backend Junior de 19 años nacido en Lima, Peru. Apasionado por la tecnologia y dispuesto a afrontar nuevos retos. Mi objetivo es desarrollar mi carrera profesional en Diseño y Desarrollo de Software formando parte de una empresa que me permita aplicar todos mis conocimientos y habilidades para poder crecer profesionalmente y lograr los mejores resultados posibles. </p>
        </div>
      </motion.div>
    </section>
  )
}
