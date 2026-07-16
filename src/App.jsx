import { useRef } from "react";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonial from "./components/Testimonial/index";
import BackToTopButton from "./components/Button/BackToTopButton";

const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
const badgeVariants = ["square", "pill"];
const bannerStatus = ["success", "warning", "error", "neutral"];
const components = ["Badge", "Banner", "Card", "Testimonial"];
function App() {
  const topRef = useRef(null);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div ref={topRef} style={{ position: "relative", paddingBottom: "100px" }}>
      <h1>Reusable Components Display</h1>
      <div
        className="container"
        style={{ flexDirection: "row", flexWrap: "wrap", gap: "10px" }}
      >
        {components.map((component) => {
          return (
            <Badge
              key={`${component}-button`}
              color="gray"
              variant="square"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection(component.toLowerCase())}
            >
              {component}
            </Badge>
          );
        })}
      </div>

      <div
        id="badge"
        className="container"
      >
        <h2>Badges</h2>
        <div
          className="badge-contents"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
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
      </div>

      <div
        id="banner"
        className="container"
      >
        <h2>Banners</h2>
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

      <div
        id="card"
        className="container"
      >
        <h2>Cards</h2>
        <div
          className="cards-content"
          style={{
            width: "100%",
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
                This is card content section. You can put whatever you want
                here.
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>

      <div
        id="testimonial"
        className="container testimonial-container"
      >
        <h2>Testimonials</h2>
        <Testimonial.WithImage
          image="/testimonial-sample.webp"
          imageAlt="May Andersons profile picture"
        >
          <Testimonial.Header>May Andersons</Testimonial.Header>
          <Testimonial.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Testimonial.Content>
          <Testimonial.Footer>Workcation, CTO</Testimonial.Footer>
        </Testimonial.WithImage>

        <Testimonial.WithoutImage>
          <Testimonial.Header>Workcation Logo</Testimonial.Header>
          <Testimonial.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Testimonial.Content>
          <Testimonial.Footer>
            May Andersons / Workcation, CTO
          </Testimonial.Footer>
        </Testimonial.WithoutImage>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default App;
