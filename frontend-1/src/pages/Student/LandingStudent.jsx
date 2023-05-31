import { Route, Routes } from 'react-router-dom';
import StudentProfile from './StudentProfile';

const LandingStudent = () => {
    return ( 
        <>
            <Routes>
                <Route path='student' element={<StudentProfile />} />
                <Route path="/" element={<das />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
     );
}
 
export default LandingStudent;