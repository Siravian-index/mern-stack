import { BrowserRouter, Route, Routes } from "react-router-dom"
import WorkoutContext from "../context/WorkoutContext"

import PageLayout from "../layout/PageLayout"
import Home from "../pages/Home"

const WorkoutRoutes = () => {
  return (
    <WorkoutContext>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </WorkoutContext>

  )
}

export default WorkoutRoutes