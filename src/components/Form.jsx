import React, { useState } from 'react'
import {
  encrypt,
  caesarDeHash,
} from '../Cypher/caesar-cipher'



const Form = () => {


  const [inputValue, setInputValue] = useState('')
  const [inputText, setInputText] = useState('')
  const [OutputText, setOutputText] = useState('')



  const HandleSubmit = (event) => {
    event.preventDefault();

    if (inputValue <= 0 || null) {
      setOutputText("Please Enter a valid Shift Number i.e, greater or equal to 1")
    }
    else {
      let CypherText = encrypt(inputText, inputValue);
      setOutputText(CypherText)
    }
  }
  const HandleDeHashing = (event) => {
    event.preventDefault();
    let cypherToText = caesarDeHash(inputText, inputValue)
    setOutputText(cypherToText);
  }
  const handleRefresh = (event) => {
    event.preventDefault();
    setInputText('');
    setOutputText('');
    setInputValue('');
  }

  return (
    <section className='min-h-96  font-mono  px-7 py-10'>
      <div className=''>
        <p className='font-bold text-2xl'>Caesar Cipher</p>
        <p className='text-neutral-800 leading-7 tracking-wide text-lg py-2'>
          The Caesar cipher, named after Julius Caesar,
          it is believed that he used it for secure communication
          between his troops and command. It is a type of substitution
          where each letter in the plaintext is shifted a certain number
          of places down or up the alphabet. The shift value is known
          as the cipher key.
        </p>
        <p className='font-bold text-2xl'>How to Use</p>
        <p className='text-neutral-800 leading-7 tracking-wide text-lg py-2'>
          <ol className='list-inside list-disc'>
            <li>Enter your text in Text input box</li>
            <li>Enter value of shift, this is where you'll tell this app to shift the given text to 'x' places</li>
            <li>Click Generate Cypher Button</li>
          </ol>
        </p>

      </div>
      <div className='rounded lg bg-slate-100 px-3 py-4'>
        <button className='hover:bg-slate-600 cursor-pointer border-2 border-slate-500 rounded-md py-1 px-1 bg-slate-500 text-yellow-50 text-lg'
          onClick={handleRefresh}
        >Refreash</button>

        <form onSubmit={HandleSubmit}>
          <div className='py-1'>
            <label htmlFor="Text" className='block my-1 text-lg'>Enter Text</label>
            <input
              type="text"
              className='border-1 w-full text-lg  border-slate-500 bg-slate-200 px-2 py-1 rounded-md'
              placeholder='Enter your text here'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}

            />
          </div>
          <div className='py-1'>
            <label htmlFor="Number" id='shiftLabel' className='block my-1 text-lg'>Shift</label>
            <input
              type="text"
              className='border-1 w-full text-lg  border-slate-500 bg-slate-200 px-2 py-1 rounded-md'
              placeholder='Enter shift by value'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className='my-3'>
            <button type="submit" className='hover:bg-slate-600 cursor-pointer border-2 border-slate-500 rounded-md py-1 px-3 bg-slate-500 text-yellow-50 text-lg'>Generate Cipher</button>
          </div>
        </form>
      </div>
      <div className='mt-4'>
        <p className='font-bold text-2xl'>Output</p>
        <div className='rounded lg bg-slate-100 px-12 py-4 text-lg flex items-center justify-between'>
          <div>
            {OutputText}
          </div>
          <div>
            <button
              className='hover:bg-slate-600 cursor-pointer border-2 border-slate-500 rounded-md py-1 px-3 bg-slate-500 text-yellow-50 text-lg'
              onClick={HandleDeHashing}
            >
              Get Back Text
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Form