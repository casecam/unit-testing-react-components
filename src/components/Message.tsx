import { MessageProps } from "../utils/types"

export default function Message({ message }: MessageProps) {
  return (
    <div aria-label="message box">
      {message}
    </div>
  )
}
