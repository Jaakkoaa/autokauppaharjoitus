
import React, {useEffect } from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-grid.css';


export default function Carlist(props) {




useEffect(() => console.log(props.cars),[props.cars])

const columns = [
    {field:'brand', sortable: true, filter: true},
    {field:'model', sortable: true, filter: true},
    {field:'color', sortable: true, filter: true},
    {field:'year', sortable: true, filter: true},
    {field:'fuel', sortable: true, filter: true},
    {field:'price', sortable: true, filter: true}
    
]

return(
    <div className="ag-theme-alpine" style={{height: 800, width: 1200, padding:100}}>
  <AgGridReact
    onGridReady={ params => props.gridRef.current = params.api }
    ref={props.gridRef}
    rowSelection="single"
    rowData={props.cars}
    columnDefs={columns}>
    </AgGridReact>
    </div>
)

}