import React from 'react';
import axios from 'axios';
import Answer from '../../Components/Answer';

class Quiz extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: '',
            isLoaded: false,
            movies: [],
            evaluation: '',
            correctans: false
        }
    }



    componentDidMount() {
        axios.get('top99movies.json')
        .then(res => this.setState({ movies: res.data }))
        //let title = this.state.movies[0] ? this.state.movies[0].title : null;
        fetch('http://www.omdbapi.com/?apikey=cd5550cd&t=Black+Panther')
            .then(res => res.json())
            .then(json => {
                this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

getQuestion = () => {
    let rindex = Math.floor(Math.random() * 100); 
    let title = this.state.movies ? this.state.movies[rindex].title : null;
    let titlefix = title.replace(/ /g,"+");
    console.log(titlefix);
    let address = 'http://www.omdbapi.com/?apikey=cd5550cd&t=' + titlefix;
    console.log(address);
    fetch(address)
            .then(res => res.json())
            .then(json => {
                this.setState({
                isLoaded: true,
                items: json,
            })
        });
}


// Answer
answer = (title) => {
    var { items} = this.state;
    this.setState ({ evaluation: title.toUpperCase() === items.Title.toUpperCase() ? "Correct!" : "Incorrect. Try again!"})
    this.setState ({ correctans: title.toUpperCase() === items.Title.toUpperCase() ? true : false})
    console.log(items.Title)
}

getStyle = () => {
    return{
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        color: this.state.correctans ?
        '#00cc00' : '#cc0000'
    }
}

    render() {
        var { items} = this.state;
        //if (!isLoaded) {
        //    return <div> Loading... </div>
        //}
        //else {

            return (
                <div className="Quiz" style={{textAlign: 'center'}}>
                    <p>
                        <header >
                            <h2>
                                Plot
                            </h2> 
                        </header>
                        {items.Plot}
                        <br />
                        <button onClick={this.getQuestion} style={btnStyle}>Try another</button>
                        <br />
                        <br />
                        <Answer answer={this.answer} />
                        <br />

                        <div style={this.getStyle()}>
                            {this.state.evaluation}
                        </div>

                    </p>
                </div>
            );
        //}
    }
}

const btnStyle = {
    background: '#666',
    color:      '#fff',
    border:     'none',
    padding:    '9px 9px',
    borderRadius: '12px',
    cursor: 'pointer',
    float: 'right'
}

export default Quiz;