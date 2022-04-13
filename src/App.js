import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Animal from "./Pages/Animal";
import Login from "./Pages/Login";

function App() {
  const state = useSelector((state) => state.userReducer);
  if (state.isLogin) {
    return (
      <div className="wrapper-content">
        <Header />
        <Animal />
      </div>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}

export default App;
