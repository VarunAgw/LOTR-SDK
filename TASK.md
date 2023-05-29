# Take home project - The Lord of the Rings SDK

Do you love The Lord of the Rings? Great, how about making it easy for developers to consume information about the trilogy?

In this project, you will be building an SDK for an existing Lord of the Rings API.

First, please [explore the API](https://the-one-api.dev/) and the different [endpoints](https://the-one-api.dev/documentation).

Goal: write an SDK in your favorite language that makes this API accessible to other developers.\
The SDK only needs to cover the movie and quote endpoints:

```
-   /movie
-   /movie/{id}
-   /movie/{id}/quote
-   /quote
-   /quote/{id}
```

Time requirement: candidates usually spend between 2-5 hours on this task. We ask to submit the project code within 24 hours.

Points to consider:
-------------------

-   Pay attention to code quality and readability.
-   Although you're not implementing all the endpoints, write the SDK as if you were. Keep maintainability and extensibility in mind.
-   Please add a readme file for your SDK users specifying how to install, use and test the SDK.
-   The SDK does not have to mirror the API. You can add abstractions and/or combine different calls.
-   The SDK should be deployed to a package manager like npm, pip, maven etc...
-   Please add a file in the root directory `design.md` with information about your SDK design.

Delivery:Once your SDK is ready, please send us a link to a Git repo named "{your_name}-SDK".

You can send the link to:<code@liblab.com>.