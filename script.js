function timetab(){
    const year= document.getElementById("year").value;
    const branch= document.getElementById("branch").value;
    const section= document.getElementById("section").value;

    let filename=year + branch + section+ ".html";
    window.location.href =filename;
}
