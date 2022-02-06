import React, {useState, useEffect} from 'react'
import axios from "axios"; 
import { Container, Table } from 'react-bootstrap';

const Leaderboard = () => {
    const endPoint = "https://api-metaco-pebri.herokuapp.com/"

    const [lead, setLead] = useState({dataLeaderboard : []});

    useEffect(() => {
        const fetchData = async () => {
            const RESlead = await axios(endPoint+"leaderboard");
            setLead({dataLeaderboard : RESlead});
        };

        fetchData();
    }, []);

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team</th>
                            <th>Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lead.dataLeaderboard.data?.map((val, idx) =>
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{val._id}</td>
                            <td>{val.total}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Leaderboard;