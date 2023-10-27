function Program() {
  // 1 Window
  const window = new Window("palette", "fxWizard", undefined);
  const anyEffect = "ADBE Effect Parade";
  const effectAddNumber = [
    "",
    " 1",
    " 2",
    " 3",
    " 4",
    " 5",
    " 6",
    " 7",
    " 8",
    " 9",
  ];
  const comp = app.project.activeItem;
  var selectedEffect = "";

  // 2 Area
  const homeArea = window.add("tabbedpanel");
  homeArea.preferredSize = [undefined, undefined];

  // 3 Effects tab
  const effectsTab = homeArea.add("tab", undefined, "Effects");
  effectsTab.alignChildren = "fill";

  // 4 Content effects panel

  const contentEffectsPanel = effectsTab.add(
    "panel",
    undefined,
    "Content effects"
  );

  // 5 Content effects group
  const contentEffectsGroup = contentEffectsPanel.add("group");
  contentEffectsGroup.orientation = "column";
  contentEffectsGroup.alignChildren = "left";

  // 6 Content effects dropdown group
  const contentEffectsdropdownGroup = contentEffectsGroup.add("group");
  contentEffectsdropdownGroup.orientation = "column";
  var dropdown = contentEffectsdropdownGroup.add("dropdownlist", undefined, [
    "Drop Shadow",
    "CC Light Sweep",
    "Fast Box Blur",
  ]);
  dropdown.size = [250, 20];
  dropdown.onChange = function () {
    selectedEffect = dropdown.selection.text;
  };
  dropdown.selection = 0;

  // 6 Content effects checkbox group
  const checkboxGroup = contentEffectsGroup.add("group");
  checkboxGroup.orientation = "row";
  const checkbox = checkboxGroup.add("checkbox", undefined, "Custom input");
  var customEffect = false;
  checkbox.onClick = function () {
    var isChecked = this.value;
    if (isChecked) {
      dropdown.hide();
      editText.show();
      customEffect = true;
    } else {
      dropdown.show();
      editText.hide();
      customEffect = false;
    }
  };

  // 6 Content effects textinput group
  const textInputGroup = contentEffectsGroup.add("group");
  textInputGroup.orientation = "column";
  var editText = textInputGroup.add("edittext", undefined, "");
  var result = "";

  editText.onChanging = function () {
    result = editText.text;
  };
  editText.size = [250, 20];
  editText.visible = false;

  // 5 Content effects buttons
  const buttonGroup = contentEffectsPanel.add("group");
  const applyButton = buttonGroup.add("button", undefined, "Apply");
  const removeButton = buttonGroup.add("button", undefined, "Remove");
  buttonGroup.orientation = "row";
  buttonGroup.alignment = "right";
  applyButton.alignment = ["center", "center"];

  // 4 Layer effects panel
  const layerEffectsPanel = effectsTab.add("panel", undefined, "Layer effects");

  // 5 Layer effects group
  const layerEffectsGroup = layerEffectsPanel.add("group");
  layerEffectsGroup.orientation = "column";
  layerEffectsGroup.alignChildren = "left";

  // 6 Layer effects dropdown group
  const layerEffectDropdownGroup = layerEffectsGroup.add("group");
  layerEffectDropdownGroup.orientation = "column";
  var layerEffectsDropdown = layerEffectDropdownGroup.add(
    "dropdownlist",
    undefined,
    ["Motion Blur", "3D Layer"]
  );
  layerEffectsDropdown.size = [250, 20];
  dropdown.selection = 0;

  // 3 Login tab

  function LoginTab() {
    const loginTab = homeArea.add("tab", undefined, "Log in");
    loginTab.alignChildren = "fill";

    // Panel
    const LoginPanel = loginTab.add("panel", undefined, "Login panel");
    LoginPanel.orientation = "column";
    LoginPanel.alignChildren = "left";

    // Username
    var usernameLabel = LoginPanel.add("statictext", undefined, "Username");
    var username = LoginPanel.add("edittext", undefined, "");
    username.size = [250, 20];

    // Password
    var passwordLabel = LoginPanel.add("statictext", undefined, "Password");
    var password = LoginPanel.add("edittext", undefined, "");
    password.size = [250, 20];

    // Button
    const dashboardButton = LoginPanel.add(
      "button",
      undefined,
      "fxWizard dashboard"
    );

    // Action
    dashboardButton.onClick = function () {
      var url = "http://localhost:3000";
      var cmd;
      if ($.os.indexOf("Win") !== -1) {
        cmd = 'start "" "' + url + '"';
      } else if ($.os.indexOf("Mac") !== -1) {
        cmd = 'open "' + url + '"';
      } else {
        alert("Your platform is not supported.");
        return;
      }
      try {
        system.callSystem(cmd);
      } catch (e) {
        alert("Error: " + e.toString());
      }
    };

    loginTab.show();
  }

  LoginTab();

  // ACTIONS

  var TrackSelectedEffect = function () {
    if (customEffect) {
      return result;
    } else {
      return dropdown.selection.text;
    }
  };

  applyButton.onClick = function () {
    var layers = comp.selectedLayers;
    if (layers.length == 0) {
      alert("Please select one or more layers!");
    }
    selectedEffect = TrackSelectedEffect();
    try {
      for (var i = 0; i < layers.length; i++) {
        layers[i].Effects.addProperty(selectedEffect);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  removeButton.onClick = function () {
    var layers = comp.selectedLayers;
    selectedEffect = TrackSelectedEffect();
    if (layers.length > 0) {
      for (var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
        var currentLayer = layers[layerIndex];
        var allAppliedEffects = currentLayer.property(anyEffect);
        for (
          var effectIndex = 1;
          effectIndex <= allAppliedEffects.numProperties;
          effectIndex++
        ) {
          for (var effectIndex = 0; effectIndex < 10; effectIndexi++) {
            if (
              allAppliedEffects.property(effectIndex).name ===
              selectedEffect + effectAddNumber[i]
            ) {
              allAppliedEffects.property(effectIndex).remove();
            }
          }
        }
      }
    } else {
      alert("No layers have been selected.");
    }
  };

  window.center();
  window.show();
}

Program();
