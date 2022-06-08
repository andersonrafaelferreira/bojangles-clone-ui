import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { Container, Header, Description,
  ItemImage,
  SectionTitle, WarningBox, Strong, ItemTitle, 
ItemWarn, WarningLeft, WarningAddress } from './styles';

import Chicken from '../assets/images/Chicken_Sandwiches.png'
import Boneless from '../assets/images/Boneless_Chicken_Favorites.png'

import BolanglesSvg from '../assets/icons/bojangles.svg'
import BoxSvg from '../assets/icons/icon-box.svg'
import UserSvg from '../assets/icons/icon-user.svg'
import StoreSvg from '../assets/icons/icon-store.svg'
import ArrowRightSvg from '../assets/icons/icon-circle-arrow-right.svg'

export const Bojangles: React.FC = () => {
  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <UserSvg width={26} height={26} />
        </TouchableOpacity>
        <BolanglesSvg width={130} height={30} />
        <TouchableOpacity>
          <BoxSvg width={30} height={30} />
        </TouchableOpacity>
      </Header>

      <SectionTitle>Menu</SectionTitle>

      <WarningBox>
        <WarningLeft> 
          <StoreSvg width={30} height={30} />
          <WarningAddress>
            <Strong>IN-STORE PICKUP {" "}
              <Description>
                from 1402 West Trade Street
              </Description>  
            </Strong>
          </WarningAddress>
        </WarningLeft>

        <Feather name="chevron-right" size={24} color="gray" />
      </WarningBox>
      
      <FlatList 
        data={[
          {id:1, name: 'Chicken Sandwiches', image: Chicken},
          {id: 2, name: 'Boneless Chicken Favorites', image: Boneless},
        ]}
         keyExtractor={item => String(item.id)}
         renderItem={({item}) => (
          <>
            <ItemImage source={item.image} />
            <TouchableOpacity>
              <ArrowRightSvg width={48} height={48}
                style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: -24,
                marginBottom: -10 }} 
              />
            </TouchableOpacity>
            
            <ItemTitle>{item.name}</ItemTitle>
            <ItemWarn>Available 10:30AM to close</ItemWarn>
          </>
        )}
        contentContainerStyle={{marginLeft: 16, paddingBottom: 100, marginTop: 16}}
      />
    
    </Container>
  );
}