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
export const HM = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`
export const HCentered = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
`
export const HFImg = styled.img`
  width: 400px;
`
export const RetryBtn = styled.button`
  background-color: wheat;
  border-radius: 10px;
  padding: 10px;
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

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
