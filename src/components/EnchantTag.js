import React from 'react';

const colorMap = {
  盔甲: '#1e84d7',
  武器: '#b63f3f',
  工具: '#409643',
  远程: '#d48103',
  其他: '#9325a7',
  通用: '#607d8b',
  重锤: '#d11d59',
  拓展: '#d9c934',
};

export default function EnchantTag({ type, children }) {
  const bg = colorMap[type] || '#999';
  const textColor = type === '拓展' ? '#333' : 'white';
  
  return (
    <span
      style={{
        backgroundColor: bg,
        color: textColor,
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '0.9em',
        whiteSpace: 'nowrap',
      }}
    >
      {children || type}
    </span>
  );
}