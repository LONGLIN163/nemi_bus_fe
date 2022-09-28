import { render } from '@testing-library/react';
import Header from './Header'
import { withStyles } from '@material-ui/core/styles';


describe('Header Test', () => {
    const styles={
        flex:{
            flex:1
        }
    }
    const HeaderComposition = withStyles(styles)(Header);
    
    it('Check if DialogPane rendered', () => {
       const {queryByTitle} = render(<HeaderComposition />)
       const DialogPane=queryByTitle("addProgramBtn")
       expect(DialogPane).toBeTruthy();
     })
   }
 );