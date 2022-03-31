import React,{useEffect,useState} from 'react'
import api from '../../services/api'
import './home.css'
import {Link} from 'react-router-dom'


function Home(){
    const [filmes,setFilmes] = useState([])

    useEffect(()=>{
        async function loaFilmes(){
            const response = await api.get('r-api/?api=filmes')
            setFilmes(response.data)

        }
        loaFilmes()
    },[])
    return(
        <div className='container'>
         <div className="lista-filmes">
             {filmes.map((filme)=>{
                 return(
                     <article key={filme.id}>
                         <strong>{filme.nome}</strong>
                         <img src={filme.foto} alt={filme.nome} />
                         <Link to={`/filme/${filme.id}`}>Acessar</Link>
                     </article>
                 )
             })}
         </div>
        </div>
    )
}

export default Home;