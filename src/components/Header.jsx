import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {Container} from './Container' 
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom' 
const HeaderEl = styled.header` 
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base)
`

const Wrapper = styled.div` 
    display:flex; 
    justify-content: space-between; 
    align-items:center; 
    padding:2rem;
` 

const Title = styled(Link).attrs({ 
    to:'/'
})` 
    color: var(--colors-text); 
    font-size: var(--fs-sm); 
    text-decoration: none; 
    font-weigth: var(--fw-bold);
`

const ModeSwitcher = styled.div`
color: var(--colors-text); 
font-size: var(--fs-sm);  
cursor: pointer; 
text-transform:capitalize; 
display:flex; 
align-items:center
`
const Header = () => { 
    const [theme, setTheme] = useState('light') 
    const onTogle = () =>{ 
        if(theme === 'light'){ 
            setTheme('dark')
        }else{ 
            setTheme('light')
        }
    }
    useEffect(() =>{ 
        document.body.setAttribute('data-theme', theme)
    },[theme])   
  return (
    <> 
        <HeaderEl> 
            <Container> 
                <Wrapper> 
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={onTogle}> 
                    {theme === 'ligth' ? 
                    <>  
                    <IoMoonOutline size={'14px'}/>{''}<span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                    </> 
                    : 
                    <><IoMoon size={'14px'}/>{''}<span style={{marginLeft: '0.75rem'}}>{theme} Theme</span></>}
                        
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    </>
  )
}

export default Header