import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({ trim, mappingData }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {mappingData.map(data => (
            <div className="card p-4" style={{ width: "80%", margin: '1rem 0', cursor: 'pointer' }} key={data.id} onClick={() => navigate(`/post/${data.id}`)}>
              <p className='text-primary'><i className="fa-solid fa-user"></i> { data.alias }</p>
              <h1 className="display-5">{data.title}</h1>
              <p>{trim(data.content)}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <p>Date: {data.date.toString()}</p>
                <p>Wallet Id: {data.walletId}</p>
              </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Home