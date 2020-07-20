import React from 'react';

function CardList(props) {
    var output = [];
    props.cardpile.map(element => {
        output.push(
            <div className="bordered">
                <div>{element.id}</div>
                <div>{element.word}</div>
                <div>{element.definition}</div>
            </div>
        ) 
    });
    return(
        <div>
            {output}
        </div>
    )
}
export default CardList;