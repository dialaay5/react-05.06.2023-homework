import { Component } from "react";

class FilterStudentByClass extends Component {
    state = {
        classId_filter: 0
    }

    handleChange = (e) => {
        console.log(e.target.name);

        this.setState({
            classId_filter: e.target.value
        })

        this.props.filter_student_by_classId(e.target.value)
    }
    render() {
        return (
            <div>
                <h3>--Filter Student By ClassId--</h3>
                <p>Filter Student:<input name="classId_filter" type="number" onChange={this.handleChange}
                    value={this.state.classId_filter} placeholder="classId" /></p>
            </div>
        );
    }
}

export default FilterStudentByClass;
