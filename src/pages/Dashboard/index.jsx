import { Icon } from '~/components'
export const Dashboard = () => (
    <div className="">

        <header className='bg-red-500 text-white p-2'>
            <div className='container max-w-3xl flex justify-between p-4'>
                <img src="/imgs/logo-red.svg" className="w-28 md:w-40" />
                <a href="/profile">
                    <Icon name="profile" className="w-10" />
                </a>
            </div>
        </header>

        <main>
            <section id='header' className=" bg-red-500 text-white p-4">
                <div className='container max-w-3xl  space-y-2 p-4'>
                    <span>Olá Lígia</span>
                    <h3 className='text-2xl font-blod'>Qual é o seu palpite?</h3>
                </div>
            </section>


            <section id='content' className='container max-w-3xl p-4'>

                <div className='rounded-xl border border-gray-300 p-4 text-center'>
                    <span className='text-sm md:text-base text-gray-700 font-bold'>7:00</span>

                    <div className='flex space-x-4 justify-center items-center'>

                        <span className='uppercase'>sui</span>
                        <img src="/imgs/flags/sui.png" />

                        <input type="number" className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center' />
                        <span className='text-red-500 font-bold'>X</span>
                        <input type="number" className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center' />

                        <img src="/imgs/flags/cam.png" />
                        <span className='uppercase'>cam</span>



                    </div>
                </div>

            </section>
        </main>
    </div>
)