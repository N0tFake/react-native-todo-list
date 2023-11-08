import { Text } from 'react-native';
import AppBar from '../../components/AppBar';

export default function Task(){
  return (
    <>
      <AppBar title='Task' goBack routerBack='/pages/Home' />
      <Text>TAskss</Text>
    </>
  )
}