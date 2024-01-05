import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import { getArtistas } from '../services/artista_service';
import '../App.css';

const Artistas = () => {
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        let mounted = true;
        getArtistas()
            .then(data => {
                if(mounted) {
                    setArtistas(data)
                }
            })
        return () => mounted = false;
    }, []);

    return(
        <div className="container-fluid side-container">
                <div className="row side-row" >
                    <p id="before-table"></p>
                    <Table striped bordered hover className="react-bootstrap-table text-center" id="dataTable">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Email</th>
                        <th>Documento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artistas.map((art) =>
                            <tr key={art.id}>
                            <td>{art.ArtistaID}</td>
                            <td>{art.Nome}</td>
                            <td>{art.Email}</td>
                            <td>{art.Tipo_documento}</td>
                            </tr>
                        )}
                    </tbody>
                    </Table>
                </div>
            </div>
    );
};

export default Artistas;