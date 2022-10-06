import TopBar from "./components/topBar";
import { Album_Top } from "./components/Album_Top";
import { useGlobalContext } from "./context";
import { Loading } from "./components/loading";

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) return <Loading />;
  return (
    <>
      <TopBar />
      <Album_Top />
    </>
  );
}

export default App;
