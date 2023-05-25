 import React from 'react'
 import Header from './Header'
 
 export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            count:0,
            count1:1,
        }
    }
    componentDidMount(){
        // Best place to make API calls
    }
    componentDidUpdate(prevProps,prevState){
        //update on change just like dependency array use. in useeffect
    }
    componentWillUnmount(){
        //We do Cleanup here..
    // But what we cleanup actually??
    // Setinterval and Settimeout will work on and destroy optimization of full project...
    // we do it by using clearinterval here... 
    }

    render(){
        const {count,count1} = this.state;
        return (
        <>
        <h1>Profile Class</h1>;
        <h1>Author: {this.props.name}</h1>  
        {/* Access props in class based components  ~ */}
        <h2>Count: {count}</h2>
        <button onClick={()=>{
            this.setState({
                count:4
        });
    }}>
    SetCount</button>
        </>
        ); 
    } 
 }
//1:42:00