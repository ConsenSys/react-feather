# ConsenSys specific
## Adding new icons
New icons must be added to the [feather repo](https://github.com/ConsenSys/feather) directly. This library simply builds the icons based on those that exist in the [feather/icons](https://github.com/ConsenSys/feather/tree/master/icons) directory.

#### What is react-feather?
react-feather is a collection of simply beautiful open source icons for React.js. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

### Installation
    npm install ConsenSys/react-feather#vX.X.X --save
Where X.X.X is the latest version number
### Usage

```javascript
import React from 'react';
import { Camera } from 'react-feather';

const App = () => {
  return <Camera />
};

export default App;
```
If you are using WebPack, you can import only one icon.
```javascript
import React from 'react';
import Camera from 'react-feather/dist/icons/camera';

const App = () => {
  return <Camera />
};

export default App;
```
If you can't use ES6 imports, it's possible to include icons from the compiled folder ./dist.
```javascript
var Camera = require('react-feather/dist/icons/camera').default;

var MyComponent = React.createClass({
  render: function () {
    return (
      <Camera />
    );
  }
});
```
You can also include the whole icon pack:

```javascript
import React from 'react';
import * as Icon from 'react-feather';

const App = () => {
  return <Icon.Camera />
};

export default App;
```
Icons can be configured with inline props:
```javascript
<Icon.AlertCircle color="red" size={48} />
```

# Development
## setup
Clone and update submodule:
```
git clone git@github.com:ConsenSys/react-feather.git
git submodule init
git submodule update
```

Install dependancies:
```
yarn
```

## Releasing new version
Run:
```
yarn build
yarn version
```

Push changes
```
git push origin master
git push origin vX.X.X (<-- this should match the updated version number)
```
