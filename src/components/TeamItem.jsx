import React from 'react';
import { Col } from 'react-bootstrap';
import { MdCall, MdEmail, MdLink } from 'react-icons/md';

export default function TeamItem({ name, email, phone, website }) {
  return (
    <Col md={4} sm={6} xs={12} className="mb-4">
      <h4>{name}</h4>
      <div className="d-flex flex-column">
        <a
          className="d-flex align-items-center anchor-reset"
          href={'mailto:' + email}
        >
          <div className="mr-2">
            <MdEmail style={{ height: '20px', width: 'auto' }}></MdEmail>
          </div>
          <div>{email}</div>
        </a>

        <a
          className="d-flex align-items-center anchor-reset"
          href={'tel:' + phone}
        >
          <div className="mr-2">
            <MdCall style={{ height: '20px', width: 'auto' }}></MdCall>
          </div>
          <div>{phone}</div>
        </a>

        <a
          className="d-flex align-items-center anchor-reset"
          href={'https://' + website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mr-2">
            <MdLink style={{ height: '20px', width: 'auto' }}></MdLink>
          </div>
          <div>{website}</div>
        </a>
      </div>
    </Col>
  );
}
