//Página de gerenciamento de artista, tendo opções de atualiza/deletar a informação do selecionado 
import react, { useEffect, useState } from 'react';
import { getArtistas, deleteArtista } from '../services/ArtistaService.js';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import AddArtistaModal from './AddArtistaModal.js';
import UpdateArtistaModal from './UpdateArtistaModal.js';
import '../App.css';

const GerenciarArtistas = () => {
    const [artistas, setArtistas] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [updateArtistaModal, setEditModalShow] = useState(false);
    const [updateArtista, setAtualizarArtista] = useState([]);
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

    const atualizarArtista = (e, art) => {
        e.preventDefault();
        setEditModalShow();
        setAtualizarArtista(art);
    };

    const deletarArtista = (e, artistaID) => {
        if(window.confirm('Tem certeza que quer deletar esse artista?'))
        e.preventDefault();
        deleteArtista(artistaID)
        .then((result => {
            alert(result);
            setIsUpdated(true);
        },
        (error) => {
            alert("Falha ao deletar artista");
        }
        ))
    };


    const AddArtistaFechar = () => setAddModalShow(false);
    const UpdateModalFechar = () => setAddModalShow(false);

    return(
        <div className="container-fluid side-container">
                <div className="row side-row" >
                    <p id="before-table"></p>
                    <Button className="mr-2 w-25 bg-warning" variant="primary" onClick={addArtista}>Adicionar Artista</Button>
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
                                <Button className="mr-2" variant="primary" onClick={event => atualizarArtista(event, art)}><TfiWrite /></Button>{''}
                                <UpdateArtistaModal show={UpdateArtistaModal} onHide={UpdateModalFechar} setUpdated={setIsUpdated} artista={updateArtista} ></UpdateArtistaModal>
                                <Button className="mr-2" variant="danger" onClick={event => deletarArtista(event, art)}><MdDelete /></Button>{''}
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