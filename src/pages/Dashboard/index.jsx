import { Icon, Card } from '~/components'
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
            <section id='content' className='container max-w-3xl p-4 space-y-4'>
               
                <div className='flex'>
                    <Icon name="back" className="w-6"/>
                    <span>24 de novembro</span>
                    <Icon name="arrowRight" className="w-6"/>
                </div>

                <div className='space-y-4'>
                    <Card
                        timeA={{ slug: 'sui' }}
                        timeB={{ slug: 'cam' }}
                        match={{ time: '7:00' }}
                    />

                    <Card
                        timeA={{ slug: 'uru' }}
                        timeB={{ slug: 'cor' }}
                        match={{ time: '7:00' }}
                    />

                    <Card
                        timeA={{ slug: 'por' }}
                        timeB={{ slug: 'gan' }}
                        match={{ time: '7:00' }}
                    />
                </div>
            </section>
        </main>
    </div>
)