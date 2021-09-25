import React from "react";
// @ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Distance, Location } from "types/location";
import { Address } from "types/address";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";
import Button from "components/global/Button";
import { User } from "types/user";

interface props {
  current: Address;
  destination: string;
  destinationName: string;
  total: number;
  user: User;
  nav: any;
}

export default function Map({
  current,
  destination,
  destinationName,
  total,
  user,
  nav,
}: props) {
  const mapRef = React.useRef(null);
  const [fullCurrent, setFullCurrent] = React.useState<Location | null>();
  const [fullDestination, setFullDestination] =
    React.useState<Location | null>();
  const [distance, setDistance] = React.useState<Distance | null>();

  React.useEffect(() => {
    const textSearch = async (place: string, type: string) => {
      fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&key=${GOOGLE_MAPS_APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (type === "current") {
            setFullCurrent(data.results[0]);
          } else if (type === "destination") {
            setFullDestination(data.results[0]);
          }
        });
    };
    textSearch(current.address, "current");
    textSearch(destination, "destination");
  }, []);

  React.useEffect(() => {
    if (!fullCurrent || !fullDestination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
    });
    const calculateDistance = async (origin, dest) => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=place_id:${origin.place_id}&destinations=place_id:${dest.place_id}&key=${GOOGLE_MAPS_APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setDistance(data.rows[0].elements[0]);
        });
    };
    calculateDistance(fullCurrent, fullDestination);
  }, [fullCurrent, fullDestination]);

  const redirectToPayment = () => {
    nav.navigate("payment", {
      restaurant: destinationName,
    });
  };

  const styles = useDynamicValue(dynamicStyles);
  return (
    <View>
      {fullCurrent && fullDestination && (
        <MapView
          initialRegion={{
            latitude: fullCurrent?.geometry.location.lat,
            longitude: fullCurrent?.geometry.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          ref={mapRef}
          style={{ flex: 1, minHeight: "50%" }}
        >
          {fullCurrent && fullDestination && (
            <MapViewDirections
              origin={fullCurrent.formatted_address}
              destination={fullDestination.formatted_address}
              lineDashPattern={[0]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="black"
            />
          )}

          {fullCurrent?.geometry.location && (
            <Marker
              coordinate={{
                latitude: fullCurrent.geometry.location.lat,
                longitude: fullCurrent.geometry.location.lng,
              }}
              title={current.name}
              description={fullCurrent.formatted_address}
              identifier="origin"
            />
          )}

          {fullDestination?.geometry.location && (
            <Marker
              coordinate={{
                latitude: fullDestination.geometry.location.lat,
                longitude: fullDestination.geometry.location.lng,
              }}
              title={destinationName}
              description={fullDestination.formatted_address}
              identifier="destination"
            />
          )}
        </MapView>
      )}
      <View>
        {!distance && <Text>Loading..</Text>}
        {distance && (
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={[styles.text, styles.title]}>Order Summary: </Text>
              <View style={styles.textContainer}>
                <Text style={[styles.text, styles.info]}>
                  • Restaurant: {destinationName}
                </Text>
                <Text style={[styles.text, styles.info]}>
                  • Deliver to: {current.name}
                </Text>
                <Text style={[styles.text, styles.info]}>
                  • Total: {Math.round(total * 100) / 100} €
                </Text>
                <Text style={[styles.text, styles.info]}>
                  • Estimated Delivery Time: {distance.duration.text}
                </Text>
              </View>
            </View>
            <Button
              text="Proceed"
              onPress={redirectToPayment}
              background={palette.primary}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    width: "100%",
    height: "80%",
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: new DynamicValue(
      palette.lightPrimary,
      palette.darkSecondary
    ),
  },
  innerContainer: {
    justifyContent: "space-between",
  },
  textContainer: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  info: {},
});
