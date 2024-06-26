import * as React from 'react'

/**
 * https://kentcdodds.com/blog/stop-using-isloading-booleans
 *
 */

function geoPositionReducer(state, action) {
  switch (action.type) {
    case 'error': {
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      }
    }
    case 'success': {
      return {
        ...state,
        status: 'resolved',
        position: action.position,
      }
    }
    case 'started': {
      return {
        ...state,
        status: 'pending',
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useGeoPosition() {
  const [state, dispatch] = React.useReducer(geoPositionReducer, {
    status: 'idle',
    position: null,
    error: null,
  })

  React.useEffect(() => {
    if (!navigator.geolocation) {
      dispatch({
        type: 'error',
        error: new Error('Geolocation is not supported'),
      })
      return
    }
    dispatch({type: 'started'})
    const geoWatch = navigator.geolocation.watchPosition(
      position => dispatch({type: 'success', position}),
      error => dispatch({type: 'error', error}),
    )

    return () => navigator.geolocation.clearWatch(geoWatch)
  }, [])

  return {
    isLoading: state.status === 'idle' || state.status === 'pending',
    isIdle: state.status === 'idle',
    isPending: state.status === 'pending',
    isResolved: state.status === 'resolved',
    isRejected: state.status === 'rejected',
    ...state,
  }
}

function App() {
  const {isLoading, isResolved, isRejected, position, error} = useGeoPosition()

  if (isLoading) {
    return <div>Loading your position...</div>
  } else if (isResolved) {
    return (
      <div>
        Lat: {position.coords.latitude}, Long: {position.coords.longitude}
      </div>
    )
  } else if (isRejected) {
    return (
      <div>
        <div>Oh no, there was a problem getting your position:</div>
        <pre>{error.message}</pre>
      </div>
    )
  }
}

export default App
