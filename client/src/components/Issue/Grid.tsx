import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Grid(props) {
  const { columns, data, total, isLoading } = props;

  const dateTemplate = (rowData, column) => {
    return new Date(rowData["createdAt"]).toLocaleDateString();
  };

  return (
    <DataTable
      value={data}
      tableStyle={{ minWidth: "50rem" }}
      rows={10}
      totalRecords={total}
      paginator
      loading={isLoading}
    >
      {columns.map(({ field, header, type }) => {
        return type === "date" ? (
          <Column field={field} body={dateTemplate} header={header} />
        ) : (
          <Column field={field} header={header} />
        );
      })}
    </DataTable>
  );
}
