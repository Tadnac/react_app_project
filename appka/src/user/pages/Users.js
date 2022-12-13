import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Radek Cvejn',
      image:
        'https://unsplash.com/photos/2LowviVHZ-E',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
