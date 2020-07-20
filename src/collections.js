import React, {Component} from 'react';
import * as APIRequest from './axios_requests';
import Axios from 'axios';
import Cards from './Cards';
import * as APIInterface from './api-interface';

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
    setActive(number, collections){
        this.state.selected = number;
        // let activeCollection = this.state.collections[number];
        //this.state.activeCollection = collections[number];
        this.setState({
            activeCollection: this.state.collections[number],
            renderCollections: this.renderCollections(this.state.collections)
        })
    };

    renderCollections(collections){
        let output = [];
        for (let index = 0; index < collections.length; index++) {
            const element = collections[index];
            if (this.state.selected === index) {
                output.push(
                <div className= 'selected' onClick= {() => this.setActive(index, collections)}>
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
        if (this.state.selected===null) {
            return(
                <div className='collections'>
                    <div className= 'collectionBar'>
                        {this.state.renderCollections}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className='collections'>
                    <div className= 'collectionBar'>
                        {this.state.renderCollections}
                    </div>
                    <div className='cards'>
                        <Cards cardpile = {this.state.activeCollection.cards} />
                    </div>
                </div>
            );
        }
    }
}

export default Collections;