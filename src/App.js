import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { Themes } from "./components/Themes/Themes";
import { Header } from "./components/Header/Header";
import { Typography } from "./components/Typography/Typography";

function App() {
  return (
    <Themes>
      <Styles />
        <Header>
          <h1>Freelas</h1>
        </Header>
      <Card>
        <Typography variable="h1">Freelas</Typography>
      </Card>
    </Themes>
  );
}

export default App;
