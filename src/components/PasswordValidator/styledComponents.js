// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainContainer = styled.div`
  padding: 2rem 2rem;
  border-radius: 10px;
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 350px;
  row-gap: 10px;
`

export const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-family: Roboto;
  font-size: 30px;
  text-align: center;
  margin-bottom: 0;
`

export const Text = styled.p`
  color: white;
  font-size: 15px;
  font-family: Roboto;
  text-align: center;
`

export const ErrorText = styled(Text)`
  color: red;
`

export const Input = styled.input`
  border: none;
  outline: none;
  height: 40px;
  width: 100%;
  margin-top: 40px;

  background-color: white;
`
