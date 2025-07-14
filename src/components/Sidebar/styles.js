import styled from 'styled-components'

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  width: 20vw;
  height: 100vh;
  background-color: ${props => props.col};
`

export const SideItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  font-size: 20px;
  cursor: pointer;
`
export const Sidep = styled.p`
  margin-left: 10px;
`
export const SideIcon = styled.img`
  width: 30px;
`
