import "./Navigationbar.css"
import './style.css'
export default function Navigationbar(){
    return(
        <nav>
            <ul>
                <li> <a href="/">Add User Record</a></li>
                <li> <a href="/allusers">All Users Record</a></li>
            </ul>
       
        </nav>
    )
}