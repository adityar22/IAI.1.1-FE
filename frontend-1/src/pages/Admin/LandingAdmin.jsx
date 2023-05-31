import { Route, Routes } from 'react-router-dom';
import StudentList from './StudentList';
import Dashboard from '../dashboard';
import NotFound from '../NotFound';


const LandingAdmin = () => {
    return (
        <>
            <Routes>
                <Route path='student' element={<StudentList />} />
                <Route path="/" element={<Dashboard />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default LandingAdmin;