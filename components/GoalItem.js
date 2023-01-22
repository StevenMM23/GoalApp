import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem({ text, keyValue, onDeleteItem }) {
  return (
    <View key={keyValue} style={styles.goalsList}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, keyValue)}
        style={({pressed}) => pressed && styles.pressItem}
      >
        <Text style={styles.goalListText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsList: {
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressItem: {
    opacity: 0.5,
  },
  goalListText: {
    padding: 15,

    color: "white",
    fontWeight: "bold",
  },
});
