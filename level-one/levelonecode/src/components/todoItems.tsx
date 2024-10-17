import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
  subTitle: string;
  isCompleted?: boolean;
};
const TodoItems = ({title, subTitle, isCompleted}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subTitleStyle}>{subTitle}</Text>
      </View>
      {!isCompleted ? (
        <View style={styles.actionContainer}>
          <Text style={styles.iconStyle}>Ed</Text>
          <Text style={styles.iconStyle}>Del</Text>
          <Text style={styles.iconStyle}>Cple</Text>
        </View>
      ) : null}
    </View>
  );
};
export default TodoItems;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#DCD8CB',
    borderRadius: 15,
    marginTop: 12,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#163C45',
  },
  subTitleStyle: {
    fontSize: 16,
    color: '#000',
  },
  iconStyle: {
    fontSize: 20,
    color: '#163C45',
  },
  textContainer: {
    flex: 2,
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
