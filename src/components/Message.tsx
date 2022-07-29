import { MessageProps } from "../utils/types"

export default function Message({ message }: MessageProps) {
  return (
    <div>
      {message}
    </div>
  )
}
