import React from 'react'
import Section1 from './Section1'
import LoginPage from './LoginPage'
import Accordion from './Accordion'
const View = () => {
  return (
    <>
    <Section1/>
    <LoginPage/>
    <Accordion/>
    {/* <div className='mainbody flex-warp d-flex gap-5 justify-content-center' style={{width:"100%", height:"100vh",}}>
        {
            Data.map((e) =>{
                return (
                    
                    <Card moviename={e.moviename} actor={e.actor} image={e.image}/>

                )
            })
        }
    </div> */}
    </>
  )
}

export default View