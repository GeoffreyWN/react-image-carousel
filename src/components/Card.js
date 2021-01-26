import React from 'react'

const styles = {
    card: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    img: {
        maxWidth: '100%',
        mxHeight: '100%',
        position:'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

const Card = (props) => {
    return (
        <div style={styles.card} className="card" id={props.myid}>
            <img style={styles.img} src={props.picsum} alt="awesome pic" />
        </div>
    )
}


export default React.memo(Card)