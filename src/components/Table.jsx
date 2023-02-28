import moment from "moment/moment"

function Table({ rows, handleDelete }) {
    return (
        <div className="container mt-2">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Дата (ДД.ММ.ГГ)</th>
                        <th scope="col">Пройдено км</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {
                      rows.map(row => (
                        <tr key={row.id}>
                            <td>{moment(row.date).format("DD.MM.YYYY")}</td>
                            <td>{row.distance}</td>
                            <td>
                            <button type="button"
                                    className ="btn btn-outline-dark mx-2">
                                        Редактировать
                            </button>
                    
                            <button type="button"
                                    className ="btn btn-outline-danger"
                                    onClick={() => handleDelete(row.id)}>
                                        Удалить
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
