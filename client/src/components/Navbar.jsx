import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 2rem',
            background: "#682594",
        }}
        className='bg-dark fixed-top'
        >
            <Link to="/" style={{textDecoration: "none", color: '#FFFFFF'}}>
                <h1 className="display-7">Social Contents</h1>
            </Link>
            <Link 
                to='/add'
                className="btn btn-primary" 
                style={{height: 'fit-content', margin: 'auto 0'}}
            >
                <i className="fa-solid fa-plus"></i> Add
            </Link>
        </div>
    </div>
  )
}

export default Navbar