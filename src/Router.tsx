import { Routes, Route } from "react-router-dom"
import { DefaultLaayout } from "./layouts/DefaultLayout"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/home"
export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLaayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  )
}