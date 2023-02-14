# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I have refactored encryption logic as a separate method as it was used multiple times in the code. This separate method also encapsulates the secure hash algorithm and encoding, hence there are very less chances of it getting changes anywhere else in the code. Also string those constant will help giving names to the Magic strings in the code. 

I have separated the two main logics of the code which is creation of the trivial partition key looking at the provided partition key and other where generating the trivial partition key if the partition key is not provided.

I have extracted the logic of generating the key from the partition key as a separate method which will help us scale the validation logic for the partition key in future.

The main deterministicPartitionKey method looks simple and readable which just takes in event check if partition key is provided and returns trivial partition key.