import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const container = {
    dispaly: 'flex'
}

const element = {
    flex: '1',
    textAlign: 'center',
    color: 'maroon',
    padding: '10px 15px'
}

const NavLink = styled(Link)`
    background-color: ${props => props.active ? 'red' : 'blue' }
`;

export default (props) => {
    const [path,setPath] = useState('index');
    return(
        <nav css={container}>
            <NavLink css={element} active = {path == 'index'} to="/">Inicio</NavLink>
            <NavLink css={element} onClick={ ev => setPath('about') } active = {path == 'about'} to="/about">Aerca</NavLink>
        </nav>
    )
}