import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Step1 from './stepform/Step1';
import Step2 from './stepform/Step2';
import Step3 from './stepform/Step3';
import axios from 'axios';
const { ethereum } = window;


const Add = ({ auth, setAuth, setData, data, wallet, setWallet }) => {
    const [step, setStep] = useState(1);
    const [alias, setAlias] = useState("");
    const [title, setTitle] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const [classname, setClassname] = useState({ first: "active", second: "", third: "" });

    const prevStep = () => setStep(step - 1);
    const nextStep = () => setStep(step + 1);
    
    const stepClass = () => {
        if (step === 1) {
            setClassname({ first: 'active', second: '', third: '' });
        } else if (step === 2) {
            setClassname({ first: 'completed', second: 'active', third: "" });
        } else {
            setClassname({ first: 'completed', second: 'completed', third: 'active' });
        }
    }

    useEffect(() => { 
        stepClass()
    }, [step]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ alias, imageFile, content });
        setData([{ id: data.length+1, alias, imageFile, title, content, date: new Date(Date.now()), walletId: wallet }, ...data]);
        const response = await axios.post('http://localhost:8000', { id: data.length+1, alias, imageFile, title, content, date: new Date(Date.now()), walletId: wallet });
        console.log("Congratulations Your Post have been made and a NFT has been rewarded in your account ", response);
        navigate('/');
     }

    const stepForm = () => {
        if (step === 1) {
            return (
                <Step1 alias={alias} setAlias={setAlias} nextStep={nextStep} wallet={wallet} />
            );
        } else if (step === 2) {
            return (
                <Step2 title={title} setTitle={setTitle} imgUrl={imgUrl} setImageFile={setImageFile} setImgUrl={setImgUrl} nextStep={nextStep} prevStep={prevStep} />
            );
        } else {
            return (
                <Step3 content={content} setContent={setContent} handleSubmit={handleSubmit} prevStep={prevStep} />
            );
        }
    }    
    const connect = async () => {
        try {
          const addresses = await ethereum.request({ method: "eth_requestAccounts" });
          const account=addresses[0];
          setWallet(account);
          setAuth(true);
        } catch (e) {
          console.log("error in request", e);
          // location.reload();
        }
    };
    

  if (auth && wallet !== null) {
      return (
          <div className='container my-5 py-4 d-flex flex-column align-items-center'>
              <h1 className='display-6'>Add Content</h1>
              <div className="card" style={{ width: '80%' }}>
                  <div className="stepper-wrapper mt-3">
                    <div className={`stepper-item ${ classname.first }`}>
                        <div className="step-counter">1</div>
                        <div className="step-name">First</div>
                    </div>
                    <div className={`stepper-item ${classname.second}`}>
                        <div className="step-counter">2</div>
                        <div className="step-name">Second</div>
                    </div>
                    <div className={`stepper-item ${classname.third}`}>
                        <div className="step-counter">3</div>
                        <div className="step-name">Third</div>
                    </div>
                  </div>
                <div className="card-body d-flex flex-column align-items-center">
                      <form style={{ width: '70%' }} onSubmit={handleSubmit}>
                          { stepForm() }
                      </form>
                </div>
            </div>
          </div>
      )
  } else {
      return (
        <div className='container' style={{
              display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: "center",
            height: '80vh'
        }}>
            <h1 className='display-5'>You must connect your wallet to view this page</h1>
            <button className="btn btn-primary mt-5" onClick={()=>{console.log("clicked to send request to Metamask");connect();}}>Connect Metamask</button>
            
        </div>
      )
  }
}

export default Add