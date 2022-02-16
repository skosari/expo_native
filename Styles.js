import { StyleSheet } from "react-native"

export const gS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'  
  },
  img: {
    height: 50,
    width: 50,
  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',

  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 127,
  },
  listItemText: {
    fontSize: 18
  },
})