import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// 2. 封装一个获取数据的子组件
function ServerStats() {
  // 定义状态
  const [stats, setStats] = useState({
    online: false,    // 是否在线
    players: 0,       // 在线人数
    version: '加载中...', // 版本号
  });

  // 你的服务器信息
  const SERVER_IP = 'mc233.cn'; 
  const SERVER_PORT = 25565;        

  // 3. 编写数据获取与自动更新逻辑 (每隔 15 秒刷新一次)
  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        // 调用免费 API (使用 /2 节点通常支持跨域)
        const response = await fetch(`https://api.mcsrvstat.us/2/${SERVER_IP}:${SERVER_PORT}`);
        const data = await response.json();

        if (data.online) {
          setStats(prev => ({
            ...prev,
            online: true,
            players: data.players.online,
            version: data.version || '未知版本',
          }));
        } else {
          setStats(prev => ({
            ...prev,
            online: false,
            players: 0,
            version: '服务器离线',
          }));
        }
      } catch (error) {
        console.error("获取服务器状态失败:", error);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  // 【修改点1】删除了原来计算 uptime 的 useEffect

  return (
    <div className={styles.statsContainer}>
      {/* 【修改点2】这里直接显示硬编码的服务器IP */}
      <div className={styles.statItem}>
        <span className={styles.statNum}>mc233.cn</span>
        <span className={styles.statLabel}>服务器地址</span>
      </div>

      <div className={styles.statItem}>
        <span className={styles.statNum}>
          {stats.players}
        </span>
        <span className={styles.statLabel}>在线人数</span>
      </div>
      
      <div className={styles.statItem}>
        <span className={styles.statNum}>{stats.version}</span>
        <span className={styles.statLabel}>服务器版本</span>
      </div>
    </div>
  );
}

// 5. 在你的主页面中使用这个组件
function HomepageHeader() {
  return (
    <header className={styles.heroContainer}>
      <div className="container">
        <div className={styles.domainText}>服务器IP：MC.GEYINO.TOP</div>
        <Heading as="h1" className={styles.mainTitle}>
          苍岚屿
        </Heading>
        <p className={styles.subText}>
          原版空岛生存改良 | 和谐社区 | 长期测试
        </p>

        <div className={styles.buttonGroup}>
          <Link className={styles.btnPrimary} to="/docs/intro">
            立即开始吧 &rarr;
          </Link>
          <Link className={styles.btnSecondary} to="/docs/category/疑难解答">
            疑难解答
          </Link>
          <Link className={styles.btnSecondary} to="/docs/category/玩法百科">
            玩法教程
          </Link>
          <Link 
            className={styles.btnSecondary} 
            href="https://qm.qq.com/q/aeK6Z8yoLu"
          >
            客户端下载
          </Link>
        </div>

        <ServerStats /> 
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Server Home">
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}