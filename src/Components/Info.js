import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from './Nav';
import { FaArrowLeft } from "react-icons/fa";

const Info = () => {
    let apiId = useParams('_id')
    const [beer, setApi] = useState([]);
    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${apiId._id}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setApi(json)
            })
    })

    return (

        <>
            {/* <h1>Info</h1> */}
            <article className="beer-container">
                <div className='beer-photo'>
                    <img src={beer.image_url} alt={beer.name} width={"100%"} /></div>
                <div className='beer-info' >
                    <h1 className='title'>{beer.name}</h1>
                    <h3 className="slogen">{beer.tagline}</h3>
                    <div className='flex'>
                        <p className="sub-title">
                            <p>First brewed:</p>
                            <p>Attenuation level:</p>
                        </p>
                        <p className="sub-title">
                            <p>{beer.first_brewed}</p>
                            <p>{beer.attenuation_level}</p></p>
                    </div>
                    <p className="beer-des">{beer.description}</p>
                </div>
                <div className='btn-wrapper'>
                    <Link to="/Allbeer" className="btn-back">
                        <FaArrowLeft className="arrow" />
                    </Link></div>
                <Nav />
            </article>
        </>

    )
}

export default Info
