import React, {Component} from 'react';
import logo from './logo.svg';


class Cards extends Component{
    state= {
        cardPile: null,
        activeCard: null,
        showingDefinition: null,
        title: null,
        definition: null,
        action: null,
    };

    componentDidMount(){
        let cards = this.props.cardpile;
        this.setState({
            cardPile: cards, 
        })
    };

    cardState(newcard){
        if (newcard != null && newcard !== -1) {
            this.setState({
            activeCard: newcard,
            showingDefinition: false,
            title: this.state.cardPile[newcard].word,
            definition: this.state.cardPile[newcard].definition
        })
        } 
        else {
            this.setState({
                activeCard: newcard,
                showingDefinition: false,
                title:null,
                definition: null
            })
        }     
    }

    nextCard(){
        var newcard;
        if(this.state.activeCard === null || this.state.activeCard === -1){
            newcard = 0;
        }
        else if (this.state.activeCard === this.state.cardPile.length -1) {
            newcard = -1;
        }
        else{
            newcard = this.state.activeCard+1;
        }
        this.cardState(newcard)
    }

    previousCard(){
        var newcard;
        if(this.state.activeCard === 0){
            newcard = null;
        }
        else if (this.state.activeCard === -1) {
            newcard= this.state.cardPile.length-1;
        }
        else{
            newcard = this.state.activeCard-1;
        }
        this.cardState(newcard)
    }

    showDefinition(){
        this.setState({
            showingDefinition: true,
        })
    }
    
    render(){
        if(this.state.cardPile===null){
            return (
                <div>No cards</div>
            )
        }
        else if(this.state.activeCard === null){
            return (
            <div className='flexcolumn centerMe' onClick= {() => this.nextCard()}>
                <div className='flexcolumn'>
                    <img src={logo} className="App-logo" alt="logo" />
                    Ready?
                </div>               
            </div>)
        }
        else if(this.state.activeCard === -1){
            return (
            <div className='flexcolumn centerMe'>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    end of stack
                </div>
                <div className='cardButtons'>                    
                    <div className='button' onClick= {() => this.previousCard()}>
                        Previous
                    </div>
                    <div className='button'onClick= {() => this.nextCard()}>
                        start over
                    </div>
                </div>
            </div>)
        }
        else if(this.state.showingDefinition !== true){
            return (
            <div className='flexcolumn centerMe'>
                <div className='flashcard' onClick={() => this.showDefinition()}>
                <img src={logo} className="App-logo" alt="logo" />
                    <div>
                        {this.state.activeCard}
                    </div>
                    <div>
                        {this.state.title}
                    </div>
                </div>
                <div className='cardButtons'>
                    <div className='button'onClick= {() => this.nextCard()}>
                        Next
                    </div>
                    <div className='button' onClick= {() => this.previousCard()}>
                        Previous
                    </div>
                    <div className='button' onClick= {() => this.showDefinition()}>
                        Show
                    </div>
                </div>
            </div>
            )
        }
        else{
            return (
            <div className='flexcolumn centerMe'>
                <div className='flashcard' onClick= {() => this.nextCard()}>
                <img src={logo} className="App-logo" alt="logo" />
                    <div>
                        {this.state.activeCard}
                    </div>
                    <div>
                        {this.state.title}
                    </div>
                    <div>
                        {this.state.definition}
                    </div>
                </div>
                <div className='cardButtons'>
                    <div className='button'onClick= {() => this.nextCard()}>
                        Next
                    </div>
                    <div className='button' onClick= {() => this.previousCard()}>
                        Previous
                    </div>
                </div>
            </div>
    
            )
        }        
    }
}
export default Cards;