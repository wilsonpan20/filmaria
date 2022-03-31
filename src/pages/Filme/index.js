import React from 'react';
import {useEffect,useState} from 'react';
import './filme-info.css'
import {useParams,useHistory} from 'react-router-dom'
import api from '../../services/api'

function Filme(){
    const {id} = useParams();
    const history = useHistory()
    const [filme,setFilme] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
        const response = await api.get(`r-api/?api=filmes/${id}`)
           if(response.data.length === 0){
               history.replace('/')
               return;
           }
           setFilme(response.data)
           setLoading(false)
        }

     loadFilme()

    },[id])

    if(loading){
        return(
         <div className='filme-info'>
             <h1>Carregando seu filme</h1>

         </div>
        )
    }

    return(
        <div className='filme-info'>
        <h1>Paginas de detalhes - {id} </h1>
        <h1>{filme.nome}</h1>
        </div>

    )
}

export default Filme;