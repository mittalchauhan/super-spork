import React, { useEffect } from 'react'
import { Button } from 'primereact/button';

import Grid from '../components/Issue/Grid'
import Main from '../components/Main/Main'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

function Issue() {
  useEffect(()=>{
    
  },[])
  return (
    <Main>
        <div className='grid'>
          <div className='col-lg-4'>
          <h1>Issues</h1>

          </div>
          <div className='lg-offset-6 col-lg-2'>
          <Button label="create new issue" />

          </div>

          </div>
        <Grid />

    </Main>
  )
}

export default Issue