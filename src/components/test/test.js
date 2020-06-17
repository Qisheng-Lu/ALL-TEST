import React from 'react'
import '../../assets/style/test.css';
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: '张三',
      age: 0,
      baseAge: 20,
      value: '12345'
    };
    this.showConsole = this.showConsole.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: '李四'
    })
    this.logFunction()
    this.setAge()
  }

  logFunction(){
    // console.log('11223344')
  }

  setAge(){
    this.setState((state,props)=>({
      age: state.baseAge + Number(props.age)
    }))
  }

  showConsole(){
    console.log(this.state.name)
  }

  showList(){
    let list = [1,2,3,4,5]
    return list.map(item=>{
      return <li key={item}>{item}</li>
    })
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  render() {
    let domList = this.showList()
    return(
      <div>
        <h1>test,{this.props.name}</h1>
        <h2>{this.state.name}</h2>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        {this.state.baseAge > 1 &&
          <button className="click-button" onClick={this.showConsole}></button>
        }
        <ul>
          {domList}
        </ul>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>);
  }
}

export default Test