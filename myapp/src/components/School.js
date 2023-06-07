import Students from './Students'
import React, { Component } from 'react';

class School extends Component {
    render() {
        //נייצר לולאה שתרוץ על כל רשימת התלמידים ותשלח פרטי כל תלמיד
        return (
            <div>
                {this.props.students
                    .filter(_student => (this.props.filter_student_by_classId == 0 || !(_student.classId != this.props.filter_student_by_classId)))
                    .filter(_student => _student.birthYear >= this.props.filter_student_by_birthYear)
                    .map(_student =>
                    <Students firstName={_student.firstName}
                        lastName={_student.lastName}
                        email={_student.email}
                        birthYear={_student.birthYear}
                        classId={_student.classId}
                        id={_student.id}
                        key={_student.id} 
                        delete_student ={this.props.delete_student}/>) 
                }
            </div>  
        );
    }
}

export default School;