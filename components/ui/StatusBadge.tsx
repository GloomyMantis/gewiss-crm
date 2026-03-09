import { ProjectStatus, STATUS_LABELS, STATUS_COLORS, STATUS_DOT } from '@/lib/types'
import clsx from 'clsx'

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={clsx('status-badge', STATUS_COLORS[status])}>
      <span className={clsx('w-1.5 h-1.5 rounded-full', STATUS_DOT[status])} />
      {STATUS_LABELS[status]}
    </span>
  )
}
