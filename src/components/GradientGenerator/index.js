import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  Heading,
  Paragraph,
  GenerateButton,
  Colorpara,
  Container,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeId: gradientDirectionsList[0].value,
    generate: false,
  }

  getBtnValue = value => {
    this.setState({
      activeId: value,
    })
  }

  onClickGenerate = () => {
    const {firstColor, secondColor} = this.state
    this.setState({
      firstColor: firstColor,
      secondColor: secondColor,
    })
  }

  onChangingFirstColor = event => {
    this.setState({
      firstColor: event.target.value,
    })
  }

  onChangingSecondColor = event => {
    this.setState({
      secondColor: event.target.value,
    })
  }

  render() {
    const {firstColor, secondColor, activeId} = this.state
    return (
      <>
        <Container
          linearGradient={`to${activeId},${firstColor},${secondColor}`}
          data-testid="gradientGenerator"
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <ul>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                eachItem={eachItem}
                key={eachItem.directionId}
                getBtnValue={this.getBtnValue}
                isActive={eachItem.value === activeId}
              />
            ))}
          </ul>
          <Paragraph>Pick the colors</Paragraph>
          <Colorpara>{firstColor}</Colorpara>
          <input
            type="color"
            onChange={this.onChangingFirstColor}
            value={firstColor}
          />
          <Colorpara>{secondColor}</Colorpara>
          <input
            type="color"
            onChange={this.onChangingSecondColor}
            value={secondColor}
          />
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </Container>
      </>
    )
  }
}

export default GradientGenerator
