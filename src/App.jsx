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
        <Banner status="success">
          <div className="banner-title-container">
            <Banner.Icon />
            <Banner.Title>Title goes here</Banner.Title>
          </div>
          <Banner.Description>Description goes here!</Banner.Description>
        </Banner>
      </div>
    </div>
  );
}

export default App;
