import React, { useState } from 'react';
import { Jumbotron, Container, Spinner } from 'react-bootstrap';
import TeamList from '../components/TeamList';
import { getTeam } from '../services/team';

export default function Team() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    getTeam()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getTeamList = () => {
    if (isLoading) {
      return (
        <Container className="d-flex justify-content-center align-items-center">
          <Spinner size="lg" animation="border" />
        </Container>
      );
    } else {
      return (
        <Container>
          <h2 className="text-center mb-4">Meet our team members!</h2>
          <TeamList users={users}></TeamList>
        </Container>
      );
    }
  };

  return (
    <div>
      <Jumbotron>
        <h1>Our Team</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit non
          tenetur placeat blanditiis necessitatibus voluptatum assumenda odit ab
          nobis harum!
        </p>
      </Jumbotron>

      {getTeamList()}
    </div>
  );
}
