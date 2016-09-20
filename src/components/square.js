import React from 'react'
import {SYMBOLS} from '../constants'

export default React.createClass({

    render(){
        return (
            <div onClick={this.onClick} className={this.classList()}>
                {this.props.symbol ? SYMBOLS[this.props.symbol.toLowerCase()] : ''}
            </div>
        )
    },

    classList(){
        return [
            'square',
            this.props.isActive ? 'active' : '',
            this.props.isLegalMoveForActiveSquare ? 'legal' : '',
            this.props.isMovable ? 'movable' : '',
            this.props.symbol && this.props.symbol == this.props.symbol.toUpperCase() ? 'white-piece' : ''
        ].join(' ')
    },

    onClick(event){

        if (this.props.isLegalMoveForActiveSquare){
            this.props.makeMove()
            return
        }

        this.props.isActive ? this.props.clearActiveSquare() : this.props.setAsActiveSquare()
    }

})
