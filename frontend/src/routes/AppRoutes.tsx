import { BrowserRouter, Route, Routes } from "react-router-dom"

import PageLayout from "../layout/PageLayout"
import Home from "../pages/Home"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default AppRoutes