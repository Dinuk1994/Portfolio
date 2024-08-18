import { Toaster } from "react-hot-toast";
import Page1 from "./component/Contents";
import NavBar from "./component/NavBar";
import Page2 from "./component/Page2";

export default function App() {
  return (
    <h1 className=" bg-bg-color -z-10">
      <div className="grid ">
        <NavBar />
        <Page1 />
        <Page2/>
        <Toaster/>
      </div>
    </h1>
  )
}