import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button/Button';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';

const SUB_VIEW = {
    scene: 'Details',
    label: 'Details',
};

export default class Dashboard extends Component {

    componentWillMount() {
        this.props.getInstructions();
    }

    displayData() {
        if (this.props.data.result) {
            return (
                <Text style={styles.text}>{this.props.data.result}</Text>
            )
        }
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.text}</Text>
                    {this.displayData()}
                    <Button label={"Download"} icon={"get-app"} onClick={this.props.getAsyncResult}/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Click button to display a subview</Text>
                    <Button label={"View"} icon={"visibility"} onClick={() => this.props.pushRoute(SUB_VIEW)}/>
                </View>
                <View style={styles.container}>
                    <ButtonGroup
                        selected={this.props.selectedButtonGroupButton}
                        buttonLabels={["cat", "dog", "horse"]}
                        onSelect={this.props.setActiveButtonGroupButton}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    text: {
        marginBottom: 25
    }
});