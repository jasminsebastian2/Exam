// Home.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from '../core/homeSlice';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(setRegion(homeData.selectedRegion));
  }, [dispatch, homeData.selectedRegion]);

  const handleRegionChange = (region) => {
    dispatch(setRegion(region));
  };

  const filteredCountries = homeData.data.filter(
    (ele) => homeData.selectedRegion === 'All' || ele.region === homeData.selectedRegion
  );

  return (
    <>
      <Header onRegionChange={handleRegionChange} />

      <Container className="p-5 sm:space-x-10 lg:space-x-0 sm:flex-row lg:flex-row sm:space-y-0 lg:space-x-60 flex-wrap lg:p-10 justify-between">
        <Row className="w-85">
          {filteredCountries &&
            filteredCountries.map((ele) => (
              <Col key={ele.name} xs={12} md={6} lg={6} className="mb-4">
                <Card className="bg-white rounded-lg border-2 border-black" style={{ width: '100%', height: '100px', aspectRatio: '16/4' }}>
                  <Card.Body className="d-flex">
                    <div className="w-30 pr-3">
                      <Card.Img src={ele.flag} alt="cimage" className="w-20 h-15 object-cover" />
                    </div>
                    <div className="w-70">
                      <Card.Title className="mt-1 text-xl font-bold text-[#40556E]">{ele.name}</Card.Title>
                      <div className="d-flex align-items-center gap-1">
                        <i className="fas fa-rupee-sign text-[#40556E] text-[12px] mt-1 opacity-1"></i>
                        <Card.Text className="mt-1 text-sm font-semibold text-[#40556E]">{ele.region}</Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer/>
</>
   
  );
};

export default Home;
