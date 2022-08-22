import Navbar from "../components/Navbar"

interface Props {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return <main className="pages">
    <Navbar />
    {children}
  </main>
}

export default PageLayout