import "../components/EmpHome.css";
function EmpHome() {
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));

    return (
        <div className="emphome-container">
            <h1>Welcome {currentuser.name}</h1>
        </div>
    )
}
export default EmpHome