import React, { useMemo, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

//Mapping
import Svg, { G, Path, Circle } from "react-native-svg";
import * as d3 from "d3";
import { COUNTRIES } from "../constants/CountryShapes";

const Map = (props) => {
  //Props from App.js
  const { dimensions } = props;

  //Rendersize
  const mapSize = useMemo(() => {
    return dimensions.width;
  }, [dimensions]);

  //Making the projection
  const countryPaths = useMemo(() => {
    const projection = d3
      .geoAzimuthalEqualArea()
      .rotate([0, -90])
      .fitSize([mapSize, mapSize], {
        type: "FeatureCollection",
        features: COUNTRIES,
      })
      .translate([dimensions.width / 2, mapSize / 2]);

    //SVG paths
    const geoPath = d3.geoPath().projection(projection);
    const svgPaths = COUNTRIES.map(geoPath);

    return svgPaths;
  }, [dimensions]);

  //Using hooks to draw countries, as they will change upon interaction
  const [countryList, setCountryList] = useState([]);

  //Making useEffect to update countryList state, as it is out of scope of file
  useEffect(() => {
    setCountryList(
      countryPaths.map((path, i) => {
        return (
          <Path
            key={COUNTRIES[i].properties.name}
            d={path}
            stroke={"black"}
            strokeOpacity={0.6}
            strokeWidth={0.4}
            fill={"green"}
            opacity={0.4}
          />
        );
      })
    );
  }, []);

  return (
    <View>
      <Svg width={dimensions.width} height={dimensions.height / 2}>
        <G>
          <Circle
            cx={dimensions.width / 2}
            cy={mapSize / 2}
            r={mapSize / 2}
            fill={"lightblue"}
          />
          {countryList.map((x) => x)}
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Map;
