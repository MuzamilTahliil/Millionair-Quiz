import React, { Suspense, lazy } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = lazy(() => import('../components/Footer'));

function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const startQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen flex flex-col justify-between">
            <header className="flex-none">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <Link to="#" title="" className="flex">
                                <img className="w-auto h-32" src="logo2.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <Link
                                to="/"
                                title=""
                                className={`text-base ${isActive('/home') ? 'text-blue-500 font-bold' : 'text-black'} transition-all duration-200 hover:text-blue-500`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                title=""
                                className={`text-base ${isActive('/about') ? 'text-blue-500 font-bold' : 'text-black'} transition-all duration-200 hover:text-blue-500`}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                title=""
                                className={`text-base ${isActive('/contact') ? 'text-blue-500 font-bold' : 'text-black'} transition-all duration-200 hover:text-blue-500`}
                            >
                                Contact
                            </Link>
                            <div className="w-px h-5 bg-black/20"></div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="flex-grow flex items-center justify-center py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                Take part in our
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#6d28d9]"></span>
                                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Quiz Challenge.</h1>
                                </div>
                            </h1>
                            <p className="mt-8 text-base text-black sm:text-xl">
                                Test your knowledge with our exciting quiz. Compete with friends and see who scores the highest!
                            </p>
                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <button
                                    onClick={startQuiz}
                                    title=""
                                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#6d28d9] hover:bg-[#ec4899] focus:bg-[#ec4899]"
                                    role="button"
                                >
                                    Let's Start
                                </button>
                            </div>
                        </div>
                        <div>
                            <img className="w-full" src="hm.webp" alt="" />
                        </div>
                    </div>
                </div>
                
            </section>


            {/* New Section for Game Rules */}
            <section className=" py-20  flex justify-center items-center bg-white ">
    <div className=" w-full max-w-7xl px-10 mx-auto bg-[#6d28d9] rounded-2xl shadow-lg py-20">
        <h2 className="text-3xl font-bold text-center text-white sm:text-4xl lg:text-5xl transform hover:scale-105 transition-transform duration-300">Game Rules</h2>
        <p className="mt-4 text-center text-gray-300 transform hover:scale-105 transition-transform duration-300">Understand the rules of the game to play better and score higher!</p>
        <div className="mt-10 space-y-4 ">
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-black">Rule 1: Time Limit</h3>
                <p className="mt-2 text-black ">Each quiz must be completed within the specified time limit. Be quick and accurate!</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-black">Rule 2: Scoring System</h3>
                <p className="mt-2 text-gray-900">Points are awarded based on the correctness and speed of your answers. Aim for accuracy and speed.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-black">Rule 3: Multiple Attempts</h3>
                <p className="mt-2 text-gray-600">You can attempt the quiz multiple times to improve your score. Your highest score will be recorded.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-black">Rule 4: Fair Play</h3>
                <p className="mt-2 text-gray-600">Play fair and avoid any form of cheating. Cheating will lead to disqualification.</p>
            </div>
        </div>
    </div>
</section>

             {/* New Section for Top Winners */}
             <section className="py-20 bg-blue-100 rounded-2xl ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                    <h2 className="text-3xl font-bold text-center text-black sm:text-4xl lg:text-5xl">Top Winners</h2>
                    <p className="mt-4 text-center text-gray-600">Check out our top players who have scored the highest in our quiz challenge!</p>
                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Winner 1 */}
                        <div className="p-6 bg-[#ec4899] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500" src="winner.jpg" alt="Winner 1" />
                            <h3 className="mt-4 text-xl font-semibold text-center text-black">Winner 1</h3>
                            <div className="flex justify-center">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                        </div>
                        {/* Winner 2 */}
                        <div className="p-6 bg-[#ec4899] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500" src="winner.jpg" alt="Winner 2" />
                            <h3 className="mt-4 text-xl font-semibold text-center text-black">Winner 2</h3>
                            <div className="flex justify-center">
                                <span className="text-yellow-400">★★★★☆</span>
                            </div>
                            </div>
                        {/* Winner 3 */}
                        <div className="p-6 bg-[#ec4899] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500" src="winner.jpg" alt="Winner 3" />
                            <h3 className="mt-4 text-xl font-semibold text-center text-black">Winner 3</h3>
                            <div className="flex justify-center">
                                <span className="text-yellow-400">★★★☆☆</span>
                            </div>
                            </div>
                    </div>
                </div>
            </section>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default Home;
