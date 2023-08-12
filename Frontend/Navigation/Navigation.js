import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Header: {
        marginTop: 15
    },
    HeaderTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin: 'auto',
        alignItems: 'center'
    },
    CartCounter: {
        backgroundColor: 'green',
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        zIndex: 999,
        borderRadius: 50,
    },
    Carttxt: {
        color: 'white',
        fontSize: 10,
        fontWeight: 600
    }
})

export default styles