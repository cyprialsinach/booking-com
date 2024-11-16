import React from 'react'

const AuthLayout: IAuthLayout = ({children}) => {
  return <main>{children}</main>;
};
export default React.memo(AuthLayout)