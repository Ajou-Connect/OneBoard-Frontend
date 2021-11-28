import { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import PfClass from "../Pages/LectureClass/professor/Index";
import StClass from "../Pages/LectureClass/student/Index";

function Class() {

    useEffect(() => {
        console.log('route to class');
    }, [])

    return (
        <Router>
            <Switch>
                <Route path="/class/pf" component={PfClass} />
                <Route path="/class/st" component={StClass} />
            </Switch>
        </Router>
    )
}

export default Class