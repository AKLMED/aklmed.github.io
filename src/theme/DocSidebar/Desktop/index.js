import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import styles from './styles.module.css';

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}

      <Content path={path} sidebar={sidebar} />

      <div className={styles.sidebarFooter}>
       
       <a
          href="https://github.com/AKLMED/aklmed.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sidebarButton}
        >
          📑帮助我们完善文档
        </a>
 {/* 
          <div className={styles.footerDesc}>
          <a href="https://github.com/AKLMED/aklmed.github.io">帮助我们完善文档内容</a>
          </div>
          */}
      </div>

      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}

export default React.memo(DocSidebarDesktop);