import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 50px;
`;

export const SectionTitle = styled.Text`
  font-size: 40px;
  padding-left: 16px;
  font-weight: bold;
  color: #1C1B1A;
  transform:scale(1,1.2);
`
export const Strong = styled.Text`
  padding-left: 16px;
  font-weight: 800;
  color: #1C1B1A;
`
export const Description = styled.Text`
  font-weight: 500;
  color: #1C1B1A;
`
export const WarningBox = styled.TouchableOpacity`
  background-color: #F8F2ED;
  margin-top: 24px;
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 20px;
`;

export const ItemImage = styled.Image`
  max-width: 100%;
  height: 240px;
`

export const ItemTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #1C1B1A;
  text-transform: uppercase;
  transform:scale(1,1.2);
`

export const ItemWarn = styled.Text`
  font-size: 12px;
  font-weight: 800;
  color: #CD0005;
  margin: 6px 0px 36px 0px;
  transform:scale(1,1.3);
  opacity: 0.7;
`

export const WarningLeft = styled.View`
  flex-direction: row;
  flex: 1
`
export const WarningAddress = styled.View`
  flex-direction: row;
  marginRight: 80px;
`