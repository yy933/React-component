import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonial from "./components/Testimonial/index";

const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
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
        {colors.map((color) =>
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
          <Banner status={status} key={status}>
            <div className="banner-title-container">
              <Banner.Icon />
              <Banner.Title>Title goes here</Banner.Title>
            </div>
          </Banner>
        ))}
        <h3>Multi line banner</h3>
        {bannerStatus.map((status) => (
          <Banner status={status} key={status}>
            <div className="banner-title-container">
              <Banner.Icon />
              <Banner.Title>Title goes here</Banner.Title>
            </div>
            <Banner.Description>Description goes here!</Banner.Description>
          </Banner>
        ))}
      </div>
      <h2>Cards</h2>
      <div
        className="container"
        style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "50px",
        }}
      >
        {colors.map((color) => (
          <Card key={color}>
            <Card.Icon color={color}></Card.Icon>
            <Card.Title>Card Title goes here</Card.Title>
            <Card.Content>
              This is card content section. You can put whatever you want here.
            </Card.Content>
          </Card>
        ))}
      </div>
      <h2>Testimonials</h2>
      <div className="container">
        <Testimonial>
          <Testimonial.WithImage image="/testimonial-sample.webp">
            <Testimonial.Header>Testimonial Header</Testimonial.Header>
            <Testimonial.Content>Testimonial Content</Testimonial.Content>
            <Testimonial.Footer>Testimonial Footer</Testimonial.Footer>
          </Testimonial.WithImage>
        </Testimonial>
        <Testimonial>
          <Testimonial.WithoutImage>
            <Testimonial.Header>Testimonial Header</Testimonial.Header>
            <Testimonial.Content>Testimonial Content</Testimonial.Content>
            <Testimonial.Footer>Testimonial Footer</Testimonial.Footer>
          </Testimonial.WithoutImage>
        </Testimonial>
      </div>
    </div>
  );
}

export default App;
