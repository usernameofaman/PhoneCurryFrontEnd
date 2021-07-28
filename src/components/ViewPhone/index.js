import React, { Component } from 'react'
import ViewPhone from './ViewPhone' 

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
             phoneData:[],
             loading:"",
            };
      }

    componentDidMount = async () => {
        await this.loadPhoneData()
      }

    loadPhoneData = async () => {
            this.setState({loading:true})
            const res = await fetch("/viewPhones", {
                        method: "GET",
                        headers: {
                          "Content-Type": "application/json",
                        },})
                        .then((res) => res.json())
                        .catch((err)=> console.log(err));
            
            this.setState({phoneData:res.data})
            // console.log(this.state.phoneData)

    }



    render() {
        return (
           <ViewPhone state={this.state} phones = {this.state.phoneData} loadPhoneData={this.loadPhoneData}/>
        )
    }
}
