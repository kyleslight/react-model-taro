# react-model-taro

The Hooks State management library for Taro

> Requirement: Taro 1.3.0 and above, from this version you can use Hooks in Taro

## Quick Usage

In your empty Taro Project Components:

```jsx
import Taro, { useState } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'

const Index = () => {
  return (
    <View>
      Content Here...
    </View>
  )
}

Index.config = {
  navigationBarTitleText: 'React Model'
}

export default Index
```

Use store from `react-model-taro`:

```jsx
import { Model } from 'react-model-taro'

// define model
const Todo = {
  state: {
    items: ['Install react-model', 'Read github docs', 'Build App']
  },
  actions: {
    add: (todo, { state }) => {
      state.items.push(todo)

      return {
        items: state.items
      }
    }
  }
}

// Model Register
const { useStore } = Model(Todo)

const [{ items }] = useStore()

...
<View>
  {items.map((item, index) => {
    return <View key={index}>{item}</View>
  })}
</View>
```

Now your state is reactive!

## More about `react-model`

See ref: https://github.com/byte-fe/react-model