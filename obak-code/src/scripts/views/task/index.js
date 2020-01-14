import React, { Component } from 'react';
import BreadcrumbCustom from '../../components/breadcrumb';

class Task extends Component {
    render() {
        return (
            <div>
               <BreadcrumbCustom first={'工作单'} second={"任务单"}/>
            </div>
        );
    }
}

export default Task;