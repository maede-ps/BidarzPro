import ListItems from "./sections/ListItems";
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import Form from "./sections/Form";
import Nav from "./sections/Nav";
import VideoContent from "./sections/VideoContent";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <VideoContent />
      <ListItems />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
