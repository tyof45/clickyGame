import React, {Component} from 'react';
import GridBox from '../GridBox/index'

class Grid extends Component {
    state = {
        score: 0,
        Grid: [
            {
                clicked: false,
                id: "id0",
            },
            {
                clicked: false,
                id: "id1"
            },
            {
                clicked: false,
                id: "id2"
            },
            {
                clicked: false,
                id: "id3"
            },
            {
                clicked: false,
                id: "id4"
            },
            {
                clicked: false,
                id: "id5"
            },
            {
                clicked: false,
                id: "id6"
            },
            {
                clicked: false,
                id: "id7"
            },
            {
                clicked: false,
                id: "id8"
            },
            {
                clicked: false,
                id: "id9"
            },
            {
                clicked: false,
                id: "id10"
            },
            {
                clicked: false,
                id: "id11"
            },
            {
                clicked: false,
                id: "id12"
            },
            {
                clicked: false,
                id: "id13"
            },
            {
                clicked: false,
                id: "id14"
            },
            {
                clicked: false,
                id: "id15"
            },
        ],
    }

    clicked (id) {
        for(let i = 0; i < this.state.Grid.length; i++){
            if(this.state.Grid[i].id === id){
                if(this.state.Grid[i].clicked === true){
                    alert("you lose");
                }else{
                    let duplicateArray = this.state.Grid.slice(0);
                    duplicateArray[i].clicked = true;
                    this.setState({Grid: duplicateArray});
                }
            }
        }
        this.shuffle()
    }

    shuffle () {
        let duplicateArray = this.state.Grid.sort(() => Math.random() - 0.5)
        this.setState({Grid: duplicateArray})
    }

    render () {
        return (
            <div id = "grid">
                {
                    this.state.Grid.map((grid, index) => {
                        if(index % 4 === 0 && index !== 0){
                            return <span><GridBox id = {this.state.Grid[index].id} clicked={()=> this.clicked(this.state.Grid[index].id)} /><br/></span>
                        } else {
                            return <span><GridBox id = {this.state.Grid[index].id} clicked={()=> this.clicked(this.state.Grid[index].id)} /></span>
                        }
                    })
                }
            </div>
        );
    }
}

export default Grid