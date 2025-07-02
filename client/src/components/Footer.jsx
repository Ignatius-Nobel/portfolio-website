import { Link } from "react-router-dom";


export default function Footer({navlinks}) {
  return (
    <div className="text-white relative bottom-0 left-0 p-8 font-minecraft text-xs">
        <hr className="bg-white"/>
        <ul className="flex mt-8 justify-center gap-6">
            {navlinks.map((link) => (
                <li key={link.text}className="hover:text-neutral-400"><Link to={link.path}>{link.text}</Link></li>
            ))}
        </ul>
    </div>
  )
}
