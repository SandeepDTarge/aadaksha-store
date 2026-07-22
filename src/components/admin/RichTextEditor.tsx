import React, { useRef, useState, useEffect } from 'react';
import { Bold, Italic, Underline, Link as LinkIcon, Image as ImageIcon, Heading1, Heading2, Palette, List, ListOrdered } from 'lucide-react';

interface RichTextEditorProps {
  label: string;
  initialValue?: string;
  onChange?: (val: string) => void;
}

export default function RichTextEditor({ label, initialValue = '', onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(initialValue);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    if (editorRef.current && initialValue && !editorRef.current.innerHTML) {
      editorRef.current.innerHTML = initialValue;
    }
  }, [initialValue]);

  const execCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleChange();
  };

  const handleLink = () => {
    const url = prompt('Enter the link URL:');
    if (url) execCommand('createLink', url);
  };

  const handleImage = () => {
    const url = prompt('Enter the image URL:');
    if (url) execCommand('insertImage', url);
  };

  const handleColor = (color: string) => {
    execCommand('foreColor', color);
    setShowColorPicker(false);
  };

  const handleChange = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      setContent(html);
      if (onChange) onChange(html);
    }
  };

  const colors = ['#000000', '#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7', '#ec4899', '#c25e14', '#059669'];

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent transition-all">
        
        {/* Toolbar */}
        <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex flex-wrap gap-1 items-center">
          
          <ToolbarButton icon={<Bold className="w-4 h-4" />} onClick={() => execCommand('bold')} title="Bold" />
          <ToolbarButton icon={<Italic className="w-4 h-4" />} onClick={() => execCommand('italic')} title="Italic" />
          <ToolbarButton icon={<Underline className="w-4 h-4" />} onClick={() => execCommand('underline')} title="Underline" />
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton icon={<Heading1 className="w-4 h-4" />} onClick={() => execCommand('formatBlock', 'H1')} title="Heading 1" />
          <ToolbarButton icon={<Heading2 className="w-4 h-4" />} onClick={() => execCommand('formatBlock', 'H2')} title="Heading 2" />
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton icon={<List className="w-4 h-4" />} onClick={() => execCommand('insertUnorderedList')} title="Bullet List" />
          <ToolbarButton icon={<ListOrdered className="w-4 h-4" />} onClick={() => execCommand('insertOrderedList')} title="Numbered List" />
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          <ToolbarButton icon={<LinkIcon className="w-4 h-4" />} onClick={handleLink} title="Insert Link" />
          <ToolbarButton icon={<ImageIcon className="w-4 h-4" />} onClick={handleImage} title="Insert Image" />
          
          <div className="relative">
            <ToolbarButton icon={<Palette className="w-4 h-4" />} onClick={() => setShowColorPicker(!showColorPicker)} title="Text Color" />
            
            {showColorPicker && (
              <div className="absolute top-full mt-1 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex gap-1 z-10 w-48 flex-wrap">
                {colors.map(c => (
                  <button 
                    key={c}
                    onClick={() => handleColor(c)}
                    className="w-6 h-6 rounded-full border border-gray-100 hover:scale-110 transition-transform"
                    style={{ backgroundColor: c }}
                    title={c}
                  />
                ))}
              </div>
            )}
          </div>
          
        </div>

        {/* Editor Content Area */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleChange}
          onBlur={handleChange}
          className="p-4 min-h-[200px] w-full focus:outline-none prose prose-emerald max-w-none text-gray-800 bg-white"
          style={{ whiteSpace: 'pre-wrap' }}
        />
        
      </div>
    </div>
  );
}

function ToolbarButton({ icon, onClick, title }: { icon: React.ReactNode, onClick: () => void, title: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
    >
      {icon}
    </button>
  );
}
