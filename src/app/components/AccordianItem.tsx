import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


interface Level{
    level:number;
    heading:string;
}

interface phase {
    phasenumber:string;
    heading:string;
    description:string;
    subheading:string;
}
interface Phases {
    Phase: phase[];
  }

  type leveandphase = Level & Phases;

const Levels: React.FC<leveandphase> = (phasee) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <section className='levels mt-10 w-[90%]  flex flex-col mx-auto'>
      <header className='inline-flex level-title rounded-md justify-between bg-[#8290DD] text-white p-4 font-medium text-xl w-[100%]'>
        <h4 onClick={() => setExpanded(!expanded)}>
        Level {phasee.level} - {phasee.heading}
        </h4>
        <button className='btn bg-white rounded-full p-1 text-xl text-[#8290DD] font-bold' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>
       {phasee.Phase.map((phasee) =>{
            return(
            <div key={phasee.phasenumber} className='inline-flex w-full mt-5 rounded-md justify-between gap-10'>
                <div className="phase_number  min-h-[5em] min-w-[4em] p-4 rounded-md bg-cover relative bg-[url('https://res.cloudinary.com/dbps0dnyv/image/upload/v1685984881/WhatsApp_Image_2023-06-05_at_22.34.16-removebg-preview_rxlqg5.png')] drop-shadow-[-2px_2px_0px_rgba(63,114,74,0.8)]">
                    <div className="numberdiv  absolute p-2 w-10 text-center h-10 top-[50%] -translate-y-[55%] -right-[65%] -translate-x-[50%] bg-[#25293A] text-white rounded-[50%]">
                    {phasee.phasenumber}
                    </div>
                   
                </div>
                <div className="phaseinfo flex-row  lg:grid lg:grid-cols-4  w-full rounded-lg items-center  bg-[#FFFFFF]items-center p-4  justify-between">
                   <Image src={'https://res.cloudinary.com/dbps0dnyv/image/upload/v1685988160/badge-removebg-preview_o9aaiv.png'} height={70} width={70} alt='badge'/>
                <p className='align-center text-xl font-semibold'>{phasee.heading}</p>
                <p className='text-md font-light '>{phasee.description}</p>
                <div className=' w-[100%] md:w-full text-xl flex justify-end'>
                    <div className='bg-[#3D5A80]  text-white p-1 rounded-full w-fit justify-self-end'>
                {!expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                </div>
                </div>
            </div>
            )
       })}
      </p>}
    </section>
  )
}

export default Levels