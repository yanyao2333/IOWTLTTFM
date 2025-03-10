import { useQuery } from '@tanstack/react-query'
import { bilibiliApi } from '@/lib/api/bilibili/bilibili'

export const homeQueryKeys = {
  all: ['home'] as const,
  recentlyPlayed: () => [...homeQueryKeys.all, 'recentlyPlayed'] as const,
  playlists: () => [...homeQueryKeys.all, 'playlists'] as const,
  popularVideos: () => [...homeQueryKeys.all, 'popularVideos'] as const,
} as const

export const usePopularVideos = () => {
  return useQuery({
    queryKey: homeQueryKeys.popularVideos(),
    // 这是音乐分区的id
    queryFn: () => bilibiliApi.getPopularVideos('3'),
    staleTime: 5 * 60 * 1000,
  })
}

// 单独的查询 hooks，以便可以独立刷新和缓存
export const useRecentlyPlayed = () => {
  return useQuery({
    queryKey: homeQueryKeys.recentlyPlayed(),
    queryFn: () => bilibiliApi.getHistory(),
    staleTime: 1 * 60 * 1000, // 1 minute
  })
}

export const useSyncedPlaylists = () => {
  return useQuery({
    queryKey: homeQueryKeys.playlists(),
    queryFn: () =>
      bilibiliApi.getFavoritePlaylists(
        Number(process.env.EXPO_PUBLIC_USER_MID),
      ),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
