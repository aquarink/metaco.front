import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import axios from "axios";

const Members = () => {
    const endPoint = "https://api-metaco-pebri.herokuapp.com/"
    const search = useLocation().search;
    const idnya = new URLSearchParams(search).get('id');

    const [members, setMembers] = useState({ dataMembers: [] });

    useEffect(() => {
        const fetchData = async () => {
            const RESmembers = await axios(endPoint + "team-member?id=" + idnya);
            setMembers({ dataMembers: RESmembers });
        };

        fetchData();
    }, [idnya]);

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Role</th>
                            <th>Name</th>
                            <th>Coin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.dataMembers.data?.map((val, idx) =>
                            <tr key={idx}>
                                <td>{val.user_id}</td>
                                <td>{val.role}</td>
                                <td>{val.name}</td>
                                <td>{val.coin}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Members;