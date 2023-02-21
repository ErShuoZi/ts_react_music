import React, { PureComponent } from "react"

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}

class Demo02 extends PureComponent<IProps, IState> {
  name = "123"
  state: IState = {
    message: "HelloWorld",
    counter: 100
  }
  render(): React.ReactNode {
    return (
      <div>
        name:{this.props.name}
        age:{this.props.age}
        message:{this.state.message}
        counter:{this.state.counter}
      </div>
    )
  }
}

export default Demo02
