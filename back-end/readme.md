## Book-House project

- Editor configuration for all using ESLINT and prettier
- Fix all the warnings in the commandline logs / console log
- env-cmd add as development dependency
- Protected routes (use localstorage temporarily for login status)
- .env add to gitignore & add .env.local put it in repository
- You can add package.json.lock to ignore as well
- save-exact=true while installing the dependencies which seems to be upgradable in near future
- Protected routes
- Use services folder to access network datya instead of directly putting fetch in components. Also try to use Axios for data fetch process so that we can add interceptors for error handling and header manipulation
- useFetch catch errors
- Cart move fetch operations to services folder
- put files in test directory to **tests**
- Try: move mock_data to **tests**/data and add a pattern to the npm run test

https://developer.paypal.com/docs/checkout/standard/
Sandbox Account: laimoon-facilitator@hbtventures.com
AccessToken: access_token$sandbox$fs6wr7y6cgxmyx88$e253fbacfec86b3e6af8814f82ea0c97
