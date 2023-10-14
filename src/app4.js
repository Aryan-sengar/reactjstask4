import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://dummyjson.com/users');
      setData(result.data.users);
    };
    fetchData();
  }, []);

  return (
   
    <table style={{border:'1px solid white'}}>
      <thead>
        <tr style={{border:'1px solid white'}}>
          <th >S.No</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td><img src={item.image} alt="Profile"  height="50px"/></td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.gender}</td>
            <td>{item.username}</td>
            <td>{item.domain}</td>
            <td>{item.ip}</td>
            <td>{item.university}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App4;
