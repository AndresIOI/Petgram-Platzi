import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
 uri: 'https://petgram-server-seven.vercel.app/graphql'
});

ReactDom.render(
 <ApolloProvider client={client}>
  <App />
 </ApolloProvider>
 , document.getElementById('app')
 );