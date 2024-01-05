import react, { useEffect, useState } from 'react';
import { getArtistas, deleteArtista } from '../services/artista_service';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import AddArtistaModal from './AddArtistaModal.js';
import '../App.css';

const GerenciarArtistas = () => {
    const [artistas, setArtistas] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if(artistas.length && !isUpdated) {
            return;
        } 
        getArtistas()
            .then(data => {
                if(mounted) {
                    setArtistas(data)
                }
            })
        return () => mounted = false;
        setIsUpdated(false);

    }, [isUpdated, artistas]);

    const addArtista = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    }

    const AddArtistaFechar = () => setAddModalShow(false);

    return(
        <div className="container-fluid side-container">
                <div className="row side-row" >
                    <p id="before-table"></p>
                    <Button className="mr-2 w-25" variant="primary" onClick={addArtista}>Adicionar Artista</Button>
                    <AddArtistaModal show={addArtista} onHide={AddArtistaFechar} setUpdated={setIsUpdated}></AddArtistaModal>
                    <Table striped bordered hover className="react-bootstrap-table text-center mt-4" id="dataTable">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Email</th>
                        <th>Documento</th>
                        <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artistas.map((art) =>
                            <tr key={art.id}>
                            <td>{art.ArtistaID}</td>
                            <td>{art.Nome}</td>
                            <td>{art.Email}</td>
                            <td>{art.Tipo_documento}</td>
                            <td> 
                                <Button className="mr-2" variant="primary"><TfiWrite /></Button>{''}
                                <Button className="mr-2" variant="danger"><MdDelete /></Button>{''}
                            </td>
                            </tr>
                        )}
                    </tbody>
                    </Table>
                </div>
            </div>
    );
};

export default GerenciarArtistas;