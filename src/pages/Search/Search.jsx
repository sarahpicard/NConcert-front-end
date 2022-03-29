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
    <>
      <div>
        <form action="#" onSubmit={handleSubmit}>
          <input type="text" value={keyword} name="keyword" placeholder="search event" onChange={handleChange} />
          <input type="text" value={city} name="city" placeholder="search city" onChange={handleChange} />
          <button disabled={isKeywordFormValid()}>Search</button>
        </form>
      </div>
      <div>
        {Object.keys(searchResults)[0] === "_embedded" ?
          <div>
            {searchResults._embedded.events.map(event =>
              <section>
                {/* {console.log(event)} */}
                <div className="container py-2">
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
                      {/* {console.log(searchResults._embedded.events)} */}
                      <Link to={`/events/${event.id}`} state={{event}}>
                        <h1 className='postcard_title'>{event.name}</h1>
                      </Link>
                      <div className="postcard_subtitle small">
                        <p>{event.dates.start.localTime}</p>
                        <p>{event.dates.start.localDate}</p>
                        <a className="see-more-link" href={`/events/${event.id}`} state={{event}}>See More</a>
                      </div>
                      <div className="postcard_preview-txt">
                        some information about the event...
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            )}
            <button onClick={prevPage}>Prev Page</button>
            <button onClick={nextPage}>Next Page</button>
          </div>
          :
          <p>Nothing Searched</p>
        }
      </div>
    </>
  )
}

export default Search

