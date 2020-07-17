import React, {Component} from 'react';
import * as APIRequest from './axios_requests';
import Axios from 'axios';
import Cards from './Cards';

class Collections extends Component{
    state={
        selected: null,
        collections: null,
        activeCollection: null,
        action: null,
        renderCollections: null
    }
    componentDidMount(){
        Axios.get("https://localhost:44393/api/collection")
        .then((response) => {
            let somethingElse = this.renderCollections(response.data)
            this.setState({
                collections: response.data,
                renderCollections: somethingElse
            })
        }, (error) => {
            console.log(error);
        });
    };
//we think bug resides below
    setActive(number){
        this.state.selected = number;
        let activeCollection = this.state.collections[number];
        this.state.activeCollection = activeCollection;
        this.setState({
            renderCollections: this.renderCollections(this.state.collections)
        })
    };

    renderCollections(someData){
        let output = [];
        for (let index = 0; index < someData.length; index++) {
            const element = someData[index];
            if (this.state.selected === index) {
                output.push(
                <div className= 'selected' onClick= {() => this.setActive(index)}>
                    <div>
                        {element.title}
                    </div>
                    <div>
                        {element.cards.length}
                    </div>
                </div>
            )
            }
            else {
                output.push(
                    <div className= 'border' onClick= {() => this.setActive(index)}>
                        <div>
                            {element.title}
                        </div>
                        <div>
                            {element.cards.length}
                        </div>
                    </div>
                )
            }
        }
        return output;
    }

    render(){
        return(
            <div className='collections'>
                <div className= 'collectionBar'>
                    {this.state.renderCollections}
                </div>
                <div className='cards'>
                    <Cards cards = {this.state.activeCollection} />
                </div>
            </div>
        );
    }
}

export default Collections;