import { Battlemech, Header, HowEarn, Little, Preview, Roadmap, Video, Weapons, Why } from './components';
import Pilots from './components/pilots/Pilots';

import './scss/app.scss';



function App() {
  return (
    <div className="app">
      <div className="wrapper">
      <Header/>
      <Preview/>
      <Why/>
      <Video/>
      <HowEarn/>
      <Little/>
      <Battlemech/>
      <Pilots/>
      <Weapons/>
      <Roadmap/>
      </div>
    </div>
  );
}

export default App;
