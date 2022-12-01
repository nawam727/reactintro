const Home = () => {

    const handleClick = () => {
        console.log("hello, guys");
    }

    const handleClickAgain = (name) => {
        console.log("Hello " + name);
    }
    return (
        <div className="hpme">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() =>{
                handleClickAgain("Mario")
            }}>Click me Again</button>
        </div>
    );
}
 
export default Home; 