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
    players: '离线',       // 在线人数
    version: '加载中...', // 版本号
  });

  // 你的服务器信息
  const SERVER_IP = 'mc.geyino.top'; 
  const SERVER_PORT = 25565;        

  // 3. 编写数据获取与自动更新逻辑 (每隔 15 秒刷新一次)
  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        // 调用免费 API (使用 /2 节点通常支持跨域)
        const response = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);  //:${SERVER_PORT} ${SERVER_IP}
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
            version: '离线',
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
        <span className={styles.statNum}>mc.geyino.top</span>
        <span className={styles.statLabel}>SERVER IP</span>
      </div>

      <div className={styles.statItem}>
        <span className={styles.statNum}>
          {stats.players}
        </span>
        <span className={styles.statLabel}>ONLINE</span>
      </div>
      
      <div className={styles.statItem}>
        {/* {stats.version} */}
        <span className={styles.statNum}>1.21.11</span> 
        <span className={styles.statLabel}>SERVER VERSION</span>
      </div>
    </div>
  );
}


// 5. 在你的主页面中使用这个组件

// 5. 在你的主页面中使用这个组件
/*
function HomepageHeader() {
  return (
    <header className={styles.heroContainer}>
      <div className="container">
        <div className={styles.domainText}>MC.GEYINO.TOP</div>
        <Heading as="h1" className={styles.mainTitle}>
          苍岚屿
        </Heading>
        <p className={styles.subText}>
          原版空岛生存改良 | 和谐社区 | 长期测试
        </p>

        <div className={styles.buttonGroup}>
          <Link className={styles.btnPrimary} to="/docs/start">
            立即开始吧 &rarr;
          </Link>
          <Link className={styles.btnSecondary} to="/docs/category/常见问题">
            常见问题
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
*/
function HomepageHeader() {
  return (
    <header className={styles.heroContainer}>
      <div className="container">
        {/* 顶部域名保持不变 */}
        <div className={styles.heroDomainWrapper}>
          <div className={styles.domainText}>mc.geyino.top</div>
        </div>
        
        {/* 【修改】使用 flex 容器包裹标题和 Logo */}
        <div className={styles.heroHeader}>
          {/* 左侧：标题和副标题 */}
          <div className={styles.heroTitleGroup}>
            <Heading as="h1" className={styles.mainTitle}>
              苍岚屿
            </Heading>
            <p className={styles.subText}>
              原版空岛生存改良 | 和谐社区 | 长期测试
            </p>
          </div>
          
          {/* 右侧：Logo */}
          <img 
            src="/img/logo.png"  // 替换为你的 Logo 路径
            alt="苍岚屿 Logo"
            className={styles.heroLogo}
          />
        </div>

        {/* 按钮组和 Stats 保持不变 */}
        <div className={styles.heroContent}>
          <div className={styles.buttonGroup}>
            <Link className={styles.btnPrimary} to="/docs/start">
              立即开始吧 &rarr;
            </Link>
            <Link className={styles.btnSecondary} to="/docs/category/常见问题">
              常见问题
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