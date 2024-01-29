// Write your code here
import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, getBtnValue, isActive} = props
  const {directionId, displayText, value} = eachItem

  const onClickingBtn = () => {
    getBtnValue(value)
  }
  const isTrue = isActive === value

  return (
    <li>
      <Button onClick={onClickingBtn} isActive={`${isTrue}`}>
        <p>{displayText}</p>
      </Button>
    </li>
  )
}

export default GradientDirectionItem
