import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrolltoTop() {
     const {pathname} = useLocation();
     useEffect (() =>{
        window.scrollTo({
            top:0,
            behavior:'auto'
        });
     },[pathname]);
 
     return null;
}
