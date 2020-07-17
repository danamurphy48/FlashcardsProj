import React, {Component} from 'react';
import logo from './logo.svg';

class Cards extends Component{
    state= {
        cardPile: null,
        activeCard: null,
        showingDefinition: null,
        title: null,
        definition: null
    };

    componentDidMount(){
        this.setState({
            cardPile: this.props.cards, 
        })
    };

    cardState(){
        this.setState({
            showingDefinition: false,
            title: this.state.cardPile[this.state.activeCard].word,
            definition: this.state.cardPile[this.state.activeCard].definition
        })
    }

    nextCard(){
        if(this.state.activeCard === null){
            this.state.activeCard = 0;
        }
        else{
            this.state.activeCard++;
        }
        this.cardState()
    }

    previousCard(){
        if(this.state.activeCard === 0){
            this.state.activeCard = null;
        }
        else{
            this.state.activeCard--;
        }
        this.cardState()
    }

    showDefinition(){
        this.setState({
            showingDefinition: true
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
            <div className='flexcolumn' onClick= {() => this.nextCard()}>
                <img src={logo} className="App-logo" alt="logo" />
                Ready?
            </div>)
        }
        else if(this.state.showingDefinition !== true){
            return (
            <div>
                <div className='flashcard'>
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
                </div>
            </div>
            )
        }
        else{
            return (
            <div>
                <div className='flashcard'>
                <img src={logo} className="App-logo" alt="logo" />
                    <div>
                        {this.state.activeCard}
                    </div>
                    <div>
                        {this.state.title}
                    </div>
                    <div>
                        {this.state.showingDefinition}
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