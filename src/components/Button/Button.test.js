'use strict';
import Button from './Button';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';


jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

describe('Button component tests', () => {

    it('renders label and icon when specified', done => {
        const props = {icon: 'assessment', label: 'foo', iconSize: 15};
        expect(renderer.create(<Button {...props}/>).toJSON()).toMatchSnapshot();
        done();
    });
});


describe('button DOM', () => {
    jest.resetModules();

   it('triggers onClickHandler when button is pressed', done => {
       const onClickHandler = jest.fn();
       const wrapper = shallow(<Button onClick={onClickHandler}/>);
       wrapper.find(TouchableOpacity).simulate('press');
       expect(onClickHandler).toHaveBeenCalled();
       done();
   }) ;
});