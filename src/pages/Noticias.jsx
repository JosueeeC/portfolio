import React from 'react'

export default function Noticias() {
  return (
    <div className='h-auto 2xl:h-screen bg-[#181818] px-4 py-32 md:px-8 lg:px-24'>
        <h1 className='text-white  text-2xl md:text-4xl pb-12'>Noticias</h1>
        <div className="flex items-center flex-col lg:flex-row justify-between">
        <iframe className="pb-10" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7119347520559828994" height="740" width="400" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>
        <iframe className="pb-10" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7114580166697172992" height="740" width="400" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>
        <iframe className="pb-10" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7119752423488827392" height="740" width="400" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>
        </div>
      
    </div>
  )
}
