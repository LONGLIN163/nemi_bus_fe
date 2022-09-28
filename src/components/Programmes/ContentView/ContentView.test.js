import '@testing-library/jest-dom'
import React from 'react';
import {VehicleContextProvider} from '../../VehicleContextProvider';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import  ContentView from './ContentView'
import { withStyles } from '@material-ui/core/styles';

configure({ adapter: new Adapter() });


describe('ContentView Test', () => {

    const styles=theme=>({
        paperStyle:{
            padding:20 , 
            overflow:'auto',
            [theme.breakpoints.up('sm')]:{
                marginTop:5,
                height:'calc(100%-10px)'
            },
            [theme.breakpoints.down('xs')]:{
                height:'100%'
            },
            borderReft:"1px solid white !important",
            backgroundColor: '#hexcodehere'
        },
        '@global':{
            'html, body, #root':{
                height: '100%'
            },
        },
        container:{
            [theme.breakpoints.up('sm')]:{
                height: 'calc(100% - 64px - 48px)',
                overflow:'auto',
            },
            [theme.breakpoints.down('xs')]:{
                height: 'calc(100% - 56px - 48px)'
            }
        },
        item:{
            [theme.breakpoints.down('xs')]:{
                height: '50%'
            }
        },
        item2:{
            background: '#525252',
        }
    })

    const ContentViewComposition = withStyles(styles)(ContentView);
    const wrapper=mount( 
        <VehicleContextProvider>
           <ContentViewComposition />
        </VehicleContextProvider>
      )
    
    it('Check if Catalog rendered', () => {
        const CatalogTitle=wrapper.find('h4[title="Media Resources"]').text()
        expect(CatalogTitle).toEqual("Media Resources");
    });
    
    
    it('Check if Preview rendered', () => {
        const PreviewTitle=wrapper.find('h4[title="middleView"]').text()
        expect(PreviewTitle).toEqual("Preview");
    });
    
    it('Check if Playlist rendered', () => {
        const PlaylistTitle=wrapper.find('h4[title="PlayList"]').text()
        expect(PlaylistTitle).toEqual("PlayList");
     });
   }
 );