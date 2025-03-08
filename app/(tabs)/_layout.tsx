import { IconSymbol } from '@/components/ui/IconSymbol'
import { MaterialBottomTabs as Tab } from '@/components/MaterialBottomTabBar'

export default function TabLayout() {
  return (
    <Tab
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name='(home)/index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => (
            <IconSymbol
              size={26}
              name='house.fill'
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='(search)/search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }: { color: string }) => (
            <IconSymbol
              size={26}
              name='magnifyingglass'
              color={color}
            />
          ),
        }}
      />
    </Tab>
  )
}
