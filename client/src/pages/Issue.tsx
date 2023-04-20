import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';

import Grid from '../components/Issue/Grid'
import Main from '../components/Main/Main'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import CreateIssueModal from "../components/Issue/CreateModal";
import { getIssues } from '../utils/API/issue_API';


function Issue(props) {
  const { currentUser, logoutUser } = props;
    const [isIssueOpen, setIssueOpen] = useState(false);
  const [totalRecords, setTotalRecords]= useState(0)
  const [issues, setIssues]= useState([])
  const [loading, setLoading]= useState(false)
const issueColumns=[
{field:"description", header:"Description", type:"string"},
{field:"projectId.name", header:"Project", type:"string"},
{field:"creatorId.firstname", header:"Created By", type:"string"},
{field:"issueTypeId.label", header:"Issue type", type:"string"},
{field:"priorityId.label", header:"Priority", type:"string"},
{field:"createdat", header:"Created on", type:"date"},

]

  useEffect(()=>{
     getIssues().then((data) => {
                setTotalRecords(data.totalRecords);
                setIssues(data.data);
                setLoading(false);
            });
  },[])
  
  return (
    <Main>
        
      {isIssueOpen && (
        <CreateIssueModal
          isOpen={isIssueOpen}
          handleClose={() => setIssueOpen(false)}
          currentUser={currentUser}
        />
      )}
        <div className='grid'>
          <div className='col-md-4'>
          <h1>Issues</h1>

          </div>
          <div className='md-offset-6 col-md-2'>
          <Button label="create new issue" onClick={()=>setIssueOpen(true)}/>

          </div>

          </div>
        <Grid 
        totalRecords={totalRecords}
        data={issues}
        isLoading={loading}
        columns={issueColumns}
        />

    </Main>
  )
}

export default Issue