import styled from 'styled-components'

export const Hdiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: lightblue;
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
export const HM = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`
export const HFImg = styled.img`
  width: 400px;
`
