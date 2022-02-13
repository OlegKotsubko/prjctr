import Content from "../components/Content/Content";
import Input from "../components/Input/Input";

const LogInPage = () => {
  return (
    <Content>
      <Input
        placeholder="Login"
        type="text"
      />
      <Input
        placeholder="Password"
        type="password"
      />
    </Content>
  )
}

export default LogInPage;
