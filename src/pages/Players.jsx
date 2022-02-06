import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import axios from "axios";

const Players = () => {
    const endPoint = "https://api-metaco-pebri.herokuapp.com/"

    const [players, setPlayers] = useState({ dataPlayers: [] });

    useEffect(() => {
        const fetchData = async () => {
            const RESplayers = await axios(endPoint + "players");
            setPlayers({ dataPlayers: RESplayers });
        };

        fetchData();
    }, []);

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Coin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.dataPlayers.data?.map((val, idx) =>
                            <tr key={idx}>
                                <td>{val.id}</td>
                                <td>{val.email}</td>
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

export default Players;