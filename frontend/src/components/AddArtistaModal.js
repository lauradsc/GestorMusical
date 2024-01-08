//Modal para adicionar artista
import react from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { AddArtista } from '../services/ArtistaService.js';

const AddArtistaModal = (props) => {

    const Enviar = (e) => {
        e.preventDefault();
        AddArtista(e.target)
        .then((result) => {
            alert(result);
            props.setUpdate(true);
        },
        (error) => {
            alert("Falha ao adicionar artista!");
        })
    }

        return (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={props.onHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                Adicione um novo artista
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={Enviar}>
                <Row>
                    <Col md={6}>
                    <Form.Group controlId="Nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" name="Nome" required placeholder="" />
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group controlId="Tipo">
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control type="text" name="Tipo" required placeholder="" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="Email" required placeholder="" />
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group controlId="Documento">
                        <Form.Label>Documento</Form.Label>
                        <Form.Control type="text" name="Documento" required placeholder="" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button variant="warning" type="submit" className="w-100 mt-4 text-white">
                        Adicionar
                    </Button>
                    </Col>
                </Row>
                </Form>
            </Modal.Body>
            </Modal>
        );
};

export default AddArtistaModal;