import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { make_comment } from '../../actions/count';

function InputComp(props) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  //--- start This part of the code was not completed in time, but in  a few minutes after
  const escFunction = e => {
    console.log('LOL');
    if (e.keyCode === 27) setInputValue('');
  };

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => document.removeEventListener('keydown', escFunction, false);
  }, []);
  //--- end THIS WAS not completed in time

  return (
    <div>
      <input
        value={inputValue}
        onKeyPress={event => {
          // this was not completed in time but a few minutes after
          if (event.key === 'Enter') {
            dispatch(make_comment(inputValue));
            setInputValue('');
          }
        }}
        onChange={(e, val) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => dispatch(make_comment(inputValue))}>Submit</button>
    </div>
  );
}

export default InputComp;
