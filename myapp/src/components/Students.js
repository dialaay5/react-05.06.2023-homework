import React, { Component } from 'react';


class Students extends Component {
    render() {
        console.log(this.props);
        //the properties:-
        const { id, profileImage, firstName, lastName, email, birthYear, classId } = this.props
        return (
            (<div key={id}>
                <p>ProfileImage: {profileImage}</p>
                <p>FirstName: {firstName}</p>
                <p>LastName: {lastName}</p>
                <p>Email: {email}</p>
                <p>BirthYear: {birthYear}</p>
                <p>ClassId: {classId}</p>
                <button style={{ color: 'red' }} onClick={() => this.props.delete_student(id)}>Delete</button>
                <hr />
            </div>)
        )
    }
}
export default Students;