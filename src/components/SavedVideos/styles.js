import styled from 'styled-components'

export const Hdiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: #20b2aa;
  background-color: ${props => props.col};
`
export const MDIV = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.col};
`

export const HB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  overflow: scroll;
  height: 100vh;
`
export const NSaved = styled(HB)`
  align-items: center;
  justify-contend: center;
`

export const HFImg = styled.img`
  width: 400px;
`
export const ItemNav = styled.div`
  display: flex;
  flexdirection: row;
  width: 100%;
`
export const ItemNavImg = styled.div`
  background-color: grey;
  border-radius: 50%;
  margin: 10px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: orange;
`
