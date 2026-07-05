import React from 'react';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';

function LastUpdatedAtDate({lastUpdatedAt}) {
  const atDate = new Date(lastUpdatedAt);

  const dateTimeFormat = useDateTimeFormat({
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <time dateTime={atDate.toISOString()} itemProp="dateModified">
      {dateTimeFormat.format(atDate)}
    </time>
  );
}

export default function LastUpdated({lastUpdatedAt, lastUpdatedBy}) {
  return (
    <span className={ThemeClassNames.common.lastUpdated}>
      最后由{' '}
      <b>{lastUpdatedBy}</b>
      {' 于 '}
      <b>
        <LastUpdatedAtDate lastUpdatedAt={lastUpdatedAt} />
      </b>
      {' 更新'}

      {process.env.NODE_ENV === 'development' && (
        <div>
          <small>（开发模式模拟时间）</small>
        </div>
      )}
    </span>
  );
}