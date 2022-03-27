import * as eventService from '../../services/eventServices'
import { useEffect, useState } from 'react'
import Events from '../Events/Events'



const Search = (props) => {
  const [keywordData, setKeywordData] = useState([])
  const [searchData, setSearchData] = useState([{
    keyword: '',
    city: ''
  }])
  const [searchResults, setSearchResults] = useState([{}])


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
        setSearchResults(searchData)
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

  console.log("search data", searchData)
  console.log("search results", searchResults.length)
  return (
    <>
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" value={keyword} name="keyword" placeholder="search event" onChange={handleChange}/>
        <input type="text" value={city} name="city" placeholder="search city" onChange={handleChange}/>
        <button disabled={isKeywordFormValid()}>Search</button>
      </form>
    </div>
      <div>
        {searchResults.length === undefined ? 
          <div>
            {console.log(searchResults.length)}
            {searchResults._embedded.events.map(event =>
              <h4>{event.name}</h4>
            )}
          </div>
          :
          <p>Nothing Searched</p>
        }
      </div>
    </>
  )
}

export default Search

