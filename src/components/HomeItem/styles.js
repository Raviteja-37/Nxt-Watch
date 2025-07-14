import styled from 'styled-components'

export const HIDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  margin-bottom: 20px;
  height: 340px;
`

export const HImg = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
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
  justify-content: center;
  margin-top: 12px;
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
