import React from 'react'

const Step1 = ({ alias, setAlias, nextStep, wallet }) => {
  return (
      <div>
        <p>Wallet ID : <b>{wallet !== null ? wallet : ""}</b></p>
        <div className="mb-4">
            <label htmlFor="alias" className="form-label">Enter Your Alias</label>
            <input
                type="text"
                className="form-control"
                id="alias"
                value={alias}
                onChange={(event) => setAlias(event.target.value)}
            />
        </div>
        <button className='btn btn-primary' type='button' onClick={() => nextStep()}>NextStep</button>
    </div>
  )
}

export default Step1