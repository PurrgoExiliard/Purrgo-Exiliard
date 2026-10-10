
function AboutMe(){
    const birth = new Date("04-06-2006");
    const diff = new Date().valueOf() - birth.valueOf();
    const age = Math.floor(diff / (52 * 24 * 60 * 60 * 1000));
    
    return (
        <div className="about_me">
            <h1 className="title">Katarina "Purrgo" Exiliard</h1>
            <div className="about_me_info">
                <ul>
                    <li>Age : {age} cat years</li>
                    <li>Time spent on debuging : way too much</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                
            </div>
        </div>
    );
}

export default AboutMe;