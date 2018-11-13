
const element = document.getElementById('file-tester');

class NewComponent extends React.Component{
    render(){
        return(
            <h2> THIS IS A COMPONENT FROM THE EXTERNAL JS FILE </h2>
        );
    }
}

ReactDOM.render(<NewComponent /> , element );