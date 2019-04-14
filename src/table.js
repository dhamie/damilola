import React, {Component} from 'react';


const TableBody = props => {
    const rows = props.characterData.map((row, index) => {

        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const TableHeader1 = () => { 
    return (
        <h1>hello</h1>
    );
}

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        
        return (
            <table className="table">
                
                <TableHeader />
                <TableHeader1 />
                <TableBody 
                    characterData = {characterData}
                    removeCharacter={removeCharacter}  
                />
            </table>
        );
    }
}






export default Table;