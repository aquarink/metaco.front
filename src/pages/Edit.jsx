import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { Container, Form, Button } from 'react-bootstrap';

const Edit = () => {
    const endPoint = "http://localhost:3210/"
    const search = useLocation().search;
    const idnya = new URLSearchParams(search).get('id');

    const [konten, setKonten] = useState({ datas: [] });

    const [pesan, setPesan] = useState('')
    const [pilihPosition, setPosition] = useState('')
    const [pilihDetailId, setDetailId] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const ResDetail = await axios(endPoint + "result-tournament-detail?id=" + idnya);

            setKonten({ datas: ResDetail, });
        };

        fetchData();

        setDetailId(idnya)

    }, [idnya]);

    const getPosition = (e) => {
        setPosition(e.target.value)
    }

    const submitForm = (e) => {
        if (pilihDetailId !== '' && pilihPosition !== '') {
            const postData = {
                detail_id: pilihDetailId,
                data_position: pilihPosition,
            }

            axios.post(endPoint + "post-update-result", postData).then(resData => {
                setPesan(resData.data.pesan)
            })
        } else {
            setPesan('Form tidak boleh kosong, ID:' + pilihDetailId + ' dan Pos:' + pilihPosition)
        }
    }

    return (
        <>
            {konten.datas.data?.map((val, idx) =>
                <Container key={idx}>
                    <h3>Edit Data Tournament Result</h3>
                    <Form.Group className="mb-3" controlId="team_id">
                        <Form.Label>Team</Form.Label>
                        <Form.Control key={val.id} type="text" value={val.team_data[0].name} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="team_id">
                        <Form.Label>Tournament</Form.Label>
                        <Form.Control type="text" value={val.tournament_data[0].title} readOnly />
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

                    {(() => {
                        if (pesan !== '') {
                            return (
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ color: 'red' }}>{pesan}</Form.Label>
                                </Form.Group>
                            )
                        }

                        return null;
                    })()}

                    <Button variant="warning" type="submit" onClick={submitForm}>
                        Update Data
                    </Button>

                    <a style={{ marginLeft: '40px' }} href='/list' className='btn-btn-default'>Lihat Data</a>
                </Container>
            )}
        </>
    );
}

export default Edit;