import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// 模拟数据 - 实际项目中可以从 API 获取
const serverStatus = {
  online: true,
  players: 42,
  maxPlayers: 100,
  version: '1.20.4',
  serverName: '苍岚屿',
  uptime: '3天 14小时',
  mods: 32,
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.statusCard}>
          {/* 顶部标题 */}
          <div className={styles.statusHeader}>
            <div className={styles.statusDot}>
              <span className={styles.pulseDot}></span>
              <span className={styles.statusText}>● 服务器在线</span>
            </div>
            <span className={styles.serverName}>{serverStatus.serverName}</span>
          </div>

          {/* 主体信息 */}
          <div className={styles.statusBody}>
            {/* 左侧：在线人数 */}
            <div className={styles.playerSection}>
              <div className={styles.playerCount}>
                <span className={styles.countNumber}>{serverStatus.players}</span>
                <span className={styles.countLabel}>/ {serverStatus.maxPlayers}</span>
              </div>
              <div className={styles.playerBar}>
                <div 
                  className={styles.playerBarFill} 
                  style={{ width: `${(serverStatus.players / serverStatus.maxPlayers) * 100}%` }}
                ></div>
              </div>
              <div className={styles.playerLabel}>
                <span>👥 当前在线</span>
                <span>{Math.round((serverStatus.players / serverStatus.maxPlayers) * 100)}%</span>
              </div>
            </div>

            {/* 右侧：服务器信息 */}
            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>📌 游戏版本</span>
                  <span className={styles.infoValue}>{serverStatus.version}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>⏱ 运行时长</span>
                  <span className={styles.infoValue}>{serverStatus.uptime}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>📦 模组数量</span>
                  <span className={styles.infoValue}>{serverStatus.mods}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>🔗 服务器IP</span>
                  <span className={styles.infoValue}>play.geyino.top</span>
                </div>
              </div>
            </div>
          </div>

          {/* 底部操作 */}
          <div className={styles.statusFooter}>
            <button className={styles.joinButton} onClick={() => {
              navigator.clipboard?.writeText('play.geyino.top');
              alert('IP 已复制到剪贴板！');
            }}>
              📋 复制IP地址
            </button>
            <span className={styles.updateTime}>数据更新：实时</span>
          </div>
        </div>
      </div>
    </section>
  );
}