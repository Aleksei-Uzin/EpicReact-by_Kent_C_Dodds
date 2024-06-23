import makeFilterCitiesWorker from 'workerize!./filter-cities'

const instance = makeFilterCitiesWorker()
const getItems = instance.getItems

export {getItems}

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/
