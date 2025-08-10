
export default function AboutPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 px-4 sm:px-[120px] py-[60px] text-white'>
            <div className='backdrop-blur-sm bg-black/40 rounded-3xl p-8 sm:p-12 shadow-2xl border border-purple-500/20'>
                <h1 className='text-4xl sm:text-[64px] font-bold bg-purple-900/50 rounded-xl p-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white'>
                    Tech-Store
                </h1>

                <p className='text-2xl sm:text-[48px] font-medium text-center my-8 text-white/90 bg-black/30 p-4 rounded-lg border border-white/10'>
                    Only Originals. Only Guaranteed. Only Reliable.
                </p>

                <div className='bg-black/40 rounded-xl p-6 mb-12 border border-purple-500/30'>
                    <p className='text-lg sm:text-[24px] font-medium'>
                        Welcome to <span className='text-purple-300'>Tech-Store</span> — your dedicated online marketplace for genuine tech devices and OEM (Original Equipment Manufacturer) parts.
                    </p>
                </div>

                <div className='bg-black/40 rounded-xl p-6 mb-12 border border-purple-500/30'>
                    <p className='text-3xl sm:text-[48px] text-center my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white'>
                        What We Offer:
                    </p>
                    <ul className='text-lg sm:text-[24px] flex flex-col gap-4'>
                        <li className='flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-purple-900/30 transition-all'>
                            <span className='mr-3 text-purple-400 text-xl'>▹</span>
                            <span className='flex-1'>
                                <span className='font-semibold text-purple-300'>100% authentic new tech:</span> Latest smartphones, laptops, tablets, cameras, audio gear, appliances, and more—sourced directly from official suppliers or manufacturers.
                            </span>
                        </li>
                        <li className='flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-purple-900/30 transition-all'>
                            <span className='mr-3 text-purple-400 text-xl'>▹</span>
                            <span className='flex-1'>
                                <span className='font-semibold text-purple-300'>OEM parts only:</span> Batteries, screens, keyboards, connectors, cameras, flex cables, housings, power adapters, repair kits—every component matches factory specs.
                            </span>
                        </li>
                        <li className='flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-purple-900/30 transition-all'>
                            <span className='mr-3 text-purple-400 text-xl'>▹</span>
                            <span className='flex-1'>
                                <span className='font-semibold text-purple-300'>Guaranteed authenticity:</span> Each item is rigorously verified. We provide full manufacturer certifications and warranties.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='bg-black/40 rounded-xl p-6 border border-purple-500/30'>
                    <p className='text-3xl sm:text-[48px] text-center my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white'>
                        Why Choose Us?
                    </p>
                    <ul className='text-lg sm:text-[24px] flex flex-col gap-4'>
                        <li className='flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-purple-900/30 transition-all'>
                            <span className='mr-3 text-purple-400 text-xl'>✦</span>
                            <span className='flex-1'>
                                <span className='font-semibold text-purple-300'>Zero compromises on quality:</span> We refuse to sell aftermarket, refurbished, or counterfeit goods. Only originals ensure perfect compatibility, performance, and safety.
                            </span>
                        </li>
                        <li className='flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-purple-900/30 transition-all'>
                            <span className='mr-3 text-purple-400 text-xl'>✦</span>
                            <span className='flex-1'>
                                <span className='font-semibold text-purple-300'>Reliability-first:</span> We exist to deliver trustworthy solutions for repairs and upgrades—where every detail matters.
                            </span>
                        </li>
                        <li className='flex items-start bg-gray-900/50 p-4 rounded-lg hover:bg-purple-900/30 transition-all'>
                            <span className='mr-3 text-purple-400 text-xl'>✦</span>
                            <span className='flex-1'>
                                <span className='font-semibold text-purple-300'>Transparency & trust:</span> Clear sourcing, no gray-market goods.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}