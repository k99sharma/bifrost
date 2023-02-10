<h1 align="center">Bifrost</h1>

<p align="center">
  <a href="https://app.netlify.com/sites/ghost32-bifrost/deploys">
    <img alt="Netlify" src="https://img.shields.io/netlify/5f6d2f1b-b2d3-4172-901b-feab85666c1a" />
  </a>
  
  <a href="">
    <img alt="version" src="https://img.shields.io/github/v/tag/k99sharma/bifrost" />
   </a>
   
  <a href="https://opensource.org/licenses/MIT">
    <img alt="License" src="https://img.shields.io/github/license/k99sharma/earth-model"/>
   </a>
</p>

<p align="center">
  🏹 Bifrost is a web application to visualize and geolocate countries on a 3D Globe model using latitude and longitude. 3D Globe model is generated using ThreeJs library.
</p>

![bifrost_screenshot](https://user-images.githubusercontent.com/54969439/123527132-b9110300-d6fa-11eb-89a6-b0027eb0acd2.png)
<br />

## Tech Stack & Open-source libraries
- HTML5 and [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) is used to make responsive layout.
- 3D model is generated using [ThreeJs](https://threejs.org/) library. You can also checkout out the model [here](https://github.com/k99sharma/earth-model).
- [Country API](https://restcountries.com/) is created to fetch countries data.

<br />

<div align='center'>
  <img src='https://user-images.githubusercontent.com/54969439/194124329-feb7309c-0bda-40c5-baa9-d7594fca92d0.gif' alt='gif' />
</div>

## Bifrost Working
- Application is responsive in nature
- Country data is fetched from [country API](https://restcountries.com/)
- `World` folder contains 3D globe model
- `utilities` folder contains javascript codes of major features

## 3D Globe Model
- Globe model is created using `threejs` library
- Model is standalone and restricted from application code except driver files - `utilities/model.js` and `utilities/formHandler.js`
- Globe is interactive with `zoom in` and `zoom out` features. Scene can also be rotated

## Find this repository userful? :heart:
Star the repository. 🌟
<br>Also, __[Follow me](https://github.com/k99sharma)__ on GitHub for my next creations! 😎

# LICENSE
```xml
Designed and developed by 2023 (Kalash Sharma)

Licensed under the MIT License, (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   https://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
