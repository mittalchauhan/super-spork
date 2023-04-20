import React from 'react'
import Grid from '../components/Issue/Grid'
import Main from '../components/Main/Main'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

function Issue() {
  return (
    <Main>
        <div>Issue</div>
        <Grid />

    </Main>
  )
}

export default Issue