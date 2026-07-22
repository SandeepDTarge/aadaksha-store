'use client';

import { useState } from 'react';
import { Search, Plus, Edit, Trash2, X, Eye, Edit2 } from 'lucide-react';
import RichTextEditor from '@/components/admin/RichTextEditor';

const mockCategories = [
  { id: 1, name: 'Masalas', slug: 'masalas', productCount: 12, status: 'Active' },
  { id: 2, name: 'Snacks', slug: 'snacks', productCount: 24, status: 'Active' },
  { id: 3, name: 'Chutneys', slug: 'chutneys', productCount: 8, status: 'Active' },
  { id: 4, name: 'Sweets', slug: 'sweets', productCount: 15, status: 'Active' },
  { id: 5, name: 'Festive Specials', slug: 'festive-specials', productCount: 5, status: 'Draft' },
];

export default function AdminCategories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [categoryDesc, setCategoryDesc] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const filteredCategories = mockCategories.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Category Management</h2>
          <p className="text-gray-500 text-sm">Organize your products into rich, SEO-friendly collections.</p>
        </div>
        <button 
          onClick={() => setIsAddingCategory(true)}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search categories..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Category Name</th>
                <th className="px-6 py-4 font-medium">SEO Slug</th>
                <th className="px-6 py-4 font-medium">Products</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-800">{category.name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">/{category.slug}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{category.productCount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      category.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {filteredCategories.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Category Modal */}
      {isAddingCategory && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-800">Add New Category</h3>
              <button 
                onClick={() => setIsAddingCategory(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Category Name</label>
                  <input 
                    type="text" 
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                    placeholder="e.g., Authentic Pickles" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">SEO Slug (URL)</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., authentic-pickles" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Meta Title</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Meta title for Google..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Status</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                    <option>Active</option>
                    <option>Draft</option>
                  </select>
                </div>
              </div>

              {/* Rich Text Editor with Preview Toggle */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-semibold text-gray-700">Category Description</label>
                  <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button 
                      onClick={() => setIsPreviewMode(false)}
                      className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${!isPreviewMode ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <Edit2 className="w-3 h-3" /> Edit
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
                    initialValue={categoryDesc || "<p>Write a compelling description for this category to help customers and search engines understand what you are selling.</p>"}
                    onChange={setCategoryDesc}
                  />
                ) : (
                  <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 min-h-[300px]">
                    <div className="max-w-prose mx-auto text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-6 font-mono">{categoryName || 'Category Title'}</h1>
                      <div 
                        className="prose prose-emerald max-w-none text-gray-600 prose-headings:font-bold prose-a:text-emerald-600 mx-auto"
                        dangerouslySetInnerHTML={{ __html: categoryDesc || '<p className="text-gray-400 italic">No description provided yet.</p>' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 sticky bottom-0 bg-white z-10">
              <button 
                onClick={() => setIsAddingCategory(false)}
                className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert('Category Added! (Mock Demo)');
                  setIsAddingCategory(false);
                }}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200"
              >
                Save Category
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
