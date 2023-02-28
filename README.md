# applet-js

## Methods

### createCell

The createCell function is used to create a new component. The function takes an object with the following properties:

Query - A function that returns a Promise for fetching data.
Loading - A React component that is displayed while data is being fetched.
Empty - A React component that is displayed when no data is returned from the query.
Failure - A React component that is displayed when an error occurs.
Success - A React component that is displayed when data is successfully fetched.
The createCell function returns a new component that can be rendered.

```
import React from 'react'
import { createCell } from 'applet-js'

// define a declarative variable to fetch data
export const Query = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No data!</div>

export const Failure = ({ error }: any) => (
  <div>Error loading: {error.message}</div>
)

export const Success = ({ data }: any) => {
  return data.map((dataItem: any) => (
    <article key={dataItem.id}>
      <h2>{dataItem.title}</h2>
    </article>
  ))
}

const MyCustomCell = createCell({ Query, Loading, Empty, Failure, Success })

export default MyCustomCell
```

```
import MyCustomCell from './MyCustomCell'

const MyComponent = () => {
  return <MyCustomCell />;
};

```
