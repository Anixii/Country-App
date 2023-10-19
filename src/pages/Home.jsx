import { useEffect, useState } from "react";
import Controls from "../components/Controls";
import axios from "axios";
import { ALL_COUNTRIES } from "../api/config";
import { List } from "../components/List";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
function Home({ countries, setCountries }) {
  const [filterdCountry, setFilteredCountry] = useState([]);
  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    // eslint-disable-next-line
  }, []); 
  useEffect(() =>{ 
    setFilteredCountry(countries)
  },[countries])
  const onHandleFilter = (search, region) =>{ 
    let data = [...countries] 
    if  (region) { 
        data = data.filter(c => c.region.includes(region))
    } 
    if(search){ 
        data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    }
    setFilteredCountry(data)
  }
  const nav = useNavigate();
  return (
    <>
      <Controls onSearch={onHandleFilter}/>
      <List>
        {filterdCountry.map((item, index) => {
          const countryInfo = {
            img: item.flags.svg,
            name: item.name,
            info: [
              {
                title: "Population",
                description: item.population.toLocaleString(),
              },
              {
                title: "Region",
                description: item.region,
              },
              {
                title: "Capital",
                description: item.capital,
              },
            ],
          };
          return (
            <>
              <Card
                key={index}
                name={countryInfo.name}
                img={countryInfo.img}
                info={countryInfo.info}
                onClick={() => nav(`/country/${item.name}`)}
              />
            </>
          );
        })}
      </List>
    </>
  );
}

export default Home;
