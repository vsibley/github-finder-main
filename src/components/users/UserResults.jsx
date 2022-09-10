import { useState, useContextaZ} from 'react';
import UserItem from '../users/UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';
import { useContext } from 'react';

function UserResults() {
  const {users, loading } = useContext(GithubContext)


  if (!loading) {

    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-20'>
        {/* search componenet here */}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }

}

export default UserResults