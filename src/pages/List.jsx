import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Container, Table } from 'react-bootstrap';

const List = () => {
    const endPoint = "http://localhost:3210/"

    const [konten, setKonten] = useState({ dataList: [] });

    useEffect(() => {
        const fetchData = async () => {
            const RESdataList = await axios(endPoint + "list-result-tournament");
            setKonten({ dataList: RESdataList });
        };

        fetchData();
    }, []);

    const removeData = async (e) => {
        await axios(endPoint + "delete-tournament?id="+e);

        const RESdataListUpdate = await axios(endPoint + "list-result-tournament");
        setKonten({ dataList: RESdataListUpdate });
    }

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Team</th>
                            <th>Position</th>
                            <th>Point</th>
                            <th>Tournament</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {konten.dataList.data?.map((val, idx) =>
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.team_data[0].name}</td>
                                <td>{val.position}</td>
                                <td>{val.point}</td>
                                <td>{val.tournament_data[0].title}</td>
                                <td>
                                    <a key={idx} href={'/edit?id=' + val.id} className='btn btn-primary'>Edit</a>

                                    <button style={{ marginLeft: '20px' }} onClick={() => removeData(val.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default List;