import "../components/HrHome.css";
function HrHome() {
    //JSON.stringfy=>convert data into JSON format
    //JSON.parse=>convert JSON format to string
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    return (
        <div className="hrhome-container">
            <h1>Welcome {currentuser.name}</h1>
        </div>
    )
}
export default HrHome