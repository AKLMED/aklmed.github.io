import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow'; // 👈 引入默认的 EditMetaRow 组件

export default function DocItemFooter() {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;

  // 判断是否显示标签
  const canDisplayTagsRow = tags.length > 0;
  // 判断是否有编辑信息或时间
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  
  // 如果完全没东西，直接返回空
  if (!canDisplayTagsRow && !canDisplayEditMetaRow) {
    return null;
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      
      {/* 标签行 (保持不变) */}
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

      {/* 编辑与最后更新时间行 (修改文字) */}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          className={clsx(
            'margin-top--sm',
            ThemeClassNames.docs.docFooterEditMetaRow,
          )}
          editUrl={editUrl} // 👈 链接保持不变
          lastUpdatedAt={lastUpdatedAt} // 👈 时间保持不变
          lastUpdatedBy={lastUpdatedBy} // 👈 作者保持不变
          
          // 👇 重点在这里：Docusaurus 默认的 EditMetaRow 组件支持传入自定义文字！
          editLabel="帮助我们完善文档" 
        />
      )}
      
    </footer>
  );
}