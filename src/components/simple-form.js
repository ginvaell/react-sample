import React, {Component} from 'react';

//One text

export class SimpleForm1 extends Component {
  state = {
    value: '',
    text: ''
  };

  onClick = (e) => {
    this.setState((prevState, props) => {
      return {...prevState, text:prevState.value};
    });
  };

  onChange = (e) => {
    console.log(e, 'e');
    this.setState({value: e.target.value});
  };

  constructor(props) {
    super(props);
    console.dir(this);
  }

  render() {
    return (
      <form>
        <input value={this.state.value}  onChange={this.onChange}/>
        <button type="button" onClick={this.onClick}>{this.props.buttonText}</button>
        {this.props.children(this.state.text)}
      </form>
    );
  }
}