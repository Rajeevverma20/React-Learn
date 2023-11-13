import User from "./uSER.JS";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div>
            <h1>About page</h1>
            <User />
            < UserClass name={"Rajeev Class"} />
        </div>
    )
}

export default About;