import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Container, Form, Button } from 'react-bootstrap';

const Add = () => {
    // const endPoint = "http://localhost:3210/"
    const endPoint = "https://api-metaco-pebri.herokuapp.com/"

    const [konten, setKonten] = useState({
        team: [],
        tournament: [],
    });

    const [pesan, setPesan] = useState('')
    const [pilihTeam, setTeam] = useState('')
    const [pilihPosition, setPosition] = useState('')
    const [pilihTournament, setTournament] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const ResTeam = await axios(endPoint + "list-team");
            const ResTournament = await axios(endPoint + "list-tournament");

            setKonten({
                team: ResTeam,
                tournament: ResTournament,
            });
        };

        fetchData();
    }, []);

    const getTeam = (e) => {
        setTeam(e.target.value)
    }

    const getPosition = (e) => {
        setPosition(e.target.value)
    }

    const getTournament = (e) => {
        setTournament(e.target.value)
    }

    const submitForm = (e) => {

        if(pilihTeam !== '' && pilihPosition !== '' && pilihTournament !== '') {
            const postData = {
                data_team: pilihTeam,
                data_position: pilihPosition,
                data_tournament: pilihTournament,
            }

            axios.post(endPoint + "post-result", postData).then(resData => {
                setPesan(resData.data.pesan)
            })
        } else {
            setPesan('Form tidak boleh kosong')
        }
    }

    return (
        <>
            <Container>
                <h3>Tournament Result Form</h3>
                <Form.Group className="mb-3" controlId="team_id">
                    <Form.Label>Choose Team</Form.Label>
                    <Form.Select id="team_id" onChange={getTeam} defaultValue={'DEFAULT'} required>
                        <option value="DEFAULT" disabled>-Pilih-</option>
                        {konten.team.data?.map((val) =>
                            <option key={val.id} value={val.id}>{val.name}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="position">
                    <Form.Label>Position</Form.Label>
                    <Form.Select id="position" onChange={getPosition} defaultValue={'DEFAULT'} required>
                        <option value="DEFAULT" disabled>-Pilih-</option>
                        <option value="1">#1 - First</option>
                        <option value="2">#2 - Second</option>
                        <option value="3">#3 - Third</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="tournament_id">
                    <Form.Label>Choose Tournament</Form.Label>
                    <Form.Select id="tournament_id" onChange={getTournament} defaultValue={'DEFAULT'} required>
                        <option value="DEFAULT" disabled>-Pilih-</option>
                        {konten.tournament.data?.map((val) =>
                            <option key={val.id} value={val.id}>{val.title}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                {(() => {
                    if (pesan !== ''){
                        return (
                            <Form.Group className="mb-3">
                                <Form.Label style={{color: 'red'}}>{pesan}</Form.Label>
                            </Form.Group>
                        )
                    }
                    
                    return null;
                })()}

                <Button variant="primary" type="submit" onClick={submitForm}>
                    Submit
                </Button>

                <a style={{marginLeft: '40px'}} href='/list' className='btn-btn-default'>Lihat Data</a>
            </Container>
        </>
    );
}

export default Add;