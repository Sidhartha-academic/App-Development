import {  View,Image } from "react-native";
import React from "react";


const Header = () => {
    return (
        <View style={{flexDirection:"row", justifyContent:"space-around",alignItems:"center",backgroundColor:"white"}}>
        <View>
            <Image
                source={require('./assets/special.png')}
                style={{height:80,width:80}}
            />
        </View>
        <View>
        <Image
                source={require('./assets/sale.png')}
                style={{height:80,width:80}}
            />
        </View>
        <View>
        <Image
                source={require('./assets/50off.png')}
                style={{height:60,width:120}}
            />
        </View>
        </View>
    )
}
export default Header;