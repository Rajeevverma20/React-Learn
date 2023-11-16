import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props)
    
        this.state ={
            userInfo:{
                name: "Dummy",
                location: "Dummy"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Rajeevverma20");

        const json = await data.json();

        this.setState({
            userInfo:json,
        })
        console.log(json)
    }

    render () {

        const { count } = this.state;
      
        return (
            <div className="user-card">
                <h2>Name :{name}</h2>
                <h3>Location: Delhi</h3>
                <h4>Contact: @Rajeecv</h4>
            </div>
        )
    }

}

export default UserClass;