import React, {Component} from 'react';
import * as API from './api-interface';

class CardEdit extends Component{
    state = {
        stack: null,
        cardPile:null,
        activeCard: null,
        title: null,
        newTitle: null,
        definition: null,
        newDefinition: null,
        success: null,
        renderedCards: null
    }
    componentDidMount(){
        this.setState({
            cardPile: this.props.cardpile.cards,
            stack: this.props.cardpile.title,
        })
    }

    createNewCard(){       
        return (
            <div>
                <form>
                    <label>Word:
                        <textarea value={this.state.newTitle} onChange={this.handleChange}/>
                    </label>
                    <label>Definition:
                        <textarea value={this.state.newDefinition} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }    

    handleSubmit(event){
        API.ApiPostCard(this.state.stack,this.this.state.newTitle,this.state.newDefinition)//.then return sucess later
        //event.preventDefault();
    }

    render(){
        if (newTitle == true) {
            
        }
        else if (condition) {
            
        } else {
            
        }
    }
}
export default CardEdit;