import * as eventService from '../../services/eventServices'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    setSearchData({ ...searchData, [evt.target.name]: evt.target.value })
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
  }

  function nextPage(){
    console.log("next page: ", page)
    return setPage(page + 1)
  }

  function prevPage(){
    console.log("prev page: ", page)
    if (page >= 1) {
      return setPage(page - 1)
    } 
  }

  useEffect(() => {
    try {
      eventService.getSearch(searchData.keyword, searchData.city, page)
      .then(searchData => {
        setKeywordData(searchData)
        setSearchResults(searchData)
      })
    } catch (err) {
      console.log(err)
    }
  }, [page])


  const { keyword } = searchData
  const { city } = searchData

  // form validation
  const isKeywordFormValid = () => {
    return !(keyword)
  }


  return (
    <div>
    <div className='whole-search-component'>
      <div className='search-component-inputs'>
        <form action="#" onSubmit={handleSubmit}>
          <input type="text" value={keyword} name="keyword" placeholder="search event" onChange={handleChange} className="search-field-input"/>
          <input type="text" value={city} name="city" placeholder="search city" onChange={handleChange} className="search-field-input"/>
          <button disabled={isKeywordFormValid()} className="btn btn-success">Search</button>
        </form>
      </div>
      <div>
        {Object.keys(searchResults)[0] === "_embedded" ?
          <div>
            {searchResults._embedded.events.map(event =>
              <section>
                <Link to={`/events/${event.id}`} className="postcard_img_link" state={{event}}>
                <div className="container py-2 whole-event-card">
                  <article className="postcard">
                    <Link to={`/events/${event.id}`} className="postcard_img_link" state={{event}}>
                        <img
                          className="postcard_img"
                          alt="concert"
                          src={event.images.find(image => image.height > 110 && image.width > 100).url}
                          style={{ width: '260px', height: '200px' }}
                          />
                    </Link>
                    <div className='postcard-information'>
                        <h1 className='postcard_title event-list-names'>{event.name}</h1>
                          <i className='bx bx-chevrons-right bx-lg see-more-link'></i>
                      <div className="postcard_subtitle small">
                        <p>{event.dates.start.localTime}</p>
                        <p>{event.dates.start.localDate}</p>
                      </div>
                    </div>
                  </article>
                </div>
                </Link>
              </section>
            )}
            <button className='btn btn-success' onClick={prevPage}>Prev Page</button>
            <button className='btn btn-success' onClick={nextPage} style={{ margin: '15px'}}>Next Page</button>
          </div>
          :
          <p className='nothing-searched-text'>Search above using keyword and city to show events</p>
        }
      </div>
    </div>

    </div>
  )
}

export default Search

