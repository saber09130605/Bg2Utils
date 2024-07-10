import { buildResponse } from "./utils/utils";
import { BG2Code, BG2Response } from "./types/common";
export * from "./types/common";
// export * from "./utils/utils";
//复制到粘贴板
export const bg2CopyToClipboard = async (text: string):  Promise<BG2Response<void>> => {
  if (!navigator.clipboard) {
    if (!document) {
      return buildResponse<void>(BG2Code.NO_DOCUMENT);
    }
    return fallbackCopyToClipboard(text);
  }

  try {
    await navigator.clipboard.writeText(text);
    // console.log('Text successfully copied to clipboard');
    return buildResponse<void>(BG2Code.SUCCESS);
  } catch (err) {
    // console.error('Error copying text to clipboard', err);
    return buildResponse<void>(BG2Code.COPY_ERROR);
  }
}
const fallbackCopyToClipboard = async (text: string):Promise<BG2Response<void>>=>{
  // 创建一个textarea元素
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.opacity = '0';
  textarea.value = text;
  textarea.focus();
  textarea.select();

  try {
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea); // 清理DOM
    if (successful) {
      // console.log('Text successfully copied to clipboard using fallback');
      return buildResponse<void>(BG2Code.SUCCESS);
    } else {
      // console.error('Fallback copy to clipboard failed');
      return buildResponse<void>(BG2Code.COPY_ERROR);
    }
  } catch (err) {
    document.body.removeChild(textarea); // 确保清理DOM
    // console.error('Exception while copying to clipboard', err);
    return buildResponse<void>(BG2Code.COPY_ERROR);
  }
}


//判断是否移动端
export const bg2IsMobileDevice= () => {
  return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
      ) || window.innerWidth < 768
  );
}

