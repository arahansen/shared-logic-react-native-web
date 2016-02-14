import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Todo from './Todo';
import AddTodo from './AddTodo';

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
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 500,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

const region = {
  latitude: 45.5245232,
  longitude: -122.6968767,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};


export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, removeTodo } = this.props;

    return (
      <View>
        {todos.map((todo, index) =>
          <Todo
            key={index}
            todo={todo}
            onRemovePress={removeTodo} />
        )}
      </View>
    );
  }
}

//
// <View>
//   <Text>Map</Text>
//   <TouchableOpacity
//     style={styles.button}
//     onPress={this.onZoomPlus}>
//     <Text style={{color:'white'}}>+</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={styles.button}
//     onPress={this.onZoomMinus}>
//     <Text style={{color:'white'}}>-</Text>
//   </TouchableOpacity>
//   <MapView
//     style={styles.map}
//     initialRegion={{
//       latitude: 45.520215,
//       longitude: -122.671138,
//       latitudeDelta: 0.04,
//       longitudeDelta: 0.04,
//     }}
//   >
//     <MapView.Circle
//       center={{
//         latitude: 45.520215,
//         longitude: -122.671138,
//       }}
//       radius={1000}
//       strokeWidth={3}
//       style={{opacity:0}}
//       strokeColor="rgba(5, 162, 230, 1)"
//       fillColor="rgba(5, 162, 230, 0.5)"/>
//   </MapView>
// </View>
