import Skeleton from './Skeleton'

const CardSkeleton = () => {
  return (
    <div className="bg-base-white rounded-lg border border-border overflow-hidden">
      <Skeleton variant="card" className="w-full" />
      <div className="p-4 space-y-3">
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="60%" height={16} />
        <div className="flex gap-2">
          <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
          <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton

