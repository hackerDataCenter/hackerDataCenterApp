/* import { useState } from "react";

export const Earth = () => {
    const [earth, setEarth] = useState()
    const api_key = 'WcgTScz7Sqv0h5oEVHvWHHhaAj0ZF3CXKRhvkah0'

    useEffect(() => {
        console.log(city);
        const fetchEarth = async () => {
          try {
            const res = await fetch(
              `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=${api_key}`
            );
            const data = await res.json()
            console.log(data)
            setEarthData(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchEarth();
      }, [])

} */

