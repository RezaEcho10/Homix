import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Welcome: {
        width: '90%',
        margin: 'auto',
        marginTop: 20
    },
    Welcometxt: {
        fontWeight: 900,
        fontSize: 32,
        marginBottom: 2
    },
    WelcometxtColor: {
        color: '#007719'
    },
    Search: {
        backgroundColor: '#C3C7C6',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 15
    },
    Camera: {
        backgroundColor: '#007719',
        width: 40,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    IconCamera:{
        color: 'white'
    },
    SearchPlace: {
        flexDirection: 'row',
    },
    IconSearch: {
        color: 'grey',
        marginLeft: 5
    },
    InputSearch: {
        color: 'grey',
        marginLeft: 5,
        outline: 0
    },
/*-----------------------------Headlines-----------------------------------*/
    Headlines: {
        width: '90%',
        margin: 'auto',
        marginTop: 15
    },
    HeadlinesItems: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Product: {
        flexDirection: 'row', justifyContent: 'space-between', width: '90%', height: 700, margin: 'auto', marginBottom: 200,
    },
    ProductImg: {
        width: '100%', height: '40%', left: '1%', borderRadius: 10,
    },
    TextProduct:{
        color: 'black',
        fontSize: 17
    },
    BackTitle: {
        flexDirection: 'row', justifyContent: 'space-between', width: '95%', margin: 'auto', alignItems: 'center'
    },
    ProductInfo: {
        marginTop: -15, borderTopStartRadius: 20, borderTopEndRadius: 20,alignItems: 'center', backgroundColor: 'black'
    }
})

export default styles