import { useState, useEffect } from 'react';

import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores(MelhoresProdutores) {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort(
            (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
        );
        let novaLista = retorno.lista;
        
        if (MelhoresProdutores) {            
            novaLista = novaLista.filter(
                (produtor) => produtor.estrelas > 2
            );            
        }             
        setLista(novaLista);
    }, []);

    return lista;
}
