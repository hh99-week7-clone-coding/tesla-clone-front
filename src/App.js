import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";

// import react-query
import { QueryClient, QueryClientProvider } from 'react-query'


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
      // ...
      </div>
    </QueryClientProvider>
  );
}

export default App;
