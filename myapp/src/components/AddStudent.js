import React, { Component } from 'react';

class AddStudent extends Component {
    state = {
        new_student_data: {
            firstName: "",
            lastName: "",
            email: "",
            birthYear: "",
            classId: "1"
        }
    }

    handleChange = (e) => {
        this.setState({
            new_student_data: {
                ...this.state.new_student_data, [e.target.name]: e.target.value
                // ...this.state.new_student_data (זאת אומרת לקחת את השדות כפי שהם ולהוסיף להם את הערך שהוקלד לכל שדה)
            }
        })
    }

    handleSubmit = (e) => {
        // כדי למנוע טעינה/רענון מחדש של הדפדפן
        e.preventDefault();

        this.props.add_student(this.state.new_student_data)
        //כדי להחזיר השדה ריק: 
        this.setState({
            new_student_data: {
                firstName: "",
                lastName: "",
                email: "",
                birthYear: "",
                classId: "1"
            }
        })
    }

    render() {
        return (
            <div>
                <h3>--Add New Student--</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>FirstName: <input name="firstName" type="text" onChange={this.handleChange}
                        value={this.state.new_student_data.firstName} placeholder="First Name" required /></p>

                    <p>LastName: <input name="lastName" type="text" onChange={this.handleChange}
                        value={this.state.new_student_data.lastName} placeholder="Last Name" required /></p>

                    <p>Email: <input name="email" type="email" onChange={this.handleChange}
                        value={this.state.new_student_data.email} placeholder="email" required /></p>

                    <p>BirthYear: <input name="birthYear" type="number" onChange={this.handleChange}
                        value={this.state.new_student_data.birthYear} placeholder="birth Year" required /></p>

                    <p>Choose classId:
                        <select name="classId" id="classId" onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select></p>
                    <button type="submit">Add Student</button>
                </form>
            </div>
        );
    }
}

export default AddStudent;