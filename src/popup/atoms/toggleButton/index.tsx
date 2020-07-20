import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

const id = uuidv4();

const ToggleButton : React.FunctionComponent = () => (
  <>
    <input id={id} className='tgl tgl-flat' type='checkbox'></input>
    <label className='tgl-btn' htmlFor={id}></label>
  </>
);

export default ToggleButton;
