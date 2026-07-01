import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import Link from '@docusaurus/Link'; 

export default function DocItemFooter() {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;

  const canDisplayTagsRow = tags.length > 0;
  
  // 👇 修复：判断是否存在时间
  const hasUpdateTime = !!(lastUpdatedAt || lastUpdatedBy);

  // 如果没有标签，就直接跳过
  if (!canDisplayTagsRow && !hasUpdateTime) {
    // 哪怕没有时间，如果想强制显示反馈按钮，就把这行注释掉，下面单独判断
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
  };

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      
      {canDisplayTagsRow && (
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterTagsRow,
          )}>
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}

      {/* 👇 只要配置了 editUrl，这个区块就会一直出现，不受时间影响 */}
      <div className={clsx('row margin-top--sm', ThemeClassNames.docs.docFooterEditMetaRow)}>
        <div className="col">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            
            {/* ✅ 反馈问题按钮（独立显示） */}
            <div>
              <Link
                className="button button--secondary button--sm"
                href="https://qm.qq.com/q/aeK6Z8yoLu" 
                target="_blank"
              >
                帮助我们完善文档
              </Link>
            </div>

            {/* ✅ 最后更新时间（只有真正获取到时间才显示） */}
            {hasUpdateTime && (
              <div style={{ fontSize: '0.9em', color: 'var(--ifm-color-emphasis-600)' }}>
                <span>最后更新于 {formatDate(lastUpdatedAt)}</span>
              </div>
            )}

          </div>
        </div>
      </div>
      
    </footer>
  );
}