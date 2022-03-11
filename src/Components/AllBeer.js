import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"


const AllBeer = () => {
    const [api, setApi] = useState([])
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setApi(json)
            })

    }, [])
    return (
        <div>
            {/* <h1>AllBeer</h1> */}
            {api.map((item, i) => {
                return (

                    <div key={i} className="beer-wrapper">
                        <div className="beer-details">
                            <div className="left">
                                <img src={item.image_url} alt="" />
                            </div>
                            <div className="right">

                                <p className="title">{item.name}</p>
                                <p className="slogen">{item.tagline}</p>
                                <p>Created by : {item.name}</p>
                                <Link className="btn" key={i} to={`/Info/${item._id}`}>Details</Link>

                            </div>
                        </div>
                    </div>

                )
            })}
            <Nav />
        </div >
    )
}

export default AllBeer