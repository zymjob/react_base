import React, { Component, Fragment } from 'react';

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            keywords: '',
            list: ['haha', 'xixi', 'hehe']
        }
    }

    render(){
        return(
            <Fragment>
                <input value={this.state.keywords} onKeyUp={this.handleKey} onChange={this.handleChange} type='text' />
                <button onClick={this.handleClick}>提交</button>
                <ul>
                    {/* {this.renderList()} */}
                    {
                        this.state.list.map((value, index) => {
                            return <li onClick={()=>{
                                this.handleDelete(index)
                            }} key={index}>{value}</li>
                        })
                    }  
                </ul>
            </Fragment>
        )
    }

    handleChange = (e) => {
        this.setState({
            keywords: e.target.value
        })
    }

    handleClick = () => {
        // let arr = this.state.list;
        // arr.push(this.state.keywords);
        let arr = [...this.state.list, this.state.keywords];
        this.setState({
            list: arr,
            keywords: ''     
        })
    }

    //回车提交
    handleKey = (e) => {
        if(e.keyCode === 13){
            this.handleClick();
        }
    }

    //删除
    handleDelete(index){
        this.state.list.splice(index, 1);
        this.setState({
            list: this.state.list
        })
    }

    // renderList(){
    //     return this.state.list.map((value, index) => {
    //         return <li key={index}>{value}</li>
    //     }) 
    // }
    
}