import React from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';

// Sample product data for FlatList
const products = [
  { id: '1', name: 'AERO SPORT INFINITY PRO', price: 'Rp400.000', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/6/a/v/9-5-107805-puma-rickie-orange-silver-white-original-imagpehhqrsct3t5.jpeg?q=90&crop=false' },
  { id: '2', name: 'SPORT - INVINCIBLE PRO', price: 'Rp399.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfrz2Rym2L38tqhmcegbhtsAk2GrAVfXTnQ&s' },
  { id: '3', name: 'SPORT SNEAKERS - White', price: 'Rp200.000', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/AUGUST/28/OZAFTDQU_be905f2aef1444cbb280d0cfeaab649b.jpg' },
  { id: '4', name: 'SPORT - INVINCIBLE MAX', price: 'Rp393.000', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28423358/2024/3/21/c99e213d-2b23-4cf6-823d-d88dfaeed3531711043994992NikeInvincible3MensRoadRunningShoes1.jpg' },
  { id: '5', name: 'AIR SPORT', price: 'Rp200.000', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '6', name: 'SPORT MAX', price: 'Rp350.000', image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2V8ZW58MHx8MHx8fDA%3D' }
];

// Home Screen Component
function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Sport Shoes</Text>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search items" style={styles.searchInput} />
        </View>
      </View>

      {/* Wallet Section */}
      <View style={styles.walletSection}>
        <View style={styles.walletInfo}>
          <Text>Wallet balance</Text>
          <Text style={styles.balanceText}>Rp1.000.000</Text>
          <TouchableOpacity style={styles.topUpButton}>
            <Text style={styles.topUpText}>Top up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.offerText}>15% OFF All Items</Text>
      </View>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <FontAwesome5 name="shoe-prints" size={24} color="orange" />
          <Text>Footwear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <FontAwesome5 name="shopping-bag" size={24} color="orange" />
          <Text>Bag</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <FontAwesome5 name="tshirt" size={24} color="orange" />
          <Text>Apparel</Text>
        </TouchableOpacity>
      </View>

      {/* Product Section */}
      <Text style={styles.sectionTitle}>For You</Text>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

// Wishlist Screen Component
function WishlistScreen() {
  return (
    <FlatList
      data={products.slice(0, 4)}  // Displaying fewer items for Wishlist
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.product}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
}

// Notification Screen Component
function NotificationScreen() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.notificationTitle}>Limited-Time Promo - Up to 50% OFF!</Text>
      <Text style={styles.notificationText}>
        Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes.
      </Text>
      <Text style={styles.notificationTitle}>Flash Sale Alert - Save Big Today!</Text>
      <Text style={styles.notificationText}>
        Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices.
      </Text>
      <Text style={styles.notificationTitle}>Good Morning, Runner!</Text>
      <Text style={styles.notificationText}>
        It's time to step out and run. Give your best today and enjoy every step.
      </Text>
      <Text style={styles.notificationTitle}>Exclusive Discount Just for You</Text>
      <Text style={styles.notificationText}>
        Enjoy an exclusive 15% discount on our shoe products. Use the code EXCLUSIVE15 at checkout.
      </Text>
    </View>
  );
}

// Profile Screen Component
function ProfileScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text style={styles.sectionTitle}>Profile Information</Text>

      <TextInput 
        placeholder="Name" 
        style={styles.input} 
        defaultValue="Nikunj Chhatani" 
      />

      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        defaultValue="abc.xyz" 
        keyboardType="email-address" 
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Exchange Screen Component
function ExchangeScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text style={styles.sectionTitle}>Exchange Product</Text>

      <TextInput 
        placeholder="Product Name" 
        style={styles.input} 
      />

      <TextInput 
        placeholder="Condition (e.g., New, Like New, Used)" 
        style={styles.input} 
      />

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Exchange</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <FontAwesome5 name="home" size={size} color={color} />;
            } else if (route.name === 'Wishlist') {
              return <MaterialIcons name="favorite" size={size} color={color} />;
            } else if (route.name === 'Notifications') {
              return <Feather name="bell" size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return <FontAwesome5 name="user" size={size} color={color} />;
            } else if (route.name === 'Exchange') {
              return <FontAwesome5 name="exchange-alt" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Exchange" component={ExchangeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
  },
  walletSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  walletInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    fontWeight: 'bold',
  },
  topUpButton: {
    backgroundColor: '#ff6f00',
    padding: 5,
    borderRadius: 5,
  },
  topUpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  offerText: {
    marginTop: 10,
    color: '#ff6f00',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    alignItems: 'center',
    padding: 10,
  },
  product: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'orange',
    fontSize: 12,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  notificationText: {
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: '#ff6f00',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#ff6f00',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});