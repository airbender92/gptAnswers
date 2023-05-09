import * as React from 'react';
import { observer, inject } from 'mobx-react'

const Home = (props): JSX.Element => {
  const { homeStore: store } = props;
  return <React.Fragment>{ store.title}</React.Fragment>
}

export default inject('homeStore')(observer(Home));