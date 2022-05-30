import React from 'react'
import { useParams, Link } from 'react-router-dom';

const ShowPost = ({ data }) => {
    const { id } = useParams();
    const showData = data.filter(el => el.id.toString() === id.toString())[0];
    console.log(data.filter(el => el.id.toString() === id.toString())[0])
  return (
      <div className='container my-5'>
          <Link to='/' style={{ textDecoration: 'none' }}><i className='fa-solid fa-arrow-left'></i> Back to home</Link>
          <h1 className='display-5 mt-5 mx-5'>{showData.title}</h1>
          <div className='d-flex my-4 mx-5'>
              <p className='text-primary'><i className="fa-solid fa-user"></i> {showData.alias}</p>
              <p className='mx-5'>{ showData.date.toString() }</p>
          </div>
          <div className='card mx-auto p-4' style={{ width: '80%', marginBottom: '2rem' }}>
              <p>{ showData.content }</p>
          </div>
    </div>
  )
}

export default ShowPost