import { Route, Routes } from 'react-router-dom';
import StudentProfile from './StudentProfile';
import RoomBooking from './RoomBooking';
import BookBooking from './BookBooking';
import NotFound from '../NotFound';

import ClientNav from '../../components/public/clientNav';

const LandingStudent = () => {
    return (
        <>
            <div className="max-h-screen">
                <ClientNav />
                <div className="max-w-screen flex-row sm:flex">
                    <div className='w-screen'>
                        <Routes>
                            <Route path='/' element={<StudentProfile />} />
                            <Route path="/profile" element={<StudentProfile />} />
                            <Route path="/book" element={<BookBooking />} />
                            <Route path="/room" element={<RoomBooking />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingStudent;