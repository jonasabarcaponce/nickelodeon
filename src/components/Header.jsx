import bgImage from '../assets/bg.png';
import logoImage from '../assets/logo.png';

const bgClassName = `h-screen bg-[url(${bgImage})] bg-no-repeat bg-cover`;

const Header = () => {
    return (
        <div className="h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="max-w-[986px] mx-auto py-10 px-5">
                <nav className="flex justify-between items-center">
                    <div>
                        <img src={logoImage} className='w-6/12 md:w-8/12' alt="Logo" />
                    </div>
                    <a href="#" className='bg-orange-500 w-12 h-12 text-2xl text-white flex items-center justify-center rounded-full'>
                        <i className='fab fa-whatsapp'></i>
                    </a>
                </nav>
            </div>
            <div className="flex items-center max-w-[986px] mx-auto px-5 h-4/6 font-bold text-white">
                <div>
                    <h1 className='mb-3 big-responsive-text'>Disfruta tu vacaciones como nunca</h1>
                    <p className='medium-responsive-text'>Junto a Bob Esponja, Las Tortugas Ninja y muchos otros personajes de Nick en una escapada inolvidable.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;