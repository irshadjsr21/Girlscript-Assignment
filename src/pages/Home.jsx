import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import config from '../config';

export default function Home() {
  const getSheetValues = async () => {
    const request = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${config.sheetId}/values/A:D`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.accessToken}`,
        },
      },
    );
    const data = await request.json();
    console.log(data);
  };

  React.useEffect(() => {
    getSheetValues();
  });

  return (
    <Jumbotron>
      <h1>Welcome to Girlscript website!</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iste
        velit harum itaque cum tenetur at eius maiores fugit laboriosam?
      </p>
    </Jumbotron>
  );
}
