// Write your code here
import {useState} from 'react'
import {
  Container,
  MainContainer,
  Heading,
  Text,
  ErrorText,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const isValid = password.length >= 8

  console.log(isValid)

  return (
    <Container>
      <MainContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <Input type="password" value={password} onChange={onChangePassword} />
        {isValid ? null : (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </MainContainer>
    </Container>
  )
}

export default PasswordValidator
