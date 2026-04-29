import React, { useEffect, useState } from 'react';
import UserCard from "../Components/Ui/UserCard";


const ApiTest = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  console.log(userData)

  return (
<div className='container m-auto p-9'>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
  {userData.map((user) => (
    <UserCard key={user.id} user={user} />
  ))}
</div>
</div>
  );
};

export default ApiTest;
