import React, {Component} from 'react';
import * as API from './api-interface'

class CardEdit extends Component{
    state = {
        cardPile:null,
        activeCard: null,
        title: null,
        newTitle: null,
        definition: null,
        newDefinition: null,
        sucess: null,
    }
    componentDidMount(){
        this.setState({
            cardPile: this.props.cardpile,
        })
    }
    render(){
        if (condition) {
            
        }
        else if (condition) {
            
        } else {
            
        }
    }
}
export default CardEdit;