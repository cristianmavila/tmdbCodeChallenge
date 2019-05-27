/**
 * @jestsetup
 * Will config the enzyme to test my components
 */

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@babel/polyfill';

configure({ adapter: new Adapter() })