'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, FileText, Globe, Tags, ShieldCheck, Activity } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [currentRole, setCurrentRole] = useState<'Admin' | 'SEO Editor' | 'Support'>('Admin');

  const allNavItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, roles: ['Admin', 'SEO Editor', 'Support'] },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCart, roles: ['Admin', 'Support'] },
    { name: 'Products', href: '/admin/products', icon: Package, roles: ['Admin'] },
    { name: 'Categories', href: '/admin/categories', icon: Tags, roles: ['Admin', 'SEO Editor'] },
    { name: 'Customers', href: '/admin/customers', icon: Users, roles: ['Admin', 'Support'] },
    { name: 'Blog Posts', href: '/admin/blog', icon: FileText, roles: ['Admin', 'SEO Editor'] },
    { name: 'SEO Settings', href: '/admin/seo', icon: Globe, roles: ['Admin', 'SEO Editor'] },
    { name: 'Team Management', href: '/admin/team', icon: ShieldCheck, roles: ['Admin'] },
    { name: 'Audit Logs', href: '/admin/logs', icon: Activity, roles: ['Admin'] },
    { name: 'Settings', href: '/admin/settings', icon: Settings, roles: ['Admin'] },
  ];

  const navItems = allNavItems.filter(item => item.roles.includes(currentRole));

  // Helper to remove locale from pathname for exact matching (e.g., /en/admin -> /admin)
  const getActiveState = (href: string) => {
    if (!pathname) return false;
    const stripped = pathname.replace(/^\/[a-z]{2}\b/, '');
    return stripped === href;
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 shadow-2xl">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <span className="font-mono text-xl font-bold tracking-widest uppercase text-emerald-400">
            Aadaksha
          </span>
          <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">ADMIN</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = getActiveState(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-emerald-500 text-white shadow-lg' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Exit to Store</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-6 flex justify-between items-center shadow-sm sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Admin Portal</h1>
          <div className="flex items-center gap-6">
            
            {/* Demo Role Switcher */}
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-2">Simulate Role:</span>
              <select 
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value as any)}
                className="text-sm font-medium bg-white border border-slate-200 rounded-md px-2 py-1 text-emerald-700 outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Admin">Super Admin</option>
                <option value="SEO Editor">SEO Editor</option>
                <option value="Support">Support</option>
              </select>
            </div>

            <div className="h-8 w-px bg-gray-200"></div>

            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">{currentRole}</p>
              <p className="text-xs text-gray-500">demo@aadaksha.com</p>
            </div>
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold border border-emerald-200">
              {currentRole === 'Admin' ? 'AD' : currentRole === 'SEO Editor' ? 'SE' : 'SP'}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>

    </div>
  );
}
