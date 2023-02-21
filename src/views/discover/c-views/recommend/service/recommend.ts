import { lsRequest } from "@/service"

export function getBanners() {
  return lsRequest.get({
    url: "/banner"
  })
}

export function getHotRecommand(limit = 30) {
  return lsRequest.get({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return lsRequest.get({
    url: "/album/newest",
    params: {}
  })
}

export function getPlayListDetail(id: number) {
  return lsRequest.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export function getArtistList(limit = 5) {
  return lsRequest.get({
    url: "/artist/list",
    params: {
      limit
    }
  })
}
