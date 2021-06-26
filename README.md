# Bifrost <img src="https://github.com/k99sharma/bifrost/blob/main/assets/logo/bifrost-logo.png" width="35px" height="40px" alt="bifrost logo" />

### Visualize and locate different countries on 3D Globe model
![bifrost_screenshot](https://user-images.githubusercontent.com/54969439/123527132-b9110300-d6fa-11eb-89a6-b0027eb0acd2.png)
<br />

## Bifrost Working
- Application is responsive in nature
- Country data is fetched from [bifrost API](https://github.com/k99sharma/bifrost-api)
- `World` folder contains 3D globe model
- `utilities` folder contains javascript codes of major features

## 3D Globe Model
- Globe model is created using `threejs` library
- Model is standalone and restricted from application code except driver files - `utilities/model.js` and `utilities/formHandler.js`
- Globe is interactive with `zoom in` and `zoom out` features. Scene can also be rotated
- Model can also be intergrated in other application - [Repo](https://github.com/k99sharma/earth-model)

