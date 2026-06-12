import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Footer } from '@/components/sections/PricingToFooter';
import Image from 'next/image';

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">News & Insights</h1>
          <p className="text-xl text-blue-200">The latest updates from AeroGlobal's global operations.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/news/${post.slug}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer h-full flex flex-col">
                <div className="aspect-[16/9] relative bg-slate-200 overflow-hidden">
                  {post.coverImage && (
                    <Image 
                      src={post.coverImage} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-sm font-bold text-emerald-500 mb-3">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <h2 className="text-2xl font-black text-blue-900 mb-4 line-clamp-2">{post.title}</h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
                  <div className="text-sm font-bold text-blue-600 flex items-center gap-2 mt-auto">
                    Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
