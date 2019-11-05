import * as React from 'react';
import Helmet from 'react-helmet';
import { provider } from 'react-ioc';

import { observer } from 'mobx-react';
import Loading from '../components/loading';
import { useRootHook } from '../libs/root';
import { services } from '../libs/root.services.dict';

const IndexLayout: React.FC = ({ children, ...props }) => {
  const loading = useRootHook(props);

  return (
    <>
      <Helmet title="App Name" meta={[{ name: 'description', content: 'Desctiption' }, { name: 'keywords', content: 'keyword' }]} />
      {children}
      <Loading active={loading} />
    </>
  );
};

export default provider(...services)(observer(IndexLayout));
