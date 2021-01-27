import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {shallow} from 'enzyme';
import Weather from '../../../components/Weather';

Enzyme.configure({ adapter: new Adapter() });

const setUp=()=>{
    const component=shallow(<Weather/>);
    return component;
}

const findAttribute=(component,attr) => {
    const wrapper= component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe ('Weather component',()=>{

    let component;
    beforeEach(()=> {
        component=setUp();
    });

    it('should render Weather Component without errors',() => {
    expect(component).toBeTruthy();
    });
     
    it('should check ListItem is getting rendered', ()=>{
        const wrapper = findAttribute(component,'listitem');
        expect(wrapper.length).toBe(4);
    })
});