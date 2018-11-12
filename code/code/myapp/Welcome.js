import React, { Component } from 'react';

const Welcome = (props)=>{ // we MUST call this props as this is what REACT uses. (Property of component)
    return <h1> Welcome {props.name} {props.wibble}</h1>
}

export default Welcome;