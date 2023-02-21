import { ILyric } from "@/views/player/app-player-bar/store/types"

// [01:37.28]再把我的最好的爱给你
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  // 歌词解析
  const lineStrings: string[] = lyricString.split("\n")

  const lyrics: ILyric[] = []

  for (const line of lineStrings) {
    const result = timeRegExp.exec(line)
    if (!result) continue

    // 获取每一组数据
    const time1 = Number(result[1]) * 60 * 1000
    const time2 = Number(result[2]) * 1000
    const time3 = result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10

    const time = time1 + time2 + time3

    const text = line.replace(timeRegExp, "")

    lyrics.push({ time, text })
  }

  return lyrics
}
