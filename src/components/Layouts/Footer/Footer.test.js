import '@testing-library/jest-dom'
import React from 'react';
import {VehicleContextProvider} from '../../VehicleContextProvider';
import Adapter from 'enzyme-adapter-react-16';
import { withStyles } from '@material-ui/core/styles';
import { configure, mount } from 'enzyme';
import  Footer from './Footer'

configure({ adapter: new Adapter() });

describe('Footer test', () => {

   const styles = {
      tabsCenter: {
         flexGrow: 1,
      }
   };

   const FooterComposition = withStyles(styles)(Footer);
   const wrapper=mount( 
     <VehicleContextProvider>
         <FooterComposition />
     </VehicleContextProvider>
   )
   
   it('Set tab Series status to be true', () => {
      //status --- before click
      const SeriesTab = wrapper.find('button[title="Series"]');
      const SeriesStatus = SeriesTab.prop("aria-selected");
      expect(SeriesStatus).toBe(false);

      SeriesTab.hostNodes().simulate('click',{ target: { value: 1 }});

      // status --- after click
      const SeriesTabAfter = wrapper.find('button[title="Series"]');
      const SeriesStatusAfter = SeriesTabAfter.prop("aria-selected");
      expect(SeriesStatusAfter).toBe(true);

    })
  }
);

