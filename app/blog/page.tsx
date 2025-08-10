import Image from 'next/image'
interface BlogPageProps {
    title: string
    urlToImage: string,
    description: string,
    content: string,
    author: string,
    publishedAt: string,
}
export default async function BlogPage() {
    const API_KEY = 'b0be46a8657f474f93a8457c2f928720'
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`, {
        method: 'GET',
        headers: {
            'apiKey': API_KEY,
            'X-Api-Key': API_KEY,
            'Authorization': API_KEY
        }
    })
    const data = await response.json()
    console.log('data in response',data)
    const blogData = data.articles || []

    console.log('blog data in page data',blogData)
    return (
        <div className='mt-[50px] px-[120px]'>
            {blogData.map((blog: BlogPageProps) => (
                <div key={blog.title} className='flex mb-[50px]'>
                    <Image src={blog.urlToImage} alt={blog.title} width={500} height={800} className='rounded-[16px]'/>
                    <div>
                        <div className='flex'>
                            <p className='inline-block p-[12px] rounded-[6px] bg-[#FFD700] mr-[30px]'>{blog.author}</p>
                            <p className='inline-block p-[12px] rounded-[6px] bg-[#DDA0DD]'>{blog.publishedAt}</p>
                        </div>
                        <p className='text-[32px] font-bold'>{blog.title}</p>
                        <p className='text-[16px] mb-[12px]'>{blog.description}</p>
                        <p className='text-[16px] p-[12px] rounded-[6px] bg-gray-400 inline-block '>{blog.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}