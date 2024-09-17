const FormatoContacto = () => {
    return (
        <div className="bg-white text-black py-20" id="cotizar">
            <div className="flex items-center max-w-[986px] mx-auto px-5 font-bold">
                <div>
                    <h1 className='mb-3 big-responsive-text text-orange-500'>Tus vacaciones comienzan aquí.</h1>
                    <p className='medium-responsive-text'>Solicita una llamada y un asesor se pondrá en contacto contigo.</p>
                </div>
            </div>
            <div className="max-w-[986px] mx-auto px-5 font-bold small-responsive-text pt-10">
                <form>
                    <input type="text" placeholder='Nombre' className='border-2 rounded-2xl border-black mb-8 d-block w-full md:w-2/3 p-3' autoComplete="name" />
                    <input type="text" placeholder='Teléfono' className='border-2 rounded-2xl border-black mb-8 d-block w-full md:w-2/3 p-3' autoComplete="tel-national"/>
                    <input type="text" placeholder='Correo' className='border-2 rounded-2xl border-black mb-8 d-block w-full md:w-2/3 p-3' autoComplete="email"/>
                    <button type='submit' className='bg-orange-500 small-responsive-text uppercase py-2 px-10 text-white flex items-center justify-center rounded-2xl'>
                        Solicitar llamada    
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormatoContacto;