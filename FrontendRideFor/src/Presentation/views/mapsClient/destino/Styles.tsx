import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 19,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 10,
    marginRight: 18,
  },
  icon: {
    color: 'orange',
    fontSize: 20,
  },
  input: {
    flex: 0.8,
    height: 50,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#F4F4F4',  // Color del borde del input
    borderRadius: 10,
    backgroundColor: '#F4F4F4',  // Fondo gris del input
    paddingLeft: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'orange',
    padding: 8,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonIcon: {
    marginRight: 20,
    color: 'orange',
    fontSize: 18,
  },
  buttonText: {
    fontSize: 18,
    color: 'orange',
   
    
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 19,
  },

 
  focused: {
    borderColor: 'orange',
  },
});
