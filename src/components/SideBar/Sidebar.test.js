import React from 'react';
import SideBar from './SideBar';
import { shallow } from 'enzyme';

describe('SideBar', () => {
  let wrapper;

  const mock_updateFilters = jest.fn();
  const mockhandleType = jest.fn();
  const mockhandleDifficulty = jest.fn();
  const mockhandleSelect = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <SideBar updateFilters={mock_updateFilters}/>
    );
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({ filters: 
        {
          types: [], 
          difficulties: [], 
          sortOrder: true
        } 
    });
  });

  it('should call handleType on change', () => {
    wrapper.find('.type-checkbox').first().simulate('change', { target: { checked: true } });
    expect(mockhandleType).toBeCalled();
  });

  it('should call handleDifficulty on change', () => {
    wrapper.find('.difficulty-checkbox').first().simulate('change', { target: { checked: true } });
    expect(mockhandleDifficulty).toBeCalled();
  });

  it('should call handleSelect on change', () => {
    wrapper.find('select').simulate('change', { target: { value: 'highest' } });
    expect(mockhandleSelect).toBeCalled();
  });

  it('should update state with handleType when a type checkbox is clicked', () => {
    expect(wrapper.state()).toEqual({ filters: 
      {
        types: [],
        difficulties: [],
        sortOrder: true
      } 
    });

    wrapper.instance().handleType({ target: { checked: true, name: 'trad' } });
    expect(wrapper.state()).toEqual({ filters: 
      {
        types: ['trad'],
        difficulties: [],
        sortOrder: true
      } 
    });
  });

  it('should update state with handleDifficulty when a difficulty checkbox is clicked', () => {
    expect(wrapper.state()).toEqual({ filters: 
      {
        types: [],
        difficulties: [],
        sortOrder: true
      } 
    });

    wrapper.instance().handleDifficulty({ target: {checked: true, name: '5.11c' }});
    expect(wrapper.state()).toEqual({ filters: 
      {
        types: [],
        difficulties: ['5.11c'],
        sortOrder: true
      } 
    });
  });

  it('should update state with handleSelect when a sort order is selected', () => {
    expect(wrapper.state()).toEqual({ filters:
       {
         types: [],
         difficulties: [],
         sortOrder: true
       } 
    });
    wrapper.instance().handleSelect({ target: { value: 'highest' }});
    expect(wrapper.state()).toEqual({ filters: 
      {
        types: [],
        difficulties: [],
        sortOrder: false
      }
    });
  });

  it('should call updateFilters on submit', () => {
    wrapper.find('.SideBar-filter-form').simulate('submit', { preventDefault: () => {} });
    expect(mock_updateFilters).toBeCalled();
  });
}); 

