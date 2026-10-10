
import Socials from "./Socials.tsx";
import socialsData from "../QoCLib/Socials.tsx";

     

function AboutMe(){
    const birth = new Date("04-06-2006");
    const diff = new Date().valueOf() - birth.valueOf();
    const age = Math.floor(diff / (52 * 24 * 60 * 60 * 1000));
    
    return (
        <div className="about_me">
            <h1 className="title">Katarina "Purrgo" Exiliard</h1>
            <Socials data={socialsData.data}/>
            <div className="about_me_info">
                <p className="about_me_info_text">Basic informations</p>
                <ul className="about_me_ul">
                    <li className="about_me_li">Transfem programer UwU</li>
                    <li className="about_me_li">Age : {age} cat years</li>
                    <li className="about_me_li">Time spent on debuging : way too much</li>
                    <li className="about_me_li">Plays guitar a lot but not good</li>
                    <li className="about_me_li">Rythm game player - Osu, Pump It Up, Phigros</li>
                </ul>
            </div>
            <div className="about_me_school">
                <p className="about_me_school_text">Education:</p>
                    <ul className="about_me_ul">
                        <li className="about_me_li">2011 - 2014: Private School Integrál</li>
                        <li className="about_me_li">2014 - 2017: Modrá School</li>
                        <li className="about_me_li">2017 - 2022: Palachova Elementary School</li>
                        <li className="about_me_li">2022 - Present: Prosek Secondary Technical School</li>
                    </ul>
                
            </div>
        </div>
    );
}

export default AboutMe;

// // Education:
//  2011–2014: Private School Integrál
//  2014–2017: Modrá School
//  2017–2022: Palachova Elementary School
//  2022–Present: Prosek Secondary Technical School