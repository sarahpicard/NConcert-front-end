import * as eventService from '../../services/eventServices'
import { useState } from 'react'

const Search = (props) => {
  const [keywordData, setKeywordData] = useState({})
  const [searchData, setSearchData] = useState({
    keyword: '',
    city: ''
  })
  // handle change of input
  const handleChange = (evt) => {
    setSearchData({...searchData, [evt.target.name]: evt.target.value})
  }

  // handle submit
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      eventService.getSearch(searchData.keyword, searchData.city)
      .then(searchData => {
        setKeywordData(searchData)
      })
    } catch (err) {
      console.log(err)
    }
  }

  const { keyword } = searchData
  const { city } = searchData

  // form validation
  const isKeywordFormValid = () => {
    return !(keyword)
  }

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" value={keyword} name="keyword" placeholder="search event" onChange={handleChange}/>
        <input type="text" value={city} name="city" placeholder="search city" onChange={handleChange}/>
        <button disabled={isKeywordFormValid()}>Search</button>
      </form>
    </>
  )
}

export default Search