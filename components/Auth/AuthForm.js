import { View } from 'react-native';
import Input from '../ui/Input';

const AuthForm = () => {
  return (
    <View>
      <View>
        <Input label='이메일 주소' keyBoardType='email-address' />
        <Input label='이름' />
        <Input label='비밀번호' secure='secure' />
        <Input label='비밀번호 확인' secure />
      </View>
    </View>
  );
};

export default AuthForm;
