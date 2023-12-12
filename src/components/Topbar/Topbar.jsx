import React from 'react'
import './Topbar.css'
import { NotificationsNone,Language,Settings } from '@material-ui/icons';

function Topbar() {
  return (
    <>
      <div className='topbarContainer'>
        <h2 className='topbarName'>Admin Board</h2>
        <div className='topbarOptMenu'>
          <div className='topbarIcons'>
            <NotificationsNone />
            <span className='notify'>2</span>
          </div>
          <div className='topbarIcons'>
            <Language />
            <span className='notify'>2</span>
          </div>
          <div className='topbarIcons'>
            <Settings />
            <span className='notify'>2</span>
          </div>
          <img src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" alt="" style={{width:'40px',height:'40px',objectFit:'cover',borderRadius:'50%'}} />
        </div>
      </div>
    </>
  )
}

export default Topbar