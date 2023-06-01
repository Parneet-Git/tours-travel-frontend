import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../shared/CommonSection'
import TourCard from '../shared/TourCard'
import NewsLetter from '../shared/Newsletter'

const SearchResultList = () => {

  const location = useLocation()

  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container >
          <Row>
            {
              data.length === 0
                ?
                <h4 className='text-center'>No Tour Found</h4>
                :
                data?.map((tour) => {
                  return (<Col lg='3' className='mb-4' key={tour._id}><TourCard tour={tour} /></Col>)
                })
            }
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default SearchResultList
