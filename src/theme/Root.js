import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import styles from './modal.module.css'; // 注意：这里引用一个新的CSS文件

function GlobalWelcomeModal() {
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 【修改点1】：检查是否已经在这个会话中弹过窗了
    // sessionStorage 在关闭浏览器标签页后会清空，localStorage 则永久保留
    const hasShown = sessionStorage.getItem('hasShownWelcome'); 
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 100); 
      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // 保持依赖数组不变，防止路由变化时过早清理定时器

  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
      // 【修改点2】：在关闭弹窗时，记录已经看过了
      sessionStorage.setItem('hasShownWelcome', 'true');
    }, 300);
  };

  return (
    <>
      {showModal && (
        <div 
          className={clsx(styles.modalOverlay, closing && styles.closing)} 
          onClick={handleCloseModal}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleCloseModal}>&times;</button>
            <h2 className={styles.modalTitle}>苍岚屿空岛生存欢迎您</h2>
            <div className={styles.modalText}>
              <p>服务器正在不删档长期测试中！</p>
              <p>祝你在空岛生存愉快！</p>
            </div>
            <a className={styles.modalBtn} href="https://qm.qq.com/q/aeK6Z8yoLu" target="_blank" rel="noopener noreferrer">
              加入 QQ 群
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default function Root({children}) {
  return (
    <>
      <GlobalWelcomeModal />
      {children}
    </>
  );
}