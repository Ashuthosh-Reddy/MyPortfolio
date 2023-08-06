import React from 'react'
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaAngular} from 'react-icons/fa'
import { DiMongodb } from "react-icons/di";
function Courosel() {
    return (
        <div>
            
            <div className='courosel-parent position-relative' id='courosel'>
              <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Technologies I use</h1>

              <div className='gallery'>

                  <span style={{'--i' : 1}}>
                      <FaReact color='cyan'/>
                  </span>


                  <span style={{'--i' : 2}}>
                      <FaNodeJs color='green'/>
                  </span>

                  <span style={{'--i' : 3}}>
                  <img src="https://i.postimg.cc/sDbxh8xt/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png"/>
                      
                  </span>

                  <span style={{'--i' : 4}}>
                      <FaHtml5 color='red'/>
                  </span>

                  <span style={{'--i' : 5}}>
                      <DiMongodb color='green'/>
                  </span>

                  <span style={{'--i' : 6}}>
                      <img src="https://i.postimg.cc/SsGDnWY9/Pics-Art-12-01-02-17-27.png"/>
                  </span>

                  <span style={{'--i' : 7}}>
                    <FaCss3 color='blue'/>
                  </span>

                  <span style={{'--i' : 8}}>
                    <FaAngular color='red'/>
                  </span>

                  <span style={{'--i' : 9}}>
                    <img src="https://i.postimg.cc/ZnkHghDR/Java-Script-logo.png"/>
                  </span>
                
              </div>
            </div>
        </div>
    )
}

export default Courosel
