# React useEffect setTimeout Cleanup Issue

This repository demonstrates a common bug in React applications involving the use of `setTimeout` within the `useEffect` hook.  Failure to properly clean up the timeout can lead to memory leaks and unexpected behavior. The solution provides the correct way to manage timeouts within the `useEffect` cleanup function. 

## Bug Description

The `MyComponent` component uses `setTimeout` to update the count every second. However, it fails to clear the timeout in the cleanup function.  This means that with every render, a new timeout is created, without clearing the previous ones. This results in multiple timeouts accumulating over time, leading to performance issues and incorrect behavior.

## Solution

The solution adds a cleanup function to the `useEffect` hook to clear the timeout using `clearTimeout`. This ensures that only one timeout is active at any given time.