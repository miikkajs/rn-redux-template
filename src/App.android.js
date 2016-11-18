import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    DrawerLayoutAndroid,
    TouchableOpacity,
    Navigator,
    StyleSheet,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SideMenu from './components/SideMenu/SideMenu';
import router from './Router';

const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH ? SCREEN_WIDTH * 0.8 : 300;
const REF_DRAWER = 'drawer';
const REF_NAVI = 'navigator';

export default class App extends Component {

    openDrawer() {
        this.refs[REF_DRAWER].openDrawer();
    }

    closeDrawer() {
        this.refs[REF_DRAWER].closeDrawer();
    }

    navigate(route) {
        this.refs[REF_NAVI].replace(route);
        this.props.navigate(route);
        this.refs[REF_DRAWER].closeDrawer();
    }

    pushRoute(route, navigator) {
        navigator.push(route);
    }

    popRoute(navigator) {
        navigator.pop();
    }

    renderScene(route, navigator) {
        console.log(`Rendering scene ${route.scene}.`);
        return React.createElement(router.getSceneByRoute(route), {
            ...route,
            pushRoute: (route, props) => this.pushRoute(route, navigator),
            popRoute: () => this.popRoute(navigator)
        });
    }

    renderNavigationBar() {
        return (
            <Navigator.NavigationBar
                routeMapper={{
                    Title: (route, navigator, index, navState) => {
                        return (<Text style={styles.titleNavText}>{route.label}</Text>);
                    },
                    LeftButton: (route, navigator, index, navState) => {
                        const routeStack = navigator.getCurrentRoutes();
                        const currentRoute = routeStack[routeStack.length - 1];
                        return (
                            <TouchableOpacity style={styles.leftNavButton}
                                              onPress={currentRoute.isMenuItem ? () => this.openDrawer() : () => this.popRoute(navigator)}>
                                <Icon name={currentRoute.isMenuItem ? 'menu' : 'chevron-left'} size={32}
                                      color={'#000'}/>
                            </TouchableOpacity>
                        );
                    },
                    RightButton: (route, navigator, index, navState) => null
                }}
                style={styles.navBar}
            />
        );
    }

    render() {
        const routes = this.props.routes;
        return (
            <DrawerLayoutAndroid
                ref={REF_DRAWER}
                drawerBackgroundColor={'#fff'}
                statusBarBackgroundColor={'#000'}
                drawerLockMode='locked-closed'
                drawerWidth={DRAWER_WIDTH}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={(route) => <SideMenu items={routes}
                                                           scene={this.props.currentRoute.scene}
                                                           navigate={(route) => this.navigate(route)}/>}>
                <Navigator
                    ref={REF_NAVI}
                    initialRoute={this.props.currentRoute}
                    renderScene={(route, navigator) => {
                        return (
                            <View style={{flex: 1}}>
                                <ScrollView style={styles.scrollView}>
                                    {this.renderScene(route, navigator)}
                                </ScrollView>
                            </View>
                        );
                    }}
                    style={styles.sceneContainer}
                    navigationBar={this.renderNavigationBar()}
                />
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#999',
        elevation: 3
    },
    leftNavButton: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    rightNavButton: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    sceneContainer: {
        paddingTop: 70,
        backgroundColor: '#eee'
    },
    scrollView: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleNavText: {
        marginTop: 18,
        fontSize: 18,
        color: '#333'
    }
});