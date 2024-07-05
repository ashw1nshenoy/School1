import { StyleSheet, Text, View, ScrollView, Pressable ,Image} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
    const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* <Feather name="bar-chart" size={24} color="black" /> */}
            <Text style={{ fontSize: 16, fontWeight: "600", textAlign:"center", paddingLeft:60}}>
              Student Managament System
            </Text>
            {/* <Entypo name="lock" size={24} color="black" /> */}
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
           onPress={() => router.push("/(home)/employees")}
              style={{
                backgroundColor: "#D3CCE3",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/021/770/058/original/avatar-of-a-student-character-free-vector.jpg"}} style={{width:50,height:50}}/>
                {/* <Ionicons name="ios-people-sharp" size={24} color="black" />
               */}
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Student List
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/markattendance")}
              style={{
                backgroundColor: "#D3CCE3",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={{uri:"https://previews.123rf.com/images/feelisgood/feelisgood1709/feelisgood170900954/85757582-flat-user-icon-member-sign-avatar-button-with-check-mark-pictogram-quick-and-easy-recolorable-shape.jpg"}} style={{width:50,height:50,borderRadius:50}}/>
                {/* <Ionicons name="ios-people-sharp" size={24} color="black" /> */}
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Attendance Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
                onPress={() => router.push("/(home)/summary")}
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Progress Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Important Event and Examination Schedules
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Annoucements
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "#f79d00",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",

                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
            </View>
            <View
              style={{
                backgroundColor: "#ABCABA",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7 }}>Student Records</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* <View
              style={{
                backgroundColor: "#D3CCE3",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",

                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{ marginTop: 7 }}>Cost Savings</Text>
            </View> */}
            {/* <View
              style={{
                backgroundColor: "#bdc3c7",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7 }}>Employee Performance</Text>
            </View> */}
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
