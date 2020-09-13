class CallOfDutyOperators extends React.Component {
    render() {
        const ops = this.props.cod;
        return (
             <div className="card">
                 <h1> Call of Duty Operators</h1>
                 <ul>
                    {ops.map(soldier => <li>{soldier}</li>)}
                 </ul>
             </div>
        );
    }
}