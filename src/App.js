import React from 'react';

class App extends React.Component{
	state = {
		text : ""
	};
  
  update = (event) => {
    let start = event.target.selectionStart,
		end = event.target.selectionEnd,
		selection = event.target.value || '';
    
    selection = selection.substring(start, end);
    this.setState({text: "Debug: " + start + " " + end + " "  + selection});
  }
  
	render = () => {
		let options = [
			{id: 1, value: "testval", label: "testlabel"},
			{id: 2, value: "testval2", label: "testlabel2"},
			{id: 3, value: "testval3", label: "testlabel3"}    
		];
		return (
			<div Style="width: 90%;margin: 0 auto;">
				<h2>Test</h2>
				<Dropdown options={options}/>
				<div>{this.state.text}</div>
				<br/><br/>
				<TextEditor val={this.state.text} change={this.update}/>
			</div>
		);
	}
}

class TextEditor extends React.Component{
	render = () => {
  	return (
    	<textarea 
			Style="height: 400px;width: 100%;" 
			onChange={this.props.change}
			onClick={this.props.change}
			onKeyUp={this.props.change}/>
    );
  }
}

const Dropdown = (props) => {
	return (
		<select>[// auto increment this key	]
			{props.options.map(o => <option key={o.id} value={o.value}>{o.label}</option>)}
		</select>
  );
}


export default App;