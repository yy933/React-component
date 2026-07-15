import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
function App() {
  return (
    <div>
      <h1>Component Display</h1>
      <div className="container">
        <Badge color="green" variant="square">
          Badge
        </Badge>
      </div>

      <div className="container">
        <Banner status="warning">
          <Banner.Title>Warning</Banner.Title>
          <Banner.Description>Warning description</Banner.Description>
        </Banner>
      </div>
    </div>
  );
}

export default App;
