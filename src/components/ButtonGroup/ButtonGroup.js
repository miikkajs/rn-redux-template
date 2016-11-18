import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from '../Button/Button';

export default class ButtonGroup extends Component {
    static propTypes = {
        buttonLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
        onSelect: PropTypes.func.isRequired,
        selected: PropTypes.string
    };

    isActive(value) {
        return this.props.selected === value;
    }

    render() {
        return (
            <View style={this.getStyle('containerStyle')}>
                <Text style={this.getStyle('labelStyle')}>{this.props.label}</Text>
                <View style={styleSheet.buttonContainer}>
                    {this.props.buttonLabels.map((value, index) => {
                        return (
                            <Button
                                key={index}
                                onClick={() => this.props.onSelect(value)}
                                label={value}
                                style={[this.getStyle('buttonStyle').concat(this.isActive(value) ? this.getStyle('activeButtonStyle') : [])]}
                                labelStyle={[this.getStyle('buttonLabelStyle').concat(this.isActive(value) ? this.getStyle('activeButtonLabelStyle') : [])]}/>
                        );
                    })}
                </View>
            </View>
        );
    }

    getStyle(key) {
        let styles = [];
        styles.push(styleSheet[key]);
        if (this.props[key] !== undefined) {
            styles.push(this.props[key]);
        }
        return styles;
    }
}

const styleSheet = StyleSheet.create({
    activeButtonStyle: {
        backgroundColor: '#eeeeff',
        borderWidth: 1,
    },
    activeButtonLabelStyle: {
        color: '#f0f',
    },
    buttonContainer: {
        flexDirection: 'row',
        borderLeftWidth: 1,
        borderColor: '#000',
    },
    buttonStyle: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 2,
        paddingBottom: 2,
        borderWidth: 1,
        borderRadius: 0,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderLeftWidth: 0,
    },
    buttonLabelStyle: {
        color: '#000'
    },
    labelStyle: {
        color: '#000',
        fontSize: 15,
        marginBottom: 5,
    }
});