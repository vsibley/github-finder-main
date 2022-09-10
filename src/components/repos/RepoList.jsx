import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <h2 className='text-3xl my-4 font-bold card-title'> Top Repositories</h2>
            </div>
            {repos.map((repo) => (
                <RepoItem key={repo.id} repo={repo}/>
            ))}
        </div>
  )
}

RepoList.prototype = {
    repos: PropTypes.array.isRequired,
}

export default RepoList