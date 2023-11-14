import NavBar from "../organs/NavBar";
import Footer from "../organs/Footer";
import './../Styles/PagesTailwinds.css';

export default function Entrepreneurship() {
    return (
        <div className="container-pages">
            <div className='container-internal-pages'>
                <NavBar />
                    <h1>Entrepreneurship</h1>    
            </div>
            <Footer />
        </div>
    )
}