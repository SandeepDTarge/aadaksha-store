'use client';

import { useState } from 'react';
import { Search, Mail, Phone, Edit, Trash2 } from 'lucide-react';

const mockCustomers = [
  { id: 101, name: 'Rahul Sharma', email: 'rahul.s@example.com', phone: '+91 98765 43210', orders: 5, totalSpent: 2450, lastOrder: '2 hours ago', status: 'Active' },
  { id: 102, name: 'Priya Patel', email: 'priya.p@example.com', phone: '+91 91234 56789', orders: 2, totalSpent: 890, lastOrder: '1 day ago', status: 'Active' },
  { id: 103, name: 'Amit Kumar', email: 'amit.k@example.com', phone: '+91 99887 76655', orders: 1, totalSpent: 350, lastOrder: '3 days ago', status: 'Inactive' },
  { id: 104, name: 'Neha Gupta', email: 'neha.g@example.com', phone: '+91 90011 22334', orders: 8, totalSpent: 5600, lastOrder: '1 week ago', status: 'VIP' },
  { id: 105, name: 'Sarah Jones', email: 'sarah.j@example.com', phone: '+44 7700 900077', orders: 3, totalSpent: 4200, lastOrder: '2 weeks ago', status: 'Active' },
];

export default function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
          <p className="text-gray-500 text-sm">Manage your customer relationships and order history.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by name, email, or phone..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Customer Name</th>
                <th className="px-6 py-4 font-medium">Contact Details</th>
                <th className="px-6 py-4 font-medium">Orders</th>
                <th className="px-6 py-4 font-medium">Total Spent (INR)</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm border border-emerald-200">
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="font-semibold text-gray-800">{customer.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <a href={`mailto:${customer.email}`} className="text-sm text-gray-600 hover:text-emerald-600 flex items-center gap-1.5 transition-colors">
                        <Mail className="w-3.5 h-3.5" /> {customer.email}
                      </a>
                      <a href={`https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-emerald-600 flex items-center gap-1.5 transition-colors">
                        <Phone className="w-3.5 h-3.5" /> {customer.phone}
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{customer.orders}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">₹{customer.totalSpent}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      customer.status === 'VIP' ? 'bg-purple-100 text-purple-800' :
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
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
              
              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No customers found.
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
