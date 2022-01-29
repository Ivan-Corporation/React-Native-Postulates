import React from 'react'
import { Text, HStack, Switch, useColorMode, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Icon as={Feather} name='moon' size="sm" opacity={0.5} />
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
      ></Switch>
      <Icon as={Feather} name='sun' size="sm" opacity={0.5} />

    </HStack>
  )
}
