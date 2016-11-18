import ButtonGroup from './ButtonGroup';
import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('../Button/Button', () => 'Button');

describe('ButtonGroup', () => {
    jest.resetModules();

    const labels = ['one', 'two'];

    it('renders label for group and buttons for each item in buttonLabels array', done => {
        const group = <ButtonGroup label='foo' buttonLabels={labels} onSelect={jest.fn()}/>;
        expect(renderer.create(group)).toMatchSnapshot();
        done();
    });

    // it('highlights button background and label if its value matches group\'s selected prop', done => {
    //     const group = <ButtonGroup buttonLabels={labels} onSelect={jest.fn()} selected={'one'}/>;
    //     expect(renderer.create(group)).toMatchSnapshot();
    //     done();
    // });
});

describe('ButtonGroup DOM', ()=> {
    jest.resetModules();
    const {shallow} = require('enzyme');

    it('triggers onClick callback and passes button\'s value as parameter when pressed', done => {
        const onPressHandler = jest.fn();
        const wrapper = shallow(<ButtonGroup buttonLabels={['one', 'two']} onSelect={onPressHandler}/>);

        wrapper.find('Button[label="one"]').simulate('click');
        wrapper.find('Button[label="two"]').simulate('click');

        expect(onPressHandler).toHaveBeenCalledWith('one');
        expect(onPressHandler).toHaveBeenCalledWith('two');
        expect(onPressHandler).toHaveBeenCalledTimes(2);
        done();
    });
});