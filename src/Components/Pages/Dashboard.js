import jsPDF from "jspdf";
function Dashboard(){
    //---------------------------------------Export PDF-----------------------------------------
    const exportPdf = () => {

        const dashboard = new jsPDF('portrait','pt','a4');
        dashboard.html(document.querySelector('#dashboard')).then(() => {
            dashboard.save('dashboard.pdf');
        })
    }

    return(
        <>
        <div id="dashboard">
        <h2>Dashboard Page</h2>
        <p>This is dashboard page</p>
        </div>
        <button onClick={exportPdf}>Export PDF</button>
        </>
    )
};
export default Dashboard;