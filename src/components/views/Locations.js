import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export const Locations = () => {
    const [locations, setLocations] = useState([])
    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationsArray) => {
                    setLocations(locationsArray)
                })
            console.log("Initial state of locations", locations) // View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )

    return <> 
    <h1>Locations</h1>
    <article>

    {
        locations.map(
            (location) => {
             return   <ul><li>{location.address} - {location.squareFeet}sqft</li></ul>

            }
        )
    }

    </article>
    </>
}
    
