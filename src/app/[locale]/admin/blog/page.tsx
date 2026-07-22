'use client';

import { useState } from 'react';
import { Search, Plus, Edit, Trash2, CheckCircle2, X, Eye, Edit2 } from 'lucide-react';
import Image from 'next/image';
import RichTextEditor from '@/components/admin/RichTextEditor';

const mockBlogs = [
  { id: 1, title: 'The History of Authentic Goda Masala', slug: 'history-of-goda-masala', author: 'Aadaksha Team', date: '22 Jul 2026', status: 'Published', image: '/images/spices_new.jpg', views: '1.2k' },
  { id: 2, title: 'Why Maharashtrian Faral is More Than Just Snacks', slug: 'maharashtrian-faral-emotion', author: 'Aadaksha Team', date: '15 Jul 2026', status: 'Published', image: '/images/faral.jpg', views: '3.4k' },
  { id: 3, title: 'Top 5 Sweet Dishes for Ganeshotsav', slug: 'top-5-sweets-ganeshotsav', author: 'Sandeep Targe', date: '10 Jul 2026', status: 'Draft', image: '/images/sweets_new.jpg', views: '-' },
];

export default function AdminBlog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [blogContent, setBlogContent] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');

  const filteredBlogs = mockBlogs.filter(b => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Blog Manager</h2>
          <p className="text-gray-500 text-sm">Publish fresh content to keep your audience engaged and boost SEO.</p>
        </div>
        <button 
          onClick={() => setIsAddingBlog(true)}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search blog posts..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <select className="border border-gray-200 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option value="">All Statuses</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Blog Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Post Title</th>
                <th className="px-6 py-4 font-medium">Author</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredBlogs.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-10 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 line-clamp-1">{post.title}</span>
                        <span className="text-xs text-gray-400">/{post.slug}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{post.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {post.status === 'Published' && <CheckCircle2 className="w-3 h-3" />}
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors" title="Edit Post">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {filteredBlogs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No blog posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Blog Modal */}
      {isAddingBlog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-800">Write New Blog Post</h3>
              <button 
                onClick={() => setIsAddingBlog(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Post Title</label>
                  <input 
                    type="text" 
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                    placeholder="e.g., The Secret to Perfect Puran Poli" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Author Name</label>
                  <input type="text" defaultValue="Aadaksha Team" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Featured Image URL</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="https://..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">SEO Slug (URL)</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., secret-to-perfect-puran-poli" />
                </div>
              </div>

              {/* Rich Text Editor with Preview Toggle */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-semibold text-gray-700">Blog Article Content</label>
                  <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button 
                      onClick={() => setIsPreviewMode(false)}
                      className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${!isPreviewMode ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <Edit2 className="w-3 h-3" /> Write
                    </button>
                    <button 
                      onClick={() => setIsPreviewMode(true)}
                      className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${isPreviewMode ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <Eye className="w-3 h-3" /> Preview
                    </button>
                  </div>
                </div>

                {!isPreviewMode ? (
                  <RichTextEditor 
                    label=""
                    initialValue={blogContent || "<h1>The Heart of Maharashtra</h1><p>Start writing your amazing story here...</p>"}
                    onChange={setBlogContent}
                  />
                ) : (
                  <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 min-h-[400px]">
                    <article className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
                      <h1 className="text-4xl font-bold text-gray-900 mb-6 font-mono leading-tight">{blogTitle || 'Blog Post Title'}</h1>
                      <div 
                        className="prose prose-emerald prose-lg max-w-none text-gray-700 prose-headings:font-bold prose-a:text-emerald-600"
                        dangerouslySetInnerHTML={{ __html: blogContent || '<p className="text-gray-400 italic">No content provided yet.</p>' }}
                      />
                    </article>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 sticky bottom-0 bg-white z-10">
              <button 
                onClick={() => setIsAddingBlog(false)}
                className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
              <button 
                onClick={() => {
                  alert('Blog Published! (Mock Demo)');
                  setIsAddingBlog(false);
                }}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200"
              >
                Publish Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
