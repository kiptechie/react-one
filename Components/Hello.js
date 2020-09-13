class Hello extends React.Component {

    static defaultProps = {
        from : "Anonymous!",
        exclamation : 2
    }

   render() {
       let exclamation = "!".repeat(this.props.exclamation);
       return (
       <h1>Hello there {this.props.to}{exclamation}  from {this.props.from}</h1>  
       );
   }
}