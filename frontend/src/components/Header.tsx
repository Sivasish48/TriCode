import { Link } from "react-router-dom"
import { Button } from "./ui/button"

function Header() {
  return (
    <nav className="w-full h-[60px] text-white p-3 bg-black flex justify-between items-center">
      <Link to="/home" ><h3  className="text-2xl font-bold">TriCode</h3></Link>
      <Button variant={"ghost"}><Link to="/compiler"><h3 className="text-xl font-bold flex justify-end">Compiler </h3></Link></Button>
    </nav>
  )
}

export default Header