import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image, ScrollView, Text, View } from "react-native";
import { DrawerButton } from "@/components/drawer-button";
import { CustomOptions } from "@/types/navigation";

export default function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          className="w-28 ml-5"
          source={require('@/assets/logo.png')}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {
            drawerProps.state.routes.map((route, index) => {
              const isFocused = drawerProps.state.index === index
              const options = drawerProps.descriptors[route.key].options as CustomOptions

              if (options.title === undefined) {
                return
              }

              const onPress = () => {
                const event = drawerProps.navigation.emit({
                  type: "drawerItemPress",
                  canPreventDefault: true,
                  target: route.key
                })

                if (!isFocused && !event?.defaultPrevented) {
                  drawerProps.navigation.navigate(route.name, route.params)
                }
              }

              return (
                <View key={route.key}>
                  {
                    options.sectionTitle && (
                      <Text className="text-gray-400 font-heading uppercase ml-4 mt-6">
                        {
                          options.sectionTitle
                        }
                      </Text>
                    )
                  }
                  <DrawerButton
                    onPress={onPress}
                    iconName={options.iconName}
                    title={options.title}
                    isFocused={isFocused}
                    notifications={options.notifications}
                    isDivider={options.isDivisor}
                  />
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}