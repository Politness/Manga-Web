import errorPageImage from '../images/errorPageImg.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div
            className="flex items-center justify-center"
            style={{
                backgroundImage: `url(${errorPageImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.75',
                height: 'calc(100vh - 80px - 60px)', // Adjust these values based on your navbar and footer heights
                // 80px is a sample height for the navbar
                // 60px is a sample height for the footer
                position: 'relative',
                margin: 0,
                padding: 0,
            }}
        >
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md bg-sky-700 dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <div className="text-5xl text-white font-bold">404</div>
                    <p className="text-2xl md:text-3xl text-white font-light leading-normal">
                        Sorry, we couldn't find this page.
                    </p>
                    <p className="mb-8 text-white">
                        But don't worry, you can find many other things on our homepage.
                    </p>

                    <Link to="/">
                        <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-sky-600 active:bg-sky-600 hover:bg-sky-700">
                            Return to home page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
