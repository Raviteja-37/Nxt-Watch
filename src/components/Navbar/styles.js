import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100vw;
  background-color: ${props => props.col};
`
export const Navbtn = styled.button`
  background-color: transparent;
  border: solid;
  border-width: 2px;
  border-color: lightblue;
  color: lightblue;
  border-radius: 10px;
  width: 80px;
  cursor: pointer;
  font-size: 17px;
  height: auto;
  padding: 5px;
`
export const NavLogo = styled.img`
  width: 200px;
`

export const Navprof = styled.img`
  width: 30px;
`
export const Navleft = styled(Nav)`
  width: 250px;
`
export const Themebtn = styled(Navbtn)`
  width: 30px;
  font-size: 25px;
  border: none;
`

export const LefTT = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  width: 300px;
  margin-right: 10px;
  color: #8b4513;
`

export const PopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 400px;
  height: 200px;
  background-color: wheat;
  border-radius: 10px;
`

export const PopBtn = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : 'lightblue')};
  padding: 10px;
  border-radius: 10px;
  width: 90px;
  height: 40px;
  margin: 10px;
  pointer: cursor;
  cursor: pointer;
`

export const PopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
