import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';

function TableInput({ currentRow, handleAdd }) {
    const [form, setForm] = useState(
        { 
            date: '',
            distance: '' 
        }
    );
  
    useEffect(() => {
      if (currentRow) {
        setForm(
            { 
                date: currentRow.date,
                distance: currentRow.distance
            }
        );
      }
    }, [currentRow]);
  
    const handleSubmit = evt => {
        
        evt.preventDefault();
        const row = {
            id: nanoid(20),
            date: form.date,
            distance: form.distance,
        };
        handleAdd(row);
        setForm({ date: '', distance: '' });
    };

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">                           
                    <div className="col-2">
                        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                        <input 
                            className="form-control"
                            type="date" 
                            value={form.date}
                            name="date"
                            id="date"
                            required
                            onChange={onInputChange} 
                        />
                    </div>
                    <div className="col-2">
                        <label htmlFor="distance">Пройдено (км)</label>
                        <input 
                            className="form-control"
                            type="number"
                            value={form.distance}
                            name="distance"
                            id="distance"
                            step="0.1"
                            min="0.1"
                            required
                            onChange={onInputChange} 
                        />
                    </div>
                    <div className="col-2 d-flex align-content-end flex-wrap">
                        <button type="submit" class="btn btn-success">OK</button>
                    </div>
            </div>
            </div>
        </form>
        );
    }

export default TableInput
