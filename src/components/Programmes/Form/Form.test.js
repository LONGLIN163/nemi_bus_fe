import '@testing-library/jest-dom'
import React from 'react';
import {VehicleContextProvider} from '../../VehicleContextProvider';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import  Form from './Form'

configure({ adapter: new Adapter() });

describe('Form Test', () => {

    const wrapper=mount( 
        <VehicleContextProvider>
           <Form />
        </VehicleContextProvider>
      )

      /**
       * Below code is repeated(tested) in the other compo, because create and edit item is under different parent compo...
       * Maybe I will create some validation test in the future here...
       *  */ 
      
      it('Check if Form can be filled out for each field', () => {
        // 1. test title input
        const titleInput=wrapper.find('input[name="title"]')
        titleInput.simulate('change', { target: { value:"guardians of the galaxy", name:"title"}})
        expect(wrapper.find('input[name="title"]').props().value).toEqual("guardians of the galaxy");

        // 2. test image input
        const imageUrlInput=wrapper.find('input[name="imageUrl"]')
        const imageUrl="https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_FMjpg_UX1000_.jpg"
        imageUrlInput.simulate('change', { target: { value:imageUrl, name:"imageUrl"}})
        expect(wrapper.find('input[name="imageUrl"]').props().value).toEqual(imageUrl);

        // 3. test duration input
        const durationInput=wrapper.find('input[name="duration"]')
        durationInput.simulate('change', { target: { value:"180min", name:"duration"}})
        expect(wrapper.find('input[name="duration"]').props().value).toEqual("180min");

        // 4. test episode input
        const episodeInput=wrapper.find('input[name="episode"]')
        episodeInput.simulate('change', { target: { value:"2", name:"episode"}})
        expect(wrapper.find('input[name="episode"]').props().value).toEqual("2");

        // 5. test chapter input
        const chapterInput=wrapper.find('input[name="chapter"]')
        chapterInput.simulate('change', { target: { value:"1", name:"chapter"}})
        expect(wrapper.find('input[name="chapter"]').props().value).toEqual("1");

        // 6. test type select
        const typeSelect=wrapper.find('input[name="type"]')
        typeSelect.simulate('change', { target: { value:"Shows", name:"type"}})
        expect(wrapper.find('input[name="type"]').props().value).toEqual("Shows");

        // 7. test chapter input
        const synopsisInput=wrapper.find('textarea[name="synopsis"]')
        synopsisInput.simulate('change', { target: { value:"A group of", name:"synopsis"}})
        expect(wrapper.find('textarea[name="synopsis"]').props().value).toEqual("A group of");

      });
   }
 );