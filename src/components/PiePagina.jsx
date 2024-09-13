import logoImage from '../assets/logo.png';

const PiePagina = () => {
    return (
        <div className="bg-white text-black">
            <div className="max-w-[986px] mx-auto py-10 px-5">
                <nav className="flex justify-between items-center">
                    <div>
                        <img src={logoImage} className='w-6/12 md:w-8/12' alt="Logo" />
                    </div>
                    <div>
                        <p className='small-responsive-text'>© 2021 Todos los derechos reservados</p>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default PiePagina;