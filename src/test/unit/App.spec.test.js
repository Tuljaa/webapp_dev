import { render, screen } from '@testing-library/react';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {shallow, mount} from 'enzyme';
import App from '../../App';

Enzyme.configure({ adapter: new Adapter() });

const setUp=()=>{
    const component=shallow(<App/>);
    return component;
}

const findAttribute=(component,attr) => {
    const wrapper= component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe ('App component',()=>{

    let component;
    beforeEach(()=> {
        component=setUp();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
    
    it('should render App Component without errors',() => {
    const wrapper=findAttribute(component,'App');
    expect(wrapper.length).toBe(1);
    });
    
    it('should render App Header', () => {
    const wrapper=findAttribute(component,'header');
    expect(wrapper.length).toBe(1);
    });
    
    it('should render form',()=>{
      const wrapper=findAttribute(component,'form');
      expect(wrapper.length).toBe(1);
    });
    
    test('renders weather Report Application', () => {
      render(<App />);
      const linkElement = screen.getByText(/Weather Report Application/i);
      expect(linkElement).toBeInTheDocument();
    });


    it('should render input text of city',()=>{
      const wrapper=findAttribute(component,'cityN');
      expect(wrapper.length).toBe(1);
    })

    it('should render input text of country',()=>{
      const wrapper=findAttribute(component,'countryN');
      expect(wrapper.length).toBe(1);
    })
    it('should render submit button',()=>{
      const wrapper=findAttribute(component,'submit');
      expect(wrapper.length).toBe(1);
    })

    it('should check default value of Prop ',() => {
      const wrapper=findAttribute(component,'cityN').at(0).prop('value');
      expect(wrapper).toBeTruthy();
    });

    it('should handle input city',()=>{
     const wrap=mount(<App/>);
     const v =wrap.find(`[data-test='cityN']`).instance.value="Mumbai";
     expect(v).toEqual("Mumbai");
    });
    it('should handle click on submit',()=>{
      const wrap=mount(<App/>);
      const b=wrap.find(`[data-test='submit']`).simulate("click");
      expect(b).toBeTruthy();
    });
    it('should handle input city ',()=>{
      const wrap=mount(<App/>);
      const b=wrap.find(`[data-test='cityN']`).simulate("change");
      expect(b).toBeTruthy();
    });
    it('should handle input city ',()=>{
      const wrap=mount(<App/>);
      const b=wrap.find(`[data-test='countryN']`).simulate("change");
      expect(b).toBeTruthy();
    });
});

