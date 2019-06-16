# react-model-taro

The Hooks State management library for Taro

> Requirement: Taro 1.3.0 and above, from this version you can use Hooks in Taro

## Installation

```bash
npm i react-model-taro -S
```

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

// Define Model
const Todo = {
  state: {
    curTodo: "",
    items: ["Add some todo"]
  },
  actions: {
    updateTodo: todo => {
      return {
        curTodo: todo
      };
    },
    addTodo: (todo, { state }) => {
      return {
        items: state.items.concat([todo]),
        curTodo: ""
      };
    }
  }
};

// Model Register
const { useStore } = Model(Todo)

const [{ items, curTodo }, { addTodo, updateTodo }] = useStore();

...
<View className="container">
  <Input
    value={curTodo}
    onInput={e => {
      updateTodo(e.detail.value);
    }}
    onConfirm={e => {
      addTodo(e.detail.value);
    }}
  />
  {items.map((item, index) => {
    return <View key={index}>{item}</View>;
  })}
</View>
```

Now your state is reactive!

## More about `react-model`

See ref: https://github.com/byte-fe/react-model