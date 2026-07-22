'use client';

import { useState } from 'react';
import { Save, Code } from 'lucide-react';
import RichTextEditor from '@/components/admin/RichTextEditor';

export default function AdminSEO() {
  const [activeTab, setActiveTab] = useState('Home');
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('SEO Settings saved successfully!');
    }, 1000);
  };

  const pages = ['Home', 'Shop', 'Categories', 'Global'];

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">SEO Settings</h2>
          <p className="text-gray-500 text-sm">Manage Meta Data and Schema for Search Engines.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors shadow-sm disabled:opacity-50"
        >
          <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-100 bg-gray-50/50">
          {pages.map(page => (
            <button
              key={page}
              onClick={() => setActiveTab(page)}
              className={`px-6 py-4 text-sm font-semibold transition-colors ${
                activeTab === page 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 bg-white' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {page} Page
            </button>
          ))}
        </div>

        <div className="p-8 space-y-8">
          {/* Meta Tags */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2">Meta Information</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Meta Title</label>
              <input 
                type="text" 
                defaultValue={activeTab === 'Home' ? "Aadaksha | Authentic Maharashtrian Foods" : `${activeTab} | Aadaksha`}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <p className="text-xs text-gray-500 text-right">50-60 characters recommended</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Meta Description</label>
              <textarea 
                rows={3}
                defaultValue="India's most premium online destination for traditional Maharashtrian foods, culture, recipes, festivals and heritage."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              />
              <p className="text-xs text-gray-500 text-right">150-160 characters recommended</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Target Keywords</label>
              <input 
                type="text" 
                defaultValue="Maharashtrian food, Authentic spices, Goda Masala, Diwali Faral, Pune snacks"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* On-Page Rich Content */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2">On-Page Content (SEO)</h3>
            <p className="text-sm text-gray-500">Because Content is King. Add rich, formatted text to rank higher on Google.</p>
            
            <RichTextEditor 
              label={`${activeTab} Page Content`}
              initialValue={`<h2>Why Choose Aadaksha's ${activeTab} Selection?</h2><p>Our traditional methods ensure that every bite you take is full of authentic Maharashtrian flavor.</p>`}
              onChange={(val) => console.log('Content changed:', val)}
            />
          </div>

          {/* JSON-LD Schema */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
              <Code className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Advanced JSON-LD Schema</h3>
            </div>
            <p className="text-sm text-gray-500">Inject structured data specifically for Google Rich Snippets.</p>
            
            <textarea 
              rows={10}
              className="w-full px-4 py-4 font-mono text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-900 text-green-400"
              defaultValue={`{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Aadaksha",
  "url": "https://aadaksha.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://aadaksha.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
