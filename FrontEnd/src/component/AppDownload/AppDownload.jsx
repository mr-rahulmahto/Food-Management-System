import React from 'react'
import './appdownload.css'
import { Comp } from '../../assets/Comp'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Foodie App</p>
            <div className='app-download-platfrom'>
              <img src={Comp.play_store}alt="" />
              <img src={Comp.app_store}alt="" />  
            </div>
    </div>
  )
}

export default AppDownload
