import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function Registration(){

  return (
    <>
    <label>doctor id</label>
    <input type="text" />
    <button>register</button>
    <Link to='/login'><button>login</button></Link>
    </>
  );
};

export default Registration;