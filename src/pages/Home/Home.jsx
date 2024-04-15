// Importing necessary components and hooks from React
import React, { useState, useRef, useCallback } from 'react';

// Importing styles
import './Home.css';

// Define a functional component named Home
const Home = () => {

  // State variables for managing text input and generated slug
  const [text, setText] = useState(''); 
  const [slug, setSlug] = useState('');

  // Reference for the generated slug input field
  const slugRef = useRef(null); 

  // Event handler for text input change
  const handleChange = (e) => {
    setText(e.target.value); 
  }

  // Function to generate a slug from the input text
  const generateSlug = () => {
    if(text.length > 0) {
      const generatedSlug = slugify(text); 
      setSlug(generatedSlug); 
    } else {
      alert('Please enter a valid slug.');
    }
  }

  // Function to reset a slug from the input text
  const resetSlug = () => {
    setText('');
  }

  const slugify = (text) => {
    // Handle non-ASCII characters by transliterating them to ASCII or removing them
    const asciiText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
    // Replace special characters with dashes
    const slug = asciiText
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with dashes
      .replace(/^-+/, '') // Remove leading dashes
      .replace(/-+$/, ''); // Remove trailing dashes
    return slug;
  };  

  // Function to copy the generated slug to the clipboard
  const copySlugToClipboard = useCallback(() => {
    slugRef.current?.select(); // Select the text in the generated slug input field
    slugRef.current?.setSelectionRange(0, 999); // Set the selection range for the text
    window.navigator.clipboard.writeText(slug); // Copy the text to the clipboard
  }, [slug, slugRef]); // Depend on the slug state

  // Creating a variable to determine if the button should be disabled based on form inputs
  const isButtonDisabled = (text.trim() !== '');

  // JSX for the component
  return (
    <>
      <div className='slug'>
        <h1>Slug-Generator</h1>
        <div className='slug-container'>
          <div className='slug-form-input'>
            <label htmlFor='slugText'>Slug :</label>
            <input 
              type='text' 
              id='slugText' 
              name='slugText' 
              placeholder='Enter your text' 
              autoComplete='off' 
              autoCapitalize='off' 
              value={text} 
              onChange={handleChange}
            />
          </div>
          <div className='btn'>
            <button className='input-btn' onClick={generateSlug} disabled={!isButtonDisabled}>Generate Slug</button>
            <button className='reset-btn' onClick={resetSlug} disabled={!isButtonDisabled}>Reset Slug</button>
          </div>
          
          <span className='line'></span>

          {
            // Render if a slug is generated
            slug 
            ? 
            ( 
              <div className='slug-form-output'>
                <label htmlFor='generatedSlug'>Generated Slug :</label>
                <div className='slug-form-output-container'>
                  <input 
                    type='text'
                    id='generatedSlug' 
                    name='generatedSlug'
                    placeholder='Generated slug' 
                    autoComplete='off' 
                    value={slug} 
                    ref={slugRef} 
                    readOnly 
                  />
                  <button className='output-btn' onClick={copySlugToClipboard}>Copy</button>
                </div>
              </div>
            )
            :
            (
              <h3>Please Generate Slug - No Data To Display.</h3>
            )
          }
        </div>
      </div>
    </>
  );
}

// Export the Home component
export default Home;
