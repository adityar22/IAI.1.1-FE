import { Route, Routes } from 'react-router-dom';
import StudentList from './StudentList';
import NotFound from '../NotFound';
import Dashboard from '../dashboard'


const LandingAdmin = () => {
    return (
        <>
            <div className="max-w-screen flex-row sm:flex">
                <div className='sm:overflow-y-scroll relative w-screen'>
                    <Routes>
                        <Route path='/' element={<StudentList />} />
                        <Route path="test" element={<Dashboard />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default LandingAdmin;