import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';


export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onAddTodo(e) {
    const { addTodo } = this.props;
    addTodo(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity onPress={this.onAddTodo.bind(this)} style={styles.button}>
          <Text style={{color:'white'}}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const skywardBlue = 'rgba(5, 162, 230, 1)';
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: skywardBlue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
});
