
import './App.css';
import Class from "./components/School";
import AddStudent from "./components/AddStudent";
import FilterStudentByYear from "./components/FilterStudentByYear";
import FilterStudentByClass from "./components/FilterStudentByClass";
import React, { Component } from 'react';


class App extends Component {
  static students_number = 3
  state = {
    my_students: [
      { firstName: "Danny", lastName: "Jones", email: "danny@gmail.com", birthYear: 2005, classId: 1, id: 1 },
      { firstName: "Maily", lastName: "Johnson", email: "maily@gmail.com", birthYear: 2006, classId: 2, id: 2 },
      { firstName: "Tom", lastName: "Smith", email: "tom@gmail.com", birthYear: 2007, classId: 3, id: 3 },
    ],
    filter: 0,
    filterByClass: 0
  }

  addStudent = student => {
    const new_students_list = [...this.state.my_students, { ...student, id: ++App.students_number }]
    this.setState({
      my_students: new_students_list
    })
    console.log(App.students_number);
  }

  filterStudentsByYear = _birthYear => {
    this.setState({
      filter: _birthYear
    })
  }

  filterStudentByClassId = _classId => {
    this.setState({
      filterByClass: _classId
    })
  }

  deleteStudent = _id =>{
    const new_students_list = this.state.my_students.filter(student => student.id !== _id)
      this.setState({
        my_students: new_students_list
      })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Students Project</h1>
          <AddStudent add_student={this.addStudent} />
          <hr />
          <FilterStudentByYear filter_student_by_birthYear={this.filterStudentsByYear} />
          <hr />
          <FilterStudentByClass filter_student_by_classId={this.filterStudentByClassId} />
          <hr />
          <h2>--Students List--</h2>
          <Class students={this.state.my_students}  
          filter_student_by_birthYear={this.state.filter}
          filter_student_by_classId={this.state.filterByClass}
          delete_student={this.deleteStudent}/>

          <hr />
        </header>
      </div>
    );
  }
}

export default App;
