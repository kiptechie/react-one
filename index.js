class App extends React.Component {
	render() {
		const operators = ["Mara", "Ghost", "Captain Price", "Battery", "Mace"];
		return (
			<div className="text-center">
				 <Hello to="Serem" from="Poet" exclamation="3" />
				 <NumPicker />
				 <h1>Machine Component</h1>
                 <h2>Slot Machines!</h2>
				 <Machine s1="😎" s2="🙌" s3="👍"/>
				 <Machine s1="😎" s2="😎" s3="👍"/>
				 <Machine s1="👍" s2="👍" s3="👍"/>
				 <CallOfDutyOperators cod={operators} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
