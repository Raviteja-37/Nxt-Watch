import styled from 'styled-components'

export const LogDiv = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background-color: #fffaf0; /* soft floral white — blends well with wheat */
  align-items: center;
  justify-content: center;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  border: 1.5px solid wheat;
  box-shadow: 0 4px 20px rgba(245, 222, 179, 0.3);
  width: 30%;
`

export const LogLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
`

export const Img = styled.img`
  width: 180px;
`

export const LogForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 4px;
  }

  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #d7dfe9;
    font-size: 14px;
    outline: none;
    transition: border 0.2s ease;
  }

  input[type='text']:focus,
  input[type='password']:focus {
    border-color: #4f46e5;
  }

  input[type='checkbox'] {
    margin-right: 8px;
  }

  p {
    color: red;
    font-size: 13px;
    margin: 4px 0 0;
  }
`
export const Logbtn = styled.button`
  background-color: wheat;
  border: none;
  border-radius: 8px;
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #f5deb3; /* Slightly darker wheat on hover */
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`
