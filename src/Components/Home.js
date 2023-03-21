import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import './home.css'
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Pages/Dashboard";
import Pages from "./Pages/Pages";
import Form from "./Pages/Form";

function Home(){

    return(
        <>
        <div className="wrapper">
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <main className="main-container">
                <header>
                    <Header />
                </header>
                <div>
                
                <Routes>
                <Route path="/" element={<div>Home Page </div>}></Route>
                        <Route path="/dashboard" element={<Dashboard/>}></Route>
                        <Route path="/pages" element={<Pages />}></Route>
                        <Route path="/form" element={<Form />}></Route>
                </Routes>

                </div>
                <footer>
                    <Footer />
                </footer>
            </main>
        </div>
        </>
    )
}
export default Home;