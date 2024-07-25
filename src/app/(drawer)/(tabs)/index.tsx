import { Avatar } from '@/components/avatar'
import { Email } from '@/components/email'
import { FloatButton } from '@/components/float-button'
import { MenuButton } from '@/components/menu-button'
import { SearchInput } from '@/components/search-input'
import { EMAILS } from '@/utils/emails'
import { FlatList, Text, View } from 'react-native'

export default function Home() {
  return (
    <View className='relative flex-1 bg-gray-900 pt-14 p-4'>
      <SearchInput>
        <MenuButton/>
        <SearchInput.Field placeholder='Pesquisar no e-mail'/>
        <Avatar source={{ uri: "https://github.com/guilhermeArievilo.png" }} size='small'/>
      </SearchInput>
      <FlatList
        data={EMAILS}
        keyExtractor={email => email.id}
        renderItem={({ item }) => <Email data={item}/>}
        contentContainerClassName='gap-6'
        ListHeaderComponent={() => 
          <Text className='uppercase text-gray-400 text-sm font-subtitle mt-6'>Entrada</Text>
        }
      />

      <FloatButton icon='edit' />
    </View>
  )
}
