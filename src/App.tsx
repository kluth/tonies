/// <reference path="index.d.ts" />
import React, { useEffect } from 'react'
// import all images in assets/img
import './assets/img/belle.png'
import './assets/img/kleiner-tiger.png'
import './assets/img/kreativ-tonie.png'
import './assets/img/schlaf-benjamin.png'
import './assets/img/schlafende-maus.png'



const App = () => {
    const [tonies, setTonies] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/tonies')
            .then(res => res.json())
            .then(data => setTonies(data))
            .catch(err => console.log('Maybe the API is not reachable: ', err))
    }, [tonies.length])
  return (
    <>
    {/* map through tonies and display an image of each */}
    {tonies.map((tony: any, index: number) => (
        <img key={index} src={`assets/${tony.image}`} alt={tony.name} />
    ))}
    </>
  )
}

export default App