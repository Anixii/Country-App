import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { IoArrowBack } from 'react-icons/io5'
import {Button} from '../components/Button'
import {Info} from '../components/Info'
import { searchByCountry } from '../api/config'
const Details = () => { 
    const {name} = useParams() 
    const nav = useNavigate() 
    const [country, setCountry] = useState(null);
    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
      }, [name]);
    return (
        <div>
        <Button onClick={() => nav('/')}>
          <IoArrowBack /> Back
        </Button>
        {country && <Info push={nav} {...country} />}
      </div>
  )
}

export default Details