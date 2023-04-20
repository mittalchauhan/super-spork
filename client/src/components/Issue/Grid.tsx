import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getIssues } from '../../utils/API/issue_API';
// import { DateFormat } from 'primereact/dateformat';


export default function Grid() {
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [issues, setissues] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedissues, setSelectedissues] = useState(null);
    const [lazyState, setlazyState] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
      
    });


    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        setLoading(true);
            getIssues().then((data) => {
                setTotalRecords(data.totalRecords);
                setissues(data.data);
                setLoading(false);
            });
      
    };
    const dateTemplate=(rowData, column) =>{
     return new Date (rowData['createdAt']).toLocaleDateString();
}

    const onPage = (event) => {
        setlazyState(event);
    };



    return (
        <div className="card">
            <DataTable value={issues} lazy filterDisplay="row" dataKey="id" paginator
                    first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                     sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                     loading={loading} tableStyle={{ minWidth: '75rem' }}
                    selection={selectedissues}  selectAll={selectAll} >
                <Column field="summary" header="Summary"   filterPlaceholder="Search" />
                <Column field="description"  header="Description"  />
                <Column field="projectId.name"   header="Project" />
                <Column field="creatorId.firstname" header="Created By"   />
                <Column field="issueTypeId.label" header="Issue type"   />
                <Column field="priorityId.label" header="Priority"   />
                <Column field="createdat" body={dateTemplate} header="created on"  />
            </DataTable>
        </div>
    );
}
         