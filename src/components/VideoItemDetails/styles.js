import styled from 'styled-components'

export const VIDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: lightblue;
  background-color: ${props => props.col};
`
export const VIDIV = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.col};
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
export const HFImg = styled.img`
  width: 400px;
`
export const VItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
`

export const HIProf = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  margin-top: 12px;
`

export const HILow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 12px;
  width: 100%;
`

export const HIDet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;

  p {
    margin: 2px 0;
    font-size: 14px;
    line-height: 1.4;
  }

  p:first-child {
    font-weight: 500; /* video title */
    font-size: 16px;
  }

  p:last-child {
    color: #606060; /* views + time */
    font-size: 13px;
    margin-left: 10px;
  }
`
export const VILike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const VILow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 250px;
`
export const VIBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-size: 14px;

  svg {
    margin-right: 5px;
  }
`
