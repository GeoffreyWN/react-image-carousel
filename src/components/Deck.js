import React, { Component, Fragment } from 'react'
import Card from './Card';

const styles = {
    view_port: {
        margin: 0,
        padding: 0,
        width: '500px',
        height: '300px',
        position:'absolute',
        top: '50%',
        left: '50%',
        // overflow: 'hidden',
        transform: 'translate(-50%, -50%)'
    },
    images_container: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    touch_area: {
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '300px',
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 0,0,0.2)',
        zIndex: 9999 ,
    },

}

export class Deck extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cards: [],
             number_of_cards_by_index: 2
        }
    }
    
    componentDidMount() {
        const new_cards = [];

        for (let index = 0; index <= this.state.number_of_cards_by_index; index++) {
            new_cards.push(
                <Card picsum={`https://picsum.photos/600/${350 + index}`} />
            )
        }

        this.setState({cards: new_cards}, () => {})
    }

    render() {
        return (
           <Fragment>
               <button id="prev">Prev</button>
               <button id="next">Next</button>

               <div ref={ref_id => this.touch_area} style={styles.touch_area} >

               </div>
               <div ref={ref_id => this.view_port} style={styles.view_port} >
                   <div  ref={ref_id => this.images} style={styles.images_container} >
                   { this.state.cards}
                   </div>
               </div>
           </Fragment>
        )
    }
}



export default Deck
