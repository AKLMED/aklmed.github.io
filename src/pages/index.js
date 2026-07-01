import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={styles.heroContainer}>
      <div className="container">
        
        <div className={styles.domainText}>
          GEYINO.TOP
        </div>

        <Heading as="h1" className={styles.mainTitle}>
          苍岚屿
        </Heading>

        <p className={styles.subText}>
          原版空岛生存改良 | 和谐社区 | 长期测试
        </p>

        <div className={styles.buttonGroup}>
          <Link className={styles.btnPrimary} to="/docs/intro">
            如何游玩 &rarr;
          </Link>
          <Link className={styles.btnSecondary} to="/">
            答疑
          </Link>
          <Link className={styles.btnSecondary} to="/">
            百科
          </Link>
          <Link className={styles.btnSecondary} to="/">
            客户端下载
          </Link>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>5年+</span>
            <span className={styles.statLabel}>开服经验</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>20+</span>
            <span className={styles.statLabel}>稳定人数</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>1.21.11</span>
            <span className={styles.statLabel}>支持版本</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Bentobox Minecraft server plugin documentation">
      <HomepageHeader />
      <main>
        {/* 如果只想显示这一屏，就把下面这一行注释或删掉 */}
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}