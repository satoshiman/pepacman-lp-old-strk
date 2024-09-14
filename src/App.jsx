import Container from "./components/Container";
import { StarknetProvider } from "./StarknetProvider";
import "./assets/style/font.scss";
import "./assets/style/custom.scss";
import "./assets/style/utils.scss";

export default function App() {
  return (
    <StarknetProvider>
      <Container />
    </StarknetProvider>
  );
}
