import React, { useEffect, useRef, useState } from "react"
import type { FC, ReactNode } from "react"
import { message, Slider } from "antd"
import { AppPlayerBarWrapper, BarControl, BarOperator, BarPlayerInfo } from "./style"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSeletor, useAppShallowEqual } from "@/store"
import { formatTime, getImageUrl } from "@/utils/format"
import getSongUrl from "@/utils/handle-player"
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from "./store/player"

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const { currentSong, lyric, lyricIndex, playMode } = useAppSeletor(
    (state) => ({
      currentSong: state.player.currentSong,
      lyric: state.player.lyric,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    useAppShallowEqual
  )
  const dispatch = useAppDispatch()

  const audioRef = useRef<HTMLAudioElement>(null)
  // 记录暂停/播放
  const [isPlaying, setIsPlaying] = useState(false)
  // 记录进度
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = getSongUrl(currentSong.id)
      audioRef.current
        .play()
        .then((res) => {
          audioRef.current?.play()
          setIsPlaying(true)
        })
        .catch((err) => {
          setIsPlaying(false)
        })

      // 获取音乐总时长
      setDuration(currentSong.dt)
    }
  }, [currentSong])

  function handlePlayClick() {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  function handleTimeUpdate() {
    // 获取当前播放时间
    const currentTime = audioRef.current!.currentTime * 1000

    // 计算当前进度

    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    // 根据时间匹配歌词 currentTime/lyric

    let index = lyric.length - 1
    for (const item of lyric) {
      if (item.time > currentTime) {
        const findIndex = lyric.findIndex((iten) => iten.time === item.time)
        index = findIndex - 1
        break
      }
    }

    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))

    message.open({
      content: lyric[index].text,
      key: "lyric",
      duration: 0
    })
    message.config({
      prefixCls: "lyric-class"
    })
  }

  function handleTimeEnded() {
    if (playMode === 1) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
    }
  }

  function handleSliderChange(value: number) {
    const current = (value / 100) * duration

    audioRef.current!.currentTime = current / 1000
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }

  function handleSliderChanging(value: number) {
    setIsSliding(true)
    setProgress(value)

    const currentTime = (value / 100) * duration

    setCurrentTime(currentTime)
  }

  function changePlayMode() {
    let NewplayMode = playMode + 1
    if (NewplayMode > 2) NewplayMode = 0
    dispatch(changePlayModeAction(NewplayMode))
  }

  function handleChangeMusic(isNext = false) {
    dispatch(changeMusicAction(isNext))
  }
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button className="btn sprite_playbar play" onClick={handlePlayClick}></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic(true)}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <NavLink to="/discover/player">
            <img className="image" src={getImageUrl(currentSong?.al?.picUrl, 50)} alt="" />
          </NavLink>

          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                step={0.5}
                tooltip={{ formatter: null }}
                onAfterChange={handleSliderChange}
                onChange={handleSliderChanging}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop" onClick={changePlayMode}></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>

      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded} />
    </AppPlayerBarWrapper>
  )
}

export default AppPlayerBar
