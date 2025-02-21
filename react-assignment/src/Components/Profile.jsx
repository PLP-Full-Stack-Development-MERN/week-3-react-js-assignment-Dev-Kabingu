import React from 'react'

function Profile({name, email, institution, course}) {
  return (
    <div className='max-w-sm shadow rounded h-42 mx-2 overflow-hidden p-6 mb-6 bg-blue-200 hover:bg-blue-300 transform hover:scale-102 transition-scale duration-300 cursor-pointer'>
      <h2 className='font-bold text-xl mb-4'>{name}</h2>
      <p>Email: {email}</p>
      <p>Institution: {institution}</p>
      <p>Course: {course}</p>
    </div>
  )
}

export default Profile