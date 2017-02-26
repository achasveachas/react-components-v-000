class Button extends React.Component {
  render(){
    return React.createElement('button', {}, 'Click me!')
  }
}

const nestedButtons = React.createElement('div', {}, [
  React.createElement(Button),
  React.createElement(Button)
])
ReactDOM.render(nestedButtons, document.getElementById('main'))
