// import React from "react";

// class Student extends React.Component {
//     render() {
//         console.log(this.props);
//         const { name, marks } = this.props;
//         return (
//             <>
//                 <h1>Hello, {name}</h1>
//                 <h1>You have secured {marks} %</h1>
//                 <hr />
//             </>
//         )
//     }
// }


function Student(props) {
    const { name, marks } = props;
    return (
        <>
            <h1>Hello, {name}</h1>
            <h1>You have secured {marks} %</h1>
            <hr />

        </>
    )
}
export default Student;