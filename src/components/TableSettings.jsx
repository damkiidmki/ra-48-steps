import Table from "./Table";
import TableInput from "./TableInput";
import React, { useState, useEffect } from 'react';

function TableSettings() {
    const [rows, setRows] = useState([]);
    const [currentRow, setCurrentRow] = useState({
        date: '',
        distance: '',
    });
  
    const sortItems = (date1, date2) => {
        if (date1.date > date2.date) return -1;
        if (date1.date < date2.date) return 1;
        return 0;
    };
  
    const handleDelete = id => {
        setRows(rows =>
            rows.filter(row => row.id !== id),
        );
    };
  
    const handleAdd = newRow => {
        setRows(rows => {
            for (let row of rows) {
                if (row && row.date === newRow.date) {
                    row.distance =  Number(newRow.distance) + Number(row.distance);
                    return [...rows].sort(sortItems);
                }   
            }
            return [...rows, newRow].sort(sortItems);
        });
    };

    return(
        <>
            <TableInput
                handleAdd={handleAdd}
                currentRow={currentRow}
            />
            <Table
                rows={rows}
                handleDelete={handleDelete}
            />
        </>
    )
};

export default TableSettings
