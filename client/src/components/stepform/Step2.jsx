import React from 'react'

const Step2 = ({ title, setTitle, setImageFile, setImgUrl, imgUrl, prevStep, nextStep }) => {
  return (
      <div>
          <div className="mb-3">
              <label htmlFor="title" className="form-label">Title of the post...</label>
            <input
                className="form-control mb-4"
                type="text"
                  id="title"
                  value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
            }} />
            <label htmlFor="formFile" className="form-label">Upload a Cover Picture</label>
            <input
                className="form-control"
                type="file"
                id="cover"
                accept='image/*'
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setImageFile(event.target.files[0]);
                    setImgUrl(URL.createObjectURL(event.target.files[0]));
            }} />
        </div>
        <img src={imgUrl} alt="" style={{ width: '50%' }} />
        <div className='mt-4' style={{ display: 'flex', width: '100%' }}>
            <button
                className='btn btn-primary'
                type='button'
                onClick={() => prevStep()}
            >
                PrevStep
            </button>
            <button
                className='btn btn-primary'
                type='button'
                style={{ marginLeft: '1rem' }}
                onClick={() => nextStep()}
            >
                NextStep
            </button>
        </div>
    </div>
  )
}

export default Step2