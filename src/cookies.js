import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router';

const Cookies = () => {
   const [cookies, setCookie] = useCookies(['user']);
    setCookie('user','admin',{ path: '/' });
   
};
export default Cookies;