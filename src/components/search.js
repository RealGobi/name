import React, { Component } from 'react'

export default class Search extends Component {

    filterUpdate(){
        const val = this.myValue.value;
        this.props.filterUpdate(val)
    }

    render() {
        return (
            <header>
                <form>
                    <input 
                    type="text"
                    ref={(value)=> this.myValue = value }
                    placeholder="Search here..."
                    onChange={this.filterUpdate.bind(this)}
                    />
                </form>
            </header>
        )
    }
}
