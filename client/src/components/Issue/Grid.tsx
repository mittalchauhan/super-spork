import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getIssues } from '../../utils/API/issue_API';

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
        // filters: {
        //     name: { value: '', matchMode: 'contains' },
        //     'country.name': { value: '', matchMode: 'contains' },
        //     company: { value: '', matchMode: 'contains' },
        //     'representative.name': { value: '', matchMode: 'contains' }
        // }
    });


    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        setLoading(true);

       
            // issueservice.getissues({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
            getIssues().then((data) => {
                setTotalRecords(data.totalRecords);
                setissues(data.data);
                setLoading(false);
            });
      
    };

    const onPage = (event) => {
        setlazyState(event);
    };

    const onSort = (event) => {
        setlazyState(event);
    };

    const onFilter = (event) => {
        event['first'] = 0;
        setlazyState(event);
    };

    const onSelectionChange = (event) => {
        const value = event.value;

        setSelectedissues(value);
        setSelectAll(value.length === totalRecords);
    };

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            // issueservice.getissues().then((data) => {
                getIssues().then((data:any)=>{
                setSelectAll(true);
                setSelectedissues(data.issues);
            });
        } else {
            setSelectAll(false);
            setSelectedissues([]);
        }
    };

    // const representativeBodyTemplate = (rowData) => {
    //     return (
    //         <div className="flex align-items-center gap-2">
    //             <img alt={rowData.representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`} width={32} />
    //             <span>{rowData.representative.name}</span>
    //         </div>
    //     );
    // };

    // const countryBodyTemplate = (rowData) => {
    //     return (
    //         <div className="flex align-items-center gap-2">
    //             <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
    //             <span>{rowData.country.name}</span>
    //         </div>
    //     );
    // };

    return (
        <div className="card">
            <DataTable value={issues} lazy filterDisplay="row" dataKey="id" paginator
                    first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                    onFilter={onFilter} loading={loading} tableStyle={{ minWidth: '75rem' }}
                    selection={selectedissues} onSelectionChange={onSelectionChange} selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
                <Column field="country.name" sortable header="Country" filterField="country.name"  filter filterPlaceholder="Search" />
                <Column field="company" sortable filter header="Company" filterPlaceholder="Search" />
                <Column field="representative.name" header="Representative"  filter filterPlaceholder="Search" />
            </DataTable>
        </div>
    );
}
         