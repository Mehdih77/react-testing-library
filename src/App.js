import { OrderDetailsProvider } from "./contexts/OrderDetails";
import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}
export default App;
