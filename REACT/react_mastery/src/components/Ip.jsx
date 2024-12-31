import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Ip() {
  const [ip, setIp] = useState(null); // State to store the IP address
  const dataurl = "https://api.ipify.org/?format=json";

  useEffect(() => {
    // Fetch the IP address when the component mounts
    axios.get(dataurl)
      .then(response => {
        setIp(response.data.ip); // Update the state with the fetched IP
      })
      .catch(error => {
        console.error("Error fetching the IP address:", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Your IP Address:</h1>
      {ip ? <p>{ip}</p> : <p>Loading...</p>} {/* Display the IP or a loading message */}
    </div>
  );
}

export default Ip;
