import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  locationName: string;
}

export default function LocationMap({ latitude, longitude, locationName }: LocationMapProps) {
  return (
    <View style={tw`overflow-hidden rounded-2xl`}>
      <MapView
        style={tw`w-full h-40`}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
      <View style={tw`absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2`}>
        <Text style={tw`text-white text-sm`}>{locationName}</Text>
      </View>
    </View>
  );
} 