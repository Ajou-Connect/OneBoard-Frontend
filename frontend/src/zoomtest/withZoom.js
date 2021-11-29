import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import ZoomContext from './ZoomClientContext';
function withZoom(Component) {
  const displayName = `withZoom(${Component.displayName || Component.name})`;
  const C = (props) => {
    const { wrappedComponentRef, ...remainingProps } = props;
    return (
      <ZoomContext.Consumer>
        {(context) => {
          return <Component {...remainingProps} client={context} ref={wrappedComponentRef} />;
        }}
      </ZoomContext.Consumer>
    );
  };
  C.displayName = displayName;
  C.WrappedComponent = Component;
  return hoistStatics(C, Component);
}
export default withZoom;
