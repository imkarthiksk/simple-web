function Navbar() {
    name="karthi"
    if (name=="karthi") {
        console.log("crt one")
    }
    else{
        console.log("not looking for that")
    }
    return (
        <>
        <button onClick={Navbar}>click me</button>
        </>
    )
}
export default Navbar