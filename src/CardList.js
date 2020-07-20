import React from 'react';

function CardList(props) {
    var output = [];
    props.cardpile.forEach(element => {
        output.push(
            <div className="border">
                <div>element.id</div>
                <div>element.title</div>
                <div>element.definition</div>
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