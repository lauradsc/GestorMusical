//Listagem dos artistas
import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import { getArtistas } from '../services/ArtistaService';
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
                        <th className="bg-warning text-white">ID</th>
                        <th className="bg-warning text-white">Nome</th>
                        <th className="bg-warning text-white">Tipo</th>
                        <th className="bg-warning text-white">Email</th>
                        <th className="bg-warning text-white">Documento</th>
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