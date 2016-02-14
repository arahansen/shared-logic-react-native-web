import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  onRemovePress() {
    this.props.onRemovePress(this.props.todo.id);
  }

  render() {
    const { todo, key, onRemovePress } = this.props;
    console.log(onRemovePress);
    return (
      <View style={{flexDirection: 'row', padding: 2 }}>
        <Text>{todo.text}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onRemovePress.bind(this)}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: {
    borderRadius: 3,
    backgroundColor: '#ccc',
    padding: 5,
    marginLeft: 10,
  }
};
