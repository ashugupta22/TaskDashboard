import jsPDF from "jspdf";
function Form(){
    
    const exportPdf = () => {

        const form = new jsPDF('portrait','pt','a4');
        form.html(document.querySelector('#form')).then(() => {
            form.save('form.pdf');
        })
    }

    return(
        <>
        <div id="form">
        <h2>Form Page</h2>
        <p>This is Form page</p>
        </div>
        <button onClick={exportPdf}>Export PDF</button>
        </>
    )
};
export default Form;