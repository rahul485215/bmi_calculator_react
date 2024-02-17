import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');
  const [error,setError] = useState('');

  const calculateBmi =() =>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if(isValidHeight && isValidWeight){
      const heightInMeters = height/100;
      const bmiValue= weight/ (heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2))

        if(bmiValue<18.5){
          setBmiStatus("Under Weight")
        }else if(bmiValue>=18.5 && bmiValue<24.9){
          setBmiStatus("Normal Weight");
        }else if(bmiValue>=25 && bmiValue<29.9){
          setBmiStatus("Over Weight");
        }else{
          setBmiStatus("Obese")
        }
        setError(null);

      }
        else{
        setBmi(null);
        setBmiStatus(null);
        setError("Please enter valid numeric values for height and weight")
      }

    }
  const clearAll = () =>{
    setHeight('');
    setWeight('');
    setBmi(null);
    setBmiStatus(null);
  }

  return (
    <>
      <div className='bmi-calculator'>
        <div className="box"> </div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {error && <p className="error">{error}</p>}
          <div className="input-container">
            <label>Height (cm):</label>
            <input type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label>  weight (kg):</label>
            <input type="text" id="Weight" value={weight}  onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi!==null && (
            <div className='result'>
              <p>Your BMI is: <span>{bmi}</span></p>
              <p>Status: <span>{bmiStatus}</span> </p>
              </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
