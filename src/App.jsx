import Banner from "./components/Banner/Banner"
import Clients from "./components/Clients/Clients"
import Community from "./components/Community/Community"
import Customer from "./components/Customer/Customer"
import Design from "./components/Design/Design"
import GetDemo from "./components/GetDemo/GetDemo"
import Local from "./components/Local/Local"
import Marketing from "./components/Marketing/Marketing"
import Navbar from "./components/Navbar/Navbar"
import Unseen from "./components/Unseen/Unseen"


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Clients></Clients>
      <Community></Community>
      <Unseen></Unseen>
      <Local></Local>
      <Design></Design>
      <Customer></Customer>
      <Marketing></Marketing>
      <GetDemo></GetDemo>
    </>
  )
}

export default App
