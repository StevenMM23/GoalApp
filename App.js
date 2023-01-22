import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisibleState] = useState(false)

  function startAddGoalHandler() { 
    setModalVisibleState(true);
  }

  function endAddGoalHandler() { 
    setModalVisibleState(false);
  }
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => id !== goal.key);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                onDeleteItem={deleteGoalHandler}
                text={itemData.item.text}
                keyValue={itemData.item.key}
              ></GoalItem>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    marginTop: 50,
  },

  goalsContainer: {
    borderColor: "#cccccc",
    borderTopWidth: 1,
    flexDirection: "column",
    paddingTop: 30,
    flex: 1,
  },
});
