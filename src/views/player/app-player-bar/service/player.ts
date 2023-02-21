import { lsRequest } from "@/service"

export function getSongDetail(ids: number) {
  return lsRequest.get({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return lsRequest.get({
    url: "/lyric",
    params: {
      id
    }
  })
}
