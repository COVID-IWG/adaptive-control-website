# adaptive-control-website

## overview 
This is the code for the [Adaptive Control website](https://adaptivecontrol.org)

The site is built with Node, React, Bootstrap, Recharts, and Leaflet. We deploy on Netlify to a Google Domains-managed domain.

# dev set up 
1. install Node and `npm` for your system 
2. install all packages/dependencies: `npm install -S`
3. start the local dev server: `npm start`
4. create a branch and make your changes, and file a pull request
5. merged pull requests to `staging` are picked up and deployed to staging.adaptivecontrol.org
6. merged commits from `staging` to `production` are picked up and deployed to adaptivecontrol.org
