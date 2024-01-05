//aqui, utiliza-se a biblioteca Axios para fazer a requisição de nossos dados
import axios from 'axios';

export function getArtistas() {
    return axios.get('http://127.0.0.1:8000/gcm/')
    .then(response => response.data);
}

export function AddArtista(artista) {
    return axios.post('http://127.0.0.1:8000/gcm/', {
        ArtistaID:null,
        Nome: artista.Nome.value,
        Tipo: artista.Tipo.value,
        Email: artista.Email.value,
        Documento: artista.Documento.value
    })
        .then(response => response.data);   
}

export function UpdateArtista(artista, artID) {
    return axios.post('http://127.0.0.1:8000/gcm/' + artID + '/', {
        ArtistaID:null,
        Nome: artista.Nome.value,
        Tipo: artista.Tipo.value,
        Email: artista.Email.value,
        Documento: artista.Documento.value
    })
        .then(response => response.data);   
}

