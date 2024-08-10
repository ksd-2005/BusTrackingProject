import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BUS from './screens/BUS';
import E_AUTO from './screens/E_AUTO';
import E_RICKSHAW from './screens/E_RICKSHAW';
import Sidebar from './screens/sidebar';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTabsCollapsed, setIsTabsCollapsed] = useState(true);
  const collapseAnim = useState(new Animated.Value(0))[0];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOutsideClick = () => {
    if (isSidebarOpen) {
      closeSidebar();
    }
  };

  const toggleCollapse = () => {
    Animated.timing(collapseAnim, {
      toValue: isTabsCollapsed ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    setIsTabsCollapsed(!isTabsCollapsed);
  };

  const collapsedHeight = collapseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get('window').height / 3], // Open to one-third of the screen
  });

  const arrowPosition = collapseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [20, Dimensions.get('window').height / 3 + 10], // Move arrow from bottom to top of the tabs
  });

  const arrowRotation = collapseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], // Rotate the arrow when tabs open
  });
  
  interface SidebarProps {
    closeSidebar: () => void;
  }
  
  // const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  //   // your sidebar component implementation

  // };

  return (
    <>
     {isSidebarOpen && (
        <TouchableWithoutFeedback onPress={handleOutsideClick}>
          <View style={styles.overlay}>
            <Sidebar  />
          </View>
        </TouchableWithoutFeedback>
      )}
     
      <View style={styles.navbar}>
        <TouchableOpacity onPress={toggleSidebar}>
          <MaterialCommunityIcons name="menu" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.navbarTitle}>BUS</Text>
      </View>

      <Animated.View style={[styles.collapsibleTabs, { height: collapsedHeight }]}>
        <NavigationContainer>
          <Tab.Navigator
            
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                let iconName;
                if (route.name === 'BUS') {
                  iconName = 'bus';
                } else if (route.name === 'E_AUTO') {
                  iconName = 'rickshaw-electric';
                } else if (route.name === 'E_RICKSHAW') {
                  iconName = 'golf-cart';
                }
                return <MaterialCommunityIcons name={iconName} size={20} color={color} />;
              },
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="BUS" component={BUS} />
            <Tab.Screen name="E_AUTO" component={E_AUTO} />
            <Tab.Screen name="E_RICKSHAW" component={E_RICKSHAW} />
          </Tab.Navigator>
        </NavigationContainer>
      </Animated.View>

      {!isSidebarOpen && ( // Conditionally render the arrow button based on isSidebarOpen
        <Animated.View style={[styles.toggleButtonContainer, { bottom: arrowPosition }]}>
          <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse}>
            <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
              <MaterialCommunityIcons name="chevron-up" size={30} color="white" />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#2196F3',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navbarTitle: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: '100%',
    zIndex: 1000,
    backgroundColor: 'transparent',
  },
  collapsibleTabs: {
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 999,
  },
  toggleButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1000,
  },
  toggleButton: {
    backgroundColor: '#2196F3', 
    borderRadius: 25, 
    padding: 5, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});