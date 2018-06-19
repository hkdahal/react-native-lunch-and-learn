import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { List, ListItem } from 'react-native-elements'

export default class AvatarList extends Component {
  render() {

    const list = [
        {
          name: 'Hari Dahal',
          avatar_url: 'https://avatars3.githubusercontent.com/u/9502321?s=460&v=4',
          subtitle: 'Vice President'
        },
        {
          name: 'John Doe',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        }
      ]


    return (
      <View>
          <List containerStyle={{marginBottom: 20}}>
            {
              list.map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={{uri:l.avatar_url}}
                  key={i}
                  title={l.name}
                  onPress={() => console.log(l.name)}
                />
              ))
            }
          </List>
      </View>
    )
  }
}
