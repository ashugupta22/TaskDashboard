import jsPDF from "jspdf";
function Pages(){
    const exportPdf = () => {

        const pages = new jsPDF('portrait','pt','a4');
        pages.html(document.querySelector('#pages')).then(() => {
            pages.save('pages.pdf');
        })
    }

    return(
        <>
        <div id="pages">
        <h2>Pages Page</h2>
        <p>This is Pages page</p>
        </div>
        <button onClick={exportPdf}>Export PDF</button>
        </>
    )
};
export default Pages;