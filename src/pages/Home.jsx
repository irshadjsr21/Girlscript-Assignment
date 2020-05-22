import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import config from '../config';

export default function Home() {
  const initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs,
      })
      .then(() => {
        // 3. Initialize and make the API request.
        window.gapi.client.load('sheets', 'v4', () => {
          window.gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: config.spreadsheetId,
              range: 'Sheet1!A4:T',
            })
            .then(
              (response) => {
                const data = response.result.values;
                console.log(data);
              },
              (response) => {
                console.log(response.result.error);
              },
            );
        });
      });
  };

  React.useEffect(() => {
    console.log(config);
    window.gapi.load('client', initClient);
  }, []);

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
