import React from 'react'

const Step3 = ({ setContent, content, prevStep, handleSubmit }) => {
  return (
      <div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Write about your work</label>
            <textarea
                name="content"
                id="content"
                cols="30"
                rows="10"
                value={content}
                className='form-control'
                onChange={(event) => {setContent(event.target.value)}}
            />
        </div>
        <div className='mt-4' style={{ display: 'flex', width: '100%' }}>
            <button className='btn btn-primary' type='button' onClick={() => prevStep()}>PrevStep</button>
            <button className='btn btn-primary' type='submit' style={{ marginLeft: '1rem' }} onClick={() => handleSubmit()}>Submit</button>
        </div>
    </div>
  )
}

export default Step3