import React from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
  name: string
  age: number
  height: number
}
// 约束方式二:
const Download: FC<IProps> = (props) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>name:{props.age}</div>
      <div>name:{props.height}</div>
      <div>children:{props.children}</div>
    </div>
  )
}

// 约束方式一:
// const Download = (props: IProps) => {
//   return (
//     <div>
//       <div>name:{props.name}</div>
//       <div>name:{props.age}</div>
//       <div>name:{props.height}</div>
//     </div>
//   )
// }

// 约束方式二比约束方式一提示更好:
// Download.defaultProps = {
//   name:"",
//   age
// }

export default Download
