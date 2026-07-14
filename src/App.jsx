import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
function App() {
  return (
    <div>
      <h1>Component Display</h1>
      <Badge color="green" variant="square">Badge</Badge>
      <Banner status="warning" >Banner title: banner description</Banner>
    </div>
  );
}

export default App;
