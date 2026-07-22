'use client';

import { useState } from 'react';
import { Search, Filter, Activity, Edit3, Trash2, Shield, Settings, UserPlus, Package } from 'lucide-react';

const mockLogs = [
  { id: 1, user: 'Sandeep Targe', role: 'Super Admin', action: 'Created new Team Member (Rahul Joshi)', module: 'Team', timestamp: '10 mins ago', type: 'create' },
  { id: 2, user: 'Priya K.', role: 'SEO Editor', action: 'Published Blog Post: "Ganeshotsav Sweets"', module: 'Blog', timestamp: '2 hours ago', type: 'publish' },
  { id: 3, user: 'Priya K.', role: 'SEO Editor', action: 'Updated SEO Meta Title for Home Page', module: 'SEO', timestamp: '3 hours ago', type: 'update' },
  { id: 4, user: 'Sandeep Targe', role: 'Super Admin', action: 'Updated pricing for "Premium Goda Masala" to ₹150', module: 'Products', timestamp: '5 hours ago', type: 'update' },
  { id: 5, user: 'Rahul Joshi', role: 'Support', action: 'Marked Order #10042 as "Shipped"', module: 'Orders', timestamp: '1 day ago', type: 'status_change' },
  { id: 6, user: 'Sandeep Targe', role: 'Super Admin', action: 'Deleted Draft Category "Summer Drinks"', module: 'Categories', timestamp: '1 day ago', type: 'delete' },
];

export default function AdminLogs() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = mockLogs.filter(log => 
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) || 
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.module.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'create': return <UserPlus className="w-4 h-4 text-blue-500" />;
      case 'publish': return <Activity className="w-4 h-4 text-emerald-500" />;
      case 'update': return <Edit3 className="w-4 h-4 text-amber-500" />;
      case 'delete': return <Trash2 className="w-4 h-4 text-red-500" />;
      case 'status_change': return <Package className="w-4 h-4 text-purple-500" />;
      default: return <Settings className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Audit Logs</h2>
          <p className="text-gray-500 text-sm">Track team activity and system changes for complete visibility.</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-100">
          <Shield className="w-4 h-4" /> Secure Trail Active
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search logs by user, action, or module..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" /> Filter By Module
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-medium">Timestamp</th>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Module</th>
                <th className="px-6 py-4 font-medium">Action Performed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-500">{log.timestamp}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-800 text-sm">{log.user}</div>
                    <div className="text-xs text-gray-400">{log.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 border border-gray-200">
                      {log.module}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1.5 bg-white shadow-sm border border-gray-100 rounded-md">
                        {getActionIcon(log.type)}
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{log.action}</span>
                    </div>
                  </td>
                </tr>
              ))}
              
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No logs found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}
