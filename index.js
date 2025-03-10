import { AppRegistry } from 'react-native'
import 'expo-router/entry'
import { name as appName } from './app.json'
import { PlaybackService } from './lib/services/PlaybackService'
import TrackPlayer from 'react-native-track-player'

AppRegistry.registerComponent(appName, () => App)

TrackPlayer.registerPlaybackService(() => PlaybackService)
