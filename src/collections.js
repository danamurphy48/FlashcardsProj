import React, {Component} from 'react';
import Axios from 'axios';
import Cards from './Cards';
import * as APIInterface from './api-interface';
import logo from './logo.svg';
import Cardlist from './CardList'
//import EditCard from './EditCard'


class Collections extends Component{
    state={
        selected: null,
        collections: null,
        activeCollection: null,
        action: null,
        renderCollections: null,
        newDeckTitle: null,
    }


    componentDidMount(){
        Axios.get("https://localhost:44393/api/collection")
        .then((response) => {
            let somethingElse = this.renderCollections(response.data)
            this.setState({
                collections: response.data,
                renderCollections: somethingElse,
                selected: null,
                action:null,
            })
        }, (error) => {
            console.log(error);
        });
    };
//we think bug resides below
    setActive(number, collections){
        if (this.state.selected===number) {
            number=null
        }
        this.state.selected = number;
        // let activeCollection = this.state.collections[number];
        //this.state.activeCollection = collections[number];
        this.setState({
            selected: number,
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

    CollectionBar(){
            return(
                <div className='collections'>
                    <div className= 'collectionBar'>
                        {this.state.renderCollections}
                    </div>
                </div>
            );        
    }
    actionReview(){
        return(
            <div className='collections'>
                 <div>
                    {this.CollectionBar()}
                </div>
                <div className='flexcolumn'>
                    <div className='cards'>
                        <Cardlist cardpile = {this.state.activeCollection.cards} />
                    </div>
                    <div className='bordered'onClick= {() => this.setState({
                            action: null
                    })}>
                        back
                    </div>
                </div>
            </div>
        )
    }

    actionEdit(){
        return(
            <div className='collections'>
                 <div>
                    {this.CollectionBar()}
                </div>
                <div className='flexcolumn'>
                    <div className='cards'>
                        {/* <EditCard cardpile = {this.state.activeCollection} /> */}
                    </div>
                    <div className='bordered'onClick= {() => this.setState({
                            action: null
                    })}>
                        back
                    </div>
                </div>
            </div>
        )
    }
    actionTest(){
        return(
            <div className='collections'>
                 <div>
                    {this.CollectionBar()}
                </div>
                <div className='flexcolumn'>
                    <div className='cards'>
                    <Cards cardpile = {this.state.activeCollection.cards} />
                    </div>
                    <div className='bordered'onClick= {() => this.setState({
                            action: null
                    })}>
                        back
                    </div>
                </div>
                
            </div>
        )
    }
    newCardDeck(){
        this.setState({
            action: 'new',
        })
    }
    newDeck(){
        return (
            <div>
                <form>
                    <label>New Flashcard Deck Title:
                        <textarea value={this.state.newDeckTitle} onChange={() => this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    handleChange(event){
        this.setState({
            newDeckTitle: event.target.value
        });
    }    

    handleSubmit(event){
        APIInterface.ApiPostStack(this.state.newDeckTitle)//.then return sucess later
       // event.preventDefault();
    }
    areYouSure(){
        return(
            <div>
                <div className="bordered" onClick={()=>this.yes()}>
                    Yes
                </div>
                <div className="bordered" onclick={() => this.setState({
                                action: null
                            })}>
                    no
                </div>
            </div>
        )
    }
    yes(){
        APIInterface.ApiDeleteStack(this.state.activeCollection.id);
    }
    render(){
        if (this.state.action === null && this.state.selected != null) {
            return(
                <div className='collections'>
                    <div>
                        { this.CollectionBar()}
                    </div>
                
                    <div className='cards centerMe'>
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className='cardButtons'>
                            <div className='button'onClick= {() => this.setState({
                                action: 'test'
                            })}>
                                Test
                            </div>
                            <div className='button'onClick= {() => this.setState({
                            action: 'review'
                            })}>
                                Review
                            </div>
                            <div className='button'onClick= {() => this.setState({
                            action: 'edit'
                            })}>
                                edit
                            </div>
                            
                           
                        </div>
                        <div className='cardButtons'>
                            <div className='button'onClick= {() => this.setState({
                                action: null
                            })}>
                                back
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        else if (this.state.action === 'test'&& this.state.selected != null) {
            return this.actionTest();
        }
        else if (this.state.action==='review'&& this.state.selected != null) {
            return this.actionReview();
        }
        else if (this.state.action==='edit'&& this.state.selected != null) {
            return this.actionEdit();
        }
        else if (this.state.action==='new'&& this.state.selected != null) {
            return this.newDeck();
        }
        else if (this.state.action==='delete'&& this.state.selected != null) {
            return this.areYouSure();
        }
        else{
            return(                
                <div className='collections'>
                    <div>
                    {this.CollectionBar()}
                    </div>
                    <div className='button'onClick= {() => this.newCardDeck()}>
                        new card deck
                    </div>
                    <div className='button'onClick= {() => this.componentDidMount()}>
                                update card decks
                    </div>
                </div>
            )
        }
    }
}

export default Collections;