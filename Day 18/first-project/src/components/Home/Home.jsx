import Hero from "../Hero/Hero";
import Navbar from "../Navbar/navbar";
import About from '../About/About';
import Footer from "../Footer/Footer";
import { useState } from "react";

export default function Home() {
    let [counter, setCounter] = useState(0)
    let [counter2, setCounter2] = useState(0)
    let [navbar, setNavBar] = useState(0)
    // let [nums, setNums] = useState([1, 2, 3, 4, 5, 6])
    // let newNums = nums.map((num => num + 10))
    let name = 'Hide';

    function Increase(param) {
        setCounter(counter + param)
    }
    function Increase2(param2) {
        setCounter2(counter2 + param2)
    }
    function switchNav() {
        if (navbar == 0) { setNavBar(!navbar); name = 'Show' }
        else { setNavBar(!navbar); name = 'Hide' }
    }

    return (
        <>
            <Navbar check1={navbar} />
            <h1>More than 10 the button will disappear</h1>
            <h1>Counter: {counter}</h1>
            <br />
            <button className={counter >= 10 ? 'd-none d-grid gap-2 col-3 mx-auto' : 'btn btn-info d-grid gap-2 col-3 mx-auto'} onClick={function () { Increase(1) }}>Increase Counter</button>

            <br />
            <br />
            <br />
            <br />

            <h1>Even numbers with RED - Odd numbers with BLUE</h1>
            <h1>Counter: {counter2}</h1>
            <br />
            <button className={counter2 % 2 === 0 ? 'btn btn-danger d-grid gap-2 col-3 mx-auto' : 'btn btn-info d-grid gap-2 col-3 mx-auto'} onClick={function () { Increase2(1) }}>{counter2 % 2 === 0 ? 'RED' : 'BLUE'}</button>
            <br />
            <br />
            <br />
            <br />

            <h1>I used state and props here as showing the navbar and hiding it</h1>
            <button className={navbar ? 'btn btn-info d-grid gap-2 col-3 mx-auto' : 'btn btn-danger d-grid gap-2 col-3 mx-auto'} onClick={function () { switchNav() }}>{navbar ? 'Show' : 'Hide'} Navbar</button>

            <br />
            <br />
            <br />
            <br />


            {/* <div>
                <ul>
                    {newNums.map( (num) => <li className="bg-success text-center">{num}</li>)}
                </ul>
            </div> */}
            {/* {<Hero />} */}
            {/* {<About />} */}
            {/* {<Footer />} */}
        </>
    )
}