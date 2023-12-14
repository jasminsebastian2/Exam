import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  const circleSize = '48px';
  const imagePadding = '7px 0px 45px'; 
  return (
    <footer className="text-white flex justify-center items-center py-10">
      <Container>
        <Row>
          <Col className="mb-5 text-center" md={12}>
            <div className="d-inline-flex justify-content-center align-items-center gap-3">
              <div className="border border-black shadow px-2 py-2 rounded-circle" style={{ width: circleSize, height: circleSize }}>
                <Image src="/img/path.png" alt="language" fluid style={{ padding: imagePadding }} />
              </div>
              <div className="border border-black shadow px-3 py-2 rounded-circle" style={{ width: circleSize, height: circleSize }}>
                <Image src="/img/face.png" alt="language" fluid style={{ padding: imagePadding }} />
              </div>
              <div className="border border-black shadow px-3 py-2 rounded-circle" style={{ width: circleSize, height: circleSize }}>
                <Image src="/img/instaa.png" alt="language" fluid style={{ padding: imagePadding }} />
              </div>
              <div className="border border-black shadow px-3 py-2 rounded-circle" style={{ width: circleSize, height: circleSize }}>
                <Image src="/img/Icon.png" alt="language" fluid style={{ padding: imagePadding }} />
              </div>
            </div>
          </Col>

          <Col md={12} className="text-center mt-0"> 
            <div className="d-flex flex-column align-items-center gap-1">
              <p className="text-sm text-black">Example@email.com </p>
              <p className="text-sm text-black">Copyright © 2020 Name. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
