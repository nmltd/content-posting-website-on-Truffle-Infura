import React from 'react'

const Home = ({ trim, mappingData }) => {
  console.log(mappingData)
  return (
    <div>
      <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {mappingData.map(data => (
            <div className="card p-4" style={{ width: "80%", margin: '1rem 0' }}>
              <p><i className="fa-solid fa-user"></i> { data.alias }</p>
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