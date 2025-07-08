import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  // useState()-  Manage UI input state and display updated password when any option changes.

  const passwordRef =  useRef(null);

  const passwordGenerator = useCallback(() => {
    //useCallback()-Prevents unnecessary re-creation of functions and improves performance
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*(){}[]~`';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length+1);
      //selecting any random value from the string
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassToClip= useCallback(()=>{
    //useRef()-  Direct DOM manipulation (highlighting the password before copying).
    passwordRef.current?.select() //highlighting selected part
  window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    //useEffect()- Automatically update password whenever user changes generation options.
    passwordGenerator();
  }, [length, numberAllowed,charAllowed, passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-700 '>
      <h1 className='text-white text-center text-2xl font-bold mb-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 text-black'
          placeholder='password'
          readOnly
          ref= {passwordRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPassToClip}
        >Copy</button>
      </div>

       <div className='flex text-sm gap-x-2'>
        <div className=' flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          {/* // e.target refers to the input element; e.target.value gives the current value typed by the user */}
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{  
            // callback fired
            setNumberAllowed((prev)=>!prev);
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{  
            // callback fired
            setCharAllowed((prev)=>!prev);
          }} />
          <label htmlFor="charInput">Special Characters</label>
        </div>
       </div>

    </div>
  );
}

export default App;
