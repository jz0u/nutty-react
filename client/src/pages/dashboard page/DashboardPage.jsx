import "../../styles/DashboardPage.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
export default function DashboardPage() {
    return (
        <main id="DashBoardPage" className="Page">
            <Header />
            <div id="dashboard-main" className="main-content">
                <form id="logger-form">
                    <label>
                        <h3>food name:</h3>
                        <input type="text"></input>
                    </label>
                    <label>
                        <h3>food measurement:</h3>
                        <input type="text"></input>

                    </label>
                </form>
                <div>
                    <label>
                        <h3>food name:</h3>
                        <input type="text"></input>
                    </label>
                    <label>
                        <h3>food measurement:</h3>
                        <input type="text"></input>

                    </label>
                </div>
            </div>
            <Footer />
        </main>
    )
}