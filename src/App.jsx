import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";

const badgeColors = [
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const badgeVariants = ["square", "pill"];
const bannerStatus = ["success", "warning", "error", "neutral"];
function App() {
  return (
    <div>
      <h1>Reusable Components Display</h1>
      <h2>Badges</h2>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
      >
        {badgeColors.map((color) =>
          badgeVariants.map((variant) => {
            const badgeKey = `${color}-${variant}`;
            return (
              <Badge key={badgeKey} color={color} variant={variant}>
                {badgeKey}
              </Badge>
            );
          }),
        )}
      </div>
      <h2>Banners</h2>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <h3>Single line banner</h3>
        {bannerStatus.map((status) => (
          <Banner status={status}>
            <div className="banner-title-container">
              <Banner.Icon />
              <Banner.Title>Title goes here</Banner.Title>
            </div>
          </Banner>
        ))}
        <h3>Multi line banner</h3>
        {bannerStatus.map((status) => (
          <Banner status={status}>
            <div className="banner-title-container">
              <Banner.Icon />
              <Banner.Title>Title goes here</Banner.Title>
            </div>
            <Banner.Description>Description goes here!</Banner.Description>
          </Banner>
        ))}
      </div>
      <h2>Cards</h2>
      <div className="container">
        <Card>
          <Card.Icon></Card.Icon>
          <Card.Title>Card Title</Card.Title>
          <Card.Content>Card Content</Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default App;
