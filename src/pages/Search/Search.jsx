import * as eventService from '../../services/eventServices'
import { useEffect, useState } from 'react'
import Events from '../Events/Events'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Search.css'



const Search = (props) => {
  const [keywordData, setKeywordData] = useState([])
  const [searchData, setSearchData] = useState([{
    keyword: '',
    city: ''
  }])
  const [searchResults, setSearchResults] = useState([{}])
  const [page, setPage] = useState(0)


  // handle change of input
  const handleChange = (evt) => {
    setSearchData({...searchData, [evt.target.name]: evt.target.value})
  }
  
  // handle submit
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      eventService.getSearch(searchData.keyword, searchData.city, page)
      .then(searchData => {
        setKeywordData(searchData)
        setSearchResults(searchData)
      })
    } catch (err) {
      console.log(err)
    }
    nextPage()
  }

  function nextPage(){
    setPage(page + 1)
    console.log("page: ", page)
  }

  const { keyword } = searchData
  const { city } = searchData

  
  // form validation
  const isKeywordFormValid = () => {
    return !(keyword)
  }

  console.log("search data", searchData)
  console.log("search results", searchResults.length)
  console.log("searchData: ", searchData)
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
              <section>
                <div className="container py-2">
                  <article className="postcard">
                    <a href="#" className="postcard_img_link">
                      <img className="postcard_img" src="https://i.imgur.com/glvb4Vt.jpg" alt="concert-image" />
                    </a>
                    <div className='postcard-information'>
                      <h1 className='postcard_title'>
                        <a href="#">{event.name}</a>
                      </h1>
                      <div className="postcard_subtitle small">
                        <p>{event.dates.start.localTime}</p>
                        <p>{event.dates.start.localDate}</p>
                      <a className="see-more-link" href='#'>See More</a>
                      </div>
                      <div className="postcard_preview-txt">
                        some information about the event...
                      </div>
                    </div>
                  </article>
                </div> 
              </section>
            )}
            <button onClick={handleSubmit}>Next Page</button>
          </div>
          :
          <p>Nothing Searched</p>
        }
      </div>
    </>
  )
}

export default Search

// href on img - should make clickable to event details 
// event title should be clickable to event details 
// see more link (eventually will be an arrow on right side of card - also brings user to event detail)
