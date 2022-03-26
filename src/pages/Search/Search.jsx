import * as eventService from '../../services/eventServices'
import { useState } from 'react'

const Search = (props) => {
  // searching keyword only
  const [searchKeywordData, setSearchKeywordData] = useState({
    keyword: ''
  })

  // searching city only
  const [searchCityData, setSearchCityData] = useState({
    city: ''
  })

  // handle change of keyword input
  const handleChangeKeyword = (evt) => {
    setSearchKeywordData({...searchKeywordData, [evt.target.name]: evt.target.value})
  }

  // handle change of city input
  const handleChangeCity = (evt) => {
    setSearchCityData({...searchCityData, [evt.target.name]: evt.target.value})
  }

  // handle keyword submit
  const handleKeywordSubmit = async e => {
    e.preventDefault()
    try {
      // API call with search DATA (searchKeywordData)
    } catch (err) {
      console.log(err)
    }
  }

  // handle city submit
  const handleCitySubmit = async e => {
    e.preventDefault()
    try {
      // API call with search DATA (searchCityData)
    } catch (err) {
      console.log(err)
    }
  }

  // these seem to be connecting back to the actual paramater coming through the api (and assigning them state in the form of useState - above.)
  const { keyword } = searchKeywordData
  const { city } = searchCityData

  // seems to be validating the form data using the const set above 
  const isKeywordFormValid = () => {
    return !(keyword)
  }
  const isCityFormValid = () => {
    return !(city)
  }

  return (
    <>
      <form action="#" onSubmit={handleKeywordSubmit}>
        <input type="text" value={keyword} name="keyword" placeholder="search event" onChange={handleChangeKeyword}/>
        <button disabled={isKeywordFormValid()}>Search Keyword</button>
      </form>
      <form action="#" onSubmit={handleCitySubmit}>
        <input type="text" value={city} name="city" placeholder="search city" onChange={handleChangeCity}/>
        <button disabled={isCityFormValid()}>Search City</button>
      </form>
    </>
  )
}

export default Search