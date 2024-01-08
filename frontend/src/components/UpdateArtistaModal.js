//Modal para atualizar artista
import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import { UpdateArtista } from '../services/ArtistaService.js';

const UpdateArtistaModal = (props) => {
    const Enviar = (e) => {
        e.preventDefault();
        UpdateArtista(props.artista.ArtistaID, e.target)
        .then((result) => {
            alert(result);
            props.setUpdated(true);
        },
        (error) => {
            alert("Falha ao atualizar artista");
        })
    }

    return(
        <div className="container">
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Atualizar informações do Artista
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={Enviar}>
                <Row>
                    <Col md={6}>
                    <Form.Group controlId="Nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" name="Nome" required placeholder="" defaultValue={props.artista.Nome}/>
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group controlId="Tipo">
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control type="text" name="Tipo" required placeholder="" defaultValue={props.artista.Tipo}/>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="Email" required placeholder="" defaultValue={props.artista.Email}/>
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group controlId="Documento">
                        <Form.Label>Documento</Form.Label>
                        <Form.Control type="text" name="Documento" required placeholder="" defaultValue={props.artista.Documento}/>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button variant="warning" type="submit" className="w-100 mt-4">
                        Adicionar
                    </Button>
                    </Col>
                </Row>
                </Form>
            </Modal.Body>
            </Modal>
        </div>
    );
};

export default UpdateArtistaModal;