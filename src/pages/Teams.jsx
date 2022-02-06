import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Container, Card, Row, Col } from 'react-bootstrap';

const Teams = () => {
    const endPoint = "https://api-metaco-pebri.herokuapp.com/"

    const [teams, setTeams] = useState({ dataTeams: [] });

    useEffect(() => {
        const fetchData = async () => {
            const RESteam = await axios(endPoint + "team-point");
            setTeams({ dataTeams: RESteam });
        };

        fetchData();
    }, []);

    return (
        <>
            <Container fluid="md">
                <Row>
                    {teams.dataTeams.data?.map((val, idx) =>
                        <Col key={idx} style={{marginTop: '1em'}}>
                            <a key={val.id} href={'/team-member?id=' + val.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={val.logo} />
                                    <Card.Body>
                                        <Card.Title>{val.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        
                    )}
            </Row>
        </Container>
        </>
    );
}

export default Teams;