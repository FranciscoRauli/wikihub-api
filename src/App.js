import React from 'react';
import Layout from "./components/layout";
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGit from './hooks/githooks';
import NoSearch from "./components/no-search";

const App = () => {
  const { gitState } = useGit();
  return (
        <Layout>
          {gitState.hasUser ? (
            <>
             {gitState.loading ? (
              <p>Loading</p>
           ) : (
              <>
                <Profile />
                <Repositories />
              </>
           )}
           </>
           ) : ( 
           <NoSearch />
          )}
        </Layout>
  );
};

export default App;
