import Head from "./components/Head";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Head />
      <Body/>
      {/*
      - Head
      - Body
         - Sidebar
            - MenuItems
         - MainContainer
            - ButtonsList
            - VideoContainer
               - VideoCard   
       */}
    </div>
  );
}

export default App;
