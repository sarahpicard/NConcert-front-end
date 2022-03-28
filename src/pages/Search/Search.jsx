import * as eventService from '../../services/eventServices'
import { useState } from 'react'

import './Search.css'



const Search = (props) => {
  const [keywordData, setKeywordData] = useState([])
  const [searchData, setSearchData] = useState([{
    keyword: '',
    city: ''
  }])
  const [searchResults, setSearchResults] = useState([{}])

  // let page = 0

  // if (page > 0) {
  //   if (page > eventService.getSearch.json.page.totalPages-1) {
  //     page = 0
  //   }
  // }

  // const handleNextPage = () => {
  //   eventService.getSearch(++page)
  // }


  // handle change of input
  const handleChange = (evt) => {
    setSearchData({ ...searchData, [evt.target.name]: evt.target.value })
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
        {searchResults.length === undefined ?
          <div>
            {searchResults._embedded.events.map(event =>
              <section>
                <div className="container py-2">
                  <article className="postcard">
                    <a href={`/event/${event.id}`} className="postcard_img_link">
                      <img
                        className="postcard_img"
                        alt="concert"
                        src={event.images.find(image => image.height > 110 && image.width > 100).url}
                        style={{ width: '260px', height: '200px' }}
                      />
                    </a>
                    <div className='postcard-information'>
                      <h1 className='postcard_title'>
                        <a href={`/event/${event.id}`}>{event.name}</a>
                      </h1>
                      <div className="postcard_subtitle small">
                        <p>{event.dates.start.localTime}</p>
                        <p>{event.dates.start.localDate}</p>
                        <a className="see-more-link" href={`/event/${event.id}`}>See More</a>
                      </div>
                      <div className="postcard_preview-txt">
                        some information about the event...
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            )}
          </div>
          :
          <p>Nothing Searched</p>
        }
        <button id='next' href='#'>Next Page</button>
      </div>
    </>
  )
}

export default Search

// href on img - should make clickable to event details 
// event title should be clickable to event details 
// see more link (eventually will be an arrow on right side of card - also brings user to event detail)
