import React from 'react';
import { Row } from 'react-bootstrap';
import TeamItem from './TeamItem';

export default function TeamList({ users }) {
  return (
    <Row>
      {users.map((user) => (
        <TeamItem
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          website={user.website}
        ></TeamItem>
      ))}
    </Row>
  );
}
