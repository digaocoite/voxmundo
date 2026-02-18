import PropTypes from 'prop-types';

const LogoIcon = ({ className = "w-10 h-10" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="50%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
        </defs>
        <path
            d="M50 5C25.1 5 5 25.1 5 50C5 63.8 11.2 76.1 21 84.3L15 95L35 90C39.7 92.6 44.7 94.1 50 94.1C74.9 94.1 95 74 95 49.1C95 24.2 74.9 4.1 50 4.1V5Z"
            fill="url(#logoGradient)"
            opacity="0.9"
        />
        <circle cx="50" cy="50" r="28" fill="white" />
        <path d="M50 22C34.5 22 22 34.5 22 50C22 65.5 34.5 78 50 78C65.5 78 65.5 78 50 78C34.5 78 22 65.5 50 22ZM50 74C44.5 74 40 71.5 40 50C40 28.5 44.5 26 50 26C55.5 26 60 28.5 60 50C60 71.5 55.5 74 50 74ZM26 50C26 48.5 30 46 50 46C70 46 74 48.5 74 50C74 51.5 70 54 50 54C30 54 26 51.5 26 50Z" fill="url(#logoGradient)" />
    </svg>
);

LogoIcon.propTypes = {
    className: PropTypes.string,
};

export default LogoIcon;
