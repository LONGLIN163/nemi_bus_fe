import '@testing-library/jest-dom'
import React from 'react';
import {VehicleContextProvider} from '../../VehicleContextProvider';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import  DialogPane from './DialogPane'
import  Catalog from '../Catalog/Catalog'

configure({ adapter: new Adapter() });

describe('DialogPane Test', () => {

    const wrapper=mount( 
        <VehicleContextProvider>
           <Catalog />
           <DialogPane />
        </VehicleContextProvider>
      )
    
    
    it('Check open form, fill out form and create item', () => {
        //1. test if form can be opened
        const addProgramBtn=wrapper.find('button[title="addProgramBtn"]')
        addProgramBtn.simulate('click')
        const formPane=wrapper.find('form[title="formPane"]').prop('title')
        expect(formPane).toEqual("formPane")

        // 2. test form input
        const titleInput=wrapper.find('input[name="title"]')
        titleInput.simulate('change', { target: { value:"xixixi", name:"title"}})
        expect(wrapper.find('input[name="title"]').props().value).toEqual("xixixi");

        const imageUrlInput=wrapper.find('input[name="imageUrl"]')
        const imageUrl="https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_FMjpg_UX1000_.jpg"
        imageUrlInput.simulate('change', { target: { value:imageUrl, name:"imageUrl"}})
        expect(wrapper.find('input[name="imageUrl"]').props().value).toEqual(imageUrl);

        const durationInput=wrapper.find('input[name="duration"]')
        durationInput.simulate('change', { target: { value:"180min", name:"duration"}})
        expect(wrapper.find('input[name="duration"]').props().value).toEqual("180min");

        const episodeInput=wrapper.find('input[name="episode"]')
        episodeInput.simulate('change', { target: { value:"2", name:"episode"}})
        expect(wrapper.find('input[name="episode"]').props().value).toEqual("2");

        const chapterInput=wrapper.find('input[name="chapter"]')
        chapterInput.simulate('change', { target: { value:"1", name:"chapter"}})
        expect(wrapper.find('input[name="chapter"]').props().value).toEqual("1");

        const typeSelect=wrapper.find('input[name="type"]')
        typeSelect.simulate('change', { target: { value:"Shows", name:"type"}})
        expect(wrapper.find('input[name="type"]').props().value).toEqual("Shows");

        const synopsisInput=wrapper.find('textarea[name="synopsis"]')
        synopsisInput.simulate('change', { target: { value:"A group of", name:"synopsis"}})
        expect(wrapper.find('textarea[name="synopsis"]').props().value).toEqual("A group of");

        // 3. test create func
        const formbtn=wrapper.find('button[title="formbtn"]')
        formbtn.simulate("click")
        expect(wrapper.find('div[title="xixixi"]').exists()).toBe(true);
     });

   }
 );