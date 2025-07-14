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

export const Inp = styled.input`
  height: 36px;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px 0 0 4px;
  outline: none;
  width: 300px;
  background-color: #ffffff;
  color: #333333;

  &:focus {
    border-color: #3399ff;
    box-shadow: 0 0 4px rgba(51, 153, 255, 0.5);
  }
`

export const InpSearch = styled.button`
  height: 36px;
  padding: 0 12px;
  background-color: #3399ff;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #267acc;
  }
`

export const HSdiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`

export const RetryBtn = styled.button`
  background-color: wheat;
  border-radius: 10px;
  padding: 10px;
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

export const HItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const HHIITEMS = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const HFImg = styled.img`
  width: 400px;
`
