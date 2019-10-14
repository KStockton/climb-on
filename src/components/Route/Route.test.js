import React from 'react';
import Route from './Route.js';
import { shallow } from 'enzyme';

const mockRoute = { 
  climbingPlaceId: 1,
  area: "Brown Cloud Crags",
  routeName: "Louise",
  difficultyLevel: "5.8",
  type: ["sport"] 
};          

describe('Route', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Route
      key={0}
      climbingPlaceId={mockRoute.climbingPlaceId}
      area={mockRoute.area}
      routeName={mockRoute.routeName}
      difficultyLevel={mockRoute.difficultyLevel}
      type={mockRoute.type} 
    />);
	});

	it('should have a default state', () => {
		expect(wrapper.state()).toEqual({favorite:false} );
	});

	it('should render correctly with all of the information passed', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should invoke handleFavoriteClick when the favorite icon is clicked', () => {
		expect(wrapper.state('favorite')).toEqual(false);
		wrapper.find('.Route-favorite-button').simulate('click');
		expect(wrapper.state('favorite')).toEqual(true);
	});
});