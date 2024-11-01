import { buildResponse } from './utils/utils'
import { BG2Code, BG2Response } from './types/common'
export * from './types/common'

// 复制到粘贴板
export const bg2CopyToClipboard = async (
  text: string
): Promise<BG2Response<void>> => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text)
      return buildResponse<void>(BG2Code.SUCCESS)
    } catch (err) {
      return buildResponse<void>(BG2Code.COPY_ERROR)
    }
  } else {
    return fallbackCopyToClipboard(text)
  }
}

const fallbackCopyToClipboard = async (
  text: string
): Promise<BG2Response<void>> => {
  if (!document) {
    return buildResponse<void>(BG2Code.NO_DOCUMENT)
  }

  const textarea = document.createElement('textarea')
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  textarea.style.left = '0'
  textarea.style.opacity = '0'
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)
  try {
    const successful = document.execCommand('copy')
    document.body.removeChild(textarea)
    return successful
      ? buildResponse<void>(BG2Code.SUCCESS)
      : buildResponse<void>(BG2Code.COPY_ERROR)
  } catch (err) {
    document.body.removeChild(textarea)
    return buildResponse<void>(BG2Code.COPY_ERROR)
  }
}

// 判断是否移动端
export const bg2IsMobileDevice = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768
  )
}

// GIF 图埋点方案
export const sendTrackingData = (gifUrl: string, data: Record<string, any>) => {
  const params = Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

  const img = new Image()
  img.src = `${gifUrl}?${params}`
}
