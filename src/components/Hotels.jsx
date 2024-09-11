import bgImage from '../assets/bg.png';
import logoImage from '../assets/logo.png';

const Hotels = () => {
    return (
        <div className="h-screen bg-white text-black">
            <div className="flex items-center max-w-[986px] mx-auto px-5 py-20 font-bold">
                <div>
                    <h1 className='mb-3 big-responsive-text text-orange-500'>Mas que habitaciones, experiencias.</h1>
                    <p className='medium-responsive-text'>Suites con balcón, piscina infinita, y una decoración única.</p>
                </div>
            </div>
        </div>
    );
};

export default Hotels;