import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";

export interface Place {
  location: GooglePlaceData;
  details: GooglePlaceDetail;
}
