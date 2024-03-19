import React, { useState } from 'react'
import './Accordion.css'
import AccordionData from './AccordionData';

const Accordion = () => {

    const[open, setOpen] = useState(false);

    const toggleAccordion = (id) =>{
        setOpen(open === id ? false : id);
    }
  return (
    <div className='acc-con'>
        <h1 className='heading'>FAQs :- faltu asked questions</h1>
    <div className='accordion'>
        {AccordionData.map((e) =>(
            <div key={e.id} className='accordion-item'>
                <div className='accordion-title' onClick={()=>toggleAccordion(e.id)}>
                    <button className='tgl-btn'>{open === e.id ? '-' : '+'}</button>
                    {e.title}
                </div>
                {open === e.id && (
                    <div className='description show'>
                        {e.description}
                    </div>
                )}
            </div>
        ))}

    </div>
    </div>
  )
}

export default Accordion