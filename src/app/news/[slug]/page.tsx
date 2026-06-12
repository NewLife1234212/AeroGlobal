import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';
import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Footer } from '@/components/sections/PricingToFooter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="bg-[#0a1930] pb-32">
        <Navbar />
      </div>

      <article className="max-w-4xl mx-auto px-6 -mt-24 relative z-10 pb-24">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          {post.coverImage && (
            <div className="aspect-[21/9] relative w-full bg-slate-100">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
            </div>
          )}
          
          <div className="p-8 md:p-16">
            <div className="text-emerald-500 font-bold mb-4 uppercase tracking-widest text-sm">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-12 leading-tight">
              {post.title}
            </h1>
            
            <div className="prose prose-lg prose-slate prose-headings:text-blue-900 prose-headings:font-black prose-a:text-blue-600 hover:prose-a:text-emerald-500 max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
