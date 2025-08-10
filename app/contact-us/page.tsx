
export default function ContactPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 px-4 sm:px-[120px] py-[60px] text-white'>
            <div className='backdrop-blur-sm bg-black/40 rounded-3xl p-8 sm:p-12 shadow-2xl border border-purple-500/20'>
                <h1 className='text-4xl sm:text-[64px] font-bold bg-purple-900/50 rounded-xl p-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white mb-12'>
                    Contact Tech-Store
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                    {/* US Legal HQ */}
                    <div className='bg-purple-900/30 rounded-xl p-6 border-2 border-purple-500/50'>
                        <div className='flex items-center mb-4'>
                            <svg className='w-8 h-8 mr-3 text-purple-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <h2 className='text-2xl font-bold text-white'>US Legal Headquarters</h2>
                        </div>
                        <div className='space-y-3'>
                            <p className='font-medium'>Tech-Store Global Inc.</p>
                            <p className='text-sm opacity-90'>Registered in Delaware, USA</p>
                            <p className='text-sm opacity-90'>One Liberty Plaza, 23rd Floor</p>
                            <p className='text-sm opacity-90'>165 Broadway, New York, NY 10006</p>
                            <p className='text-sm opacity-90'>Tax ID (EIN): 12-3456789</p>
                            <p className='mt-4 flex items-start'>
                                <span className='mr-2 text-purple-300'>📞</span>
                                <span>+1 (212) 555-0100 (Legal Department)</span>
                            </p>
                        </div>
                    </div>

                    {/* Russia Legal HQ */}
                    <div className='bg-purple-900/30 rounded-xl p-6 border-2 border-purple-500/50'>
                        <div className='flex items-center mb-4'>
                            <svg className='w-8 h-8 mr-3 text-purple-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <h2 className='text-2xl font-bold text-white'>Russia Legal Headquarters</h2>
                        </div>
                        <div className='space-y-3'>
                            <p className='font-medium'>ООО &quot;Тех-Стор Рус&quot;</p>
                            <p className='text-sm opacity-90'>ИНН 7842156789 / КПП 784201001</p>
                            <p className='text-sm opacity-90'>ОГРН 1187845678912</p>
                            <p className='text-sm opacity-90'>БЦ &quot;Ленинградский&quot;, офис 501</p>
                            <p className='text-sm opacity-90'>пл. Конституции, 1, Санкт-Петербург, 196247</p>
                            <p className='mt-4 flex items-start'>
                                <span className='mr-2 text-purple-300'>📞</span>
                                <span>+7 (812) 456-7890 (Юридический отдел)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {/* Global Contacts */}
                    <div className='bg-black/40 rounded-xl p-6 border border-purple-500/30'>
                        <h2 className='text-2xl font-bold text-purple-300 mb-4'>Global Headquarters</h2>
                        <div className='space-y-4'>
                            <p className='flex items-start'>
                                <span className='mr-3 text-purple-400'>✉</span>
                                <span>support@tech-store.com</span>
                            </p>
                            <p className='flex items-start'>
                                <span className='mr-3 text-purple-400'>📞</span>
                                <span>+1 (800) TECH-123</span>
                            </p>
                            <div className='flex space-x-4 mt-6'>
                                <a href="#" className='text-purple-300 hover:text-white transition'>Twitter</a>
                                <a href="#" className='text-purple-300 hover:text-white transition'>Facebook</a>
                                <a href="#" className='text-purple-300 hover:text-white transition'>Instagram</a>
                            </div>
                        </div>
                    </div>

                    {/* USA Locations */}
                    <div className='bg-black/40 rounded-xl p-6 border border-purple-500/30'>
                        <h2 className='text-2xl font-bold text-purple-300 mb-4'>USA Stores</h2>
                        <div className='space-y-4 max-h-96 overflow-y-auto pr-2'>
                            {[
                                { city: "New York", address: "123 Tech Ave, Manhattan, NY 10001", phone: "+1 (212) 555-7890" },
                                { city: "Los Angeles", address: "456 Silicon Blvd, Santa Monica, CA 90401", phone: "+1 (310) 555-2345" },
                                { city: "Seattle", address: "789 Cloud St, Downtown, WA 98101", phone: "+1 (206) 555-6789" },
                                { city: "Miami", address: "101 Ocean Dr, Miami Beach, FL 33139", phone: "+1 (305) 555-3456" },
                                { city: "Chicago", address: "202 Circuit Ln, Loop, IL 60601", phone: "+1 (312) 555-9012" },
                                { city: "Austin", address: "303 Startup Rd, Downtown, TX 78701", phone: "+1 (512) 555-4567" },
                                { city: "Boston", address: "404 Ivy St, Cambridge, MA 02138", phone: "+1 (617) 555-7890" },
                                { city: "San Francisco", address: "505 Bay View, Financial District, CA 94111", phone: "+1 (415) 555-1234" },
                                { city: "Denver", address: "606 Mountain Way, Downtown, CO 80202", phone: "+1 (303) 555-5678" },
                                { city: "Atlanta", address: "707 Peach St, Midtown, GA 30308", phone: "+1 (404) 555-9012" },
                            ].map((location, index) => (
                                <div key={index} className='mb-4 pb-4 border-b border-purple-500/20 last:border-0'>
                                    <h3 className='font-semibold text-lg'>{location.city}</h3>
                                    <p className='text-sm opacity-80'>{location.address}</p>
                                    <p className='text-sm mt-1'>{location.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Russia Locations */}
                    <div className='bg-black/40 rounded-xl p-6 border border-purple-500/30'>
                        <h2 className='text-2xl font-bold text-purple-300 mb-4'>Russia Stores</h2>
                        <div className='space-y-4'>
                            {[
                                { city: "Moscow", address: "ул. Тверская, 15, Москва, 125009", phone: "+7 (495) 123-4567" },
                                { city: "St. Petersburg", address: "Невский пр., 45, Санкт-Петербург, 191025", phone: "+7 (812) 345-6789" },
                                { city: "Kaliningrad", address: "ул. Генерала Соммера, 3, Калининград, 236040", phone: "+7 (4012) 56-7890" },
                                { city: "Samara", address: "ул. Куйбышева, 100, Самара, 443099", phone: "+7 (846) 234-5678" },
                                { city: "Ufa", address: "ул. Ленина, 42, Уфа, 450077", phone: "+7 (347) 345-6789" },
                                { city: "Yekaterinburg", address: "ул. Малышева, 51, Екатеринбург, 620014", phone: "+7 (343) 456-7890" },
                            ].map((location, index) => (
                                <div key={index} className='mb-4 pb-4 border-b border-purple-500/20 last:border-0'>
                                    <h3 className='font-semibold text-lg'>{location.city}</h3>
                                    <p className='text-sm opacity-80'>{location.address}</p>
                                    <p className='text-sm mt-1'>{location.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Europe Locations */}
                    <div className='bg-black/40 rounded-xl p-6 border border-purple-500/30'>
                        <h2 className='text-2xl font-bold text-purple-300 mb-4'>Europe Stores</h2>
                        <div className='space-y-4 max-h-96 overflow-y-auto pr-2'>
                            {[
                                { country: "UK", city: "London", address: "12 Tech Square, Shoreditch, EC2A 4BX", phone: "+44 20 7123 4567" },
                                { country: "Germany", city: "Berlin", address: "Alexanderplatz 7, 10178 Berlin", phone: "+49 30 12345678" },
                                { country: "Netherlands", city: "Amsterdam", address: "Damrak 243, 1012 ZJ Amsterdam", phone: "+31 20 123 4567" },
                                { country: "Poland", city: "Warsaw", address: "ul. Marszałkowska 58, 00-545 Warszawa", phone: "+48 22 123 4567" },
                                { country: "Spain", city: "Madrid", address: "Calle Gran Vía, 48, 28013 Madrid", phone: "+34 91 123 45 67" },
                                { country: "Italy", city: "Rome", address: "Via del Corso, 306, 00186 Roma RM", phone: "+39 06 12345678" },
                                { country: "France", city: "Paris", address: "15 Rue de la Paix, 75002 Paris", phone: "+33 1 23 45 67 89" },
                                { country: "Sweden", city: "Stockholm", address: "Drottninggatan 71, 111 36 Stockholm", phone: "+46 8 123 45 67" },
                            ].map((location, index) => (
                                <div key={index} className='mb-4 pb-4 border-b border-purple-500/20 last:border-0'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold text-lg'>{location.city}</h3>
                                        <span className='text-xs bg-purple-900/50 px-2 py-1 rounded'>{location.country}</span>
                                    </div>
                                    <p className='text-sm opacity-80'>{location.address}</p>
                                    <p className='text-sm mt-1'>{location.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='mt-12 bg-black/40 rounded-xl p-8 border border-purple-500/30'>
                    <h2 className='text-2xl font-bold text-purple-300 mb-6'>Send Us a Message</h2>
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block mb-2 text-sm font-medium'>Your Name</label>
                            <input type="text" className='w-full bg-gray-800 border border-purple-500/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500' />
                        </div>
                        <div>
                            <label className='block mb-2 text-sm font-medium'>Your Email</label>
                            <input type="email" className='w-full bg-gray-800 border border-purple-500/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500' />
                        </div>
                        <div className='md:col-span-2'>
                            <label className='block mb-2 text-sm font-medium'>Message</label>
                            <textarea rows={4} className='w-full bg-gray-800 border border-purple-500/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500'></textarea>
                        </div>
                        <button type="submit" className='md:col-span-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-3 px-6 rounded-lg transition-all'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}