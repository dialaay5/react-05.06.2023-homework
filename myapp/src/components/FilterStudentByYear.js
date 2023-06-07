import React, { Component } from 'react';

class FilterStudentByYear extends Component{
    state = {
        birthyear_filter: 0
      }

      handleChange = (e) => {
        console.log(e.target.name);
    
        this.setState({
            birthyear_filter: e.target.value
        })
    
        this.props.filter_student_by_birthYear(e.target.value)
      }
    render() {
        return (
          <div>
            <h3>--Filter Student By BirthYear--</h3>
               <p>Filter Student:<input name="birthyear_filter" type="number" onChange={this.handleChange} 
                  value={this.state.birthyear_filter} placeholder="birthYear" /></p>              
          </div>
        );
      }
    }




export default FilterStudentByYear;