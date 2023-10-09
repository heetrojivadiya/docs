(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{354:function(e,t,s){"use strict";s.r(t);var o=s(6),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"initialize-your-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialize-your-model"}},[e._v("#")]),e._v(" Initialize Your Model")]),e._v(" "),t("p",[e._v("Here you can find some tips and commands to initalize your connection with RFEM. Detailed information about this section can be found in our "),t("a",{attrs:{href:"https://github.com/Dlubal-Software/RFEM_Python_Client/blob/main/RFEM/initModel.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("source code"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"model-new-model-model-name-delete-delete-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model-new-model-model-name-delete-delete-all"}},[e._v("#")]),e._v(" Model(new_model, model_name, delete, delete_all)")]),e._v(" "),t("p",[t("code",[e._v("Class object representing individual model in RFEM. Class enables to edit multiple models in one session through holding one transport session active by not setting ‘trans’ into Client.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("new_model")]),e._v(" ("),t("em",[e._v("bool")]),e._v("*) – Set to True if new model is requested.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("model_name")]),e._v(" ("),t("em",[e._v("str")]),e._v("*) – Defaults to “TestModel”.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("delete")]),e._v(" ("),t("em",[e._v("bool")]),e._v("*) – Delete results")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("delete_all")]),e._v(" ("),t("em",[e._v("bool")]),e._v("*) – Delete all objects in Model.")])])])])]),e._v(" "),t("h3",{attrs:{id:"clearatributes-obj"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clearatributes-obj"}},[e._v("#")]),e._v(" clearAtributes(obj)")]),e._v(" "),t("p",[t("code",[e._v("Clears object atributes. Sets all atributes to None.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("p",[t("strong",[e._v("obj")]),e._v(" – object to clear")])])]),e._v(" "),t("h3",{attrs:{id:"closemodel-index-or-name-save-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#closemodel-index-or-name-save-changes"}},[e._v("#")]),e._v(" closeModel(index_or_name, save_changes)")]),e._v(" "),t("p",[t("code",[e._v("Close any model with index or name. Be sure to close the first created model last (2,1, and then 0). 0 index carries whole session.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("index_or_name")]),e._v(" ("),t("em",[e._v("str")]),e._v("*) – Name of the model")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("save_changes")]),e._v(" ("),t("em",[e._v("bool")]),e._v("*) – Save changes option")])])])])]),e._v(" "),t("h3",{attrs:{id:"insertspaces-lst"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insertspaces-lst"}},[e._v("#")]),e._v(" insertSpaces(lst)")]),e._v(" "),t("p",[t("code",[e._v("Add spaces between list of numbers. Returns list of values.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("lst")]),e._v(" ("),t("em",[e._v("list")]),e._v("*) – Specified list")])])])]),e._v(" "),t("h3",{attrs:{id:"calculate-all-generatexmlsolverinput-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calculate-all-generatexmlsolverinput-model"}},[e._v("#")]),e._v(" Calculate_all(generateXmlSolverInput, model)")]),e._v(" "),t("p",[t("code",[e._v("Calculates model.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("generateXmlSolverInput")]),e._v(" ("),t("em",[e._v("bool")]),e._v("*) – Generate XML solver input")]),e._v(" "),t("li",[t("strong",[e._v("model")]),e._v(" ("),t("em",[e._v("RFEM Class")]),e._v("*) – Model to be edited")])])])]),e._v(" "),t("h3",{attrs:{id:"converttodlstring-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#converttodlstring-s"}},[e._v("#")]),e._v(" ConvertToDlString(s)")]),e._v(" "),t("p",[t("code",[e._v("The function converts strings commonly used in RSTAB / RFEM so that they can be used In WebServices. Examples: ‘1,3’ -> ‘1 3’ ‘1, 3’ -> ‘1 3’ ‘1-3’ -> ‘1 2 3’ ‘1,3,5-9’ -> ‘1 3 5 6 7 8 9’ Returns a WS conform string.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("p",[t("strong",[e._v("string")]),e._v(" ("),t("em",[e._v("str")]),e._v(") – Works with any string")])])]),e._v(" "),t("h3",{attrs:{id:"convertstrtolistofint-st"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#convertstrtolistofint-st"}},[e._v("#")]),e._v(" ConvertStrToListOfInt(st)")]),e._v(" "),t("p",[t("code",[e._v("This function coverts string to list of integers.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("p",[t("strong",[e._v("string")]),e._v(" ("),t("em",[e._v("str")]),e._v(") – Works with any string")])])]),e._v(" "),t("h3",{attrs:{id:"checkifmethodortypeexists-modelclient-method-or-type-unittestmode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkifmethodortypeexists-modelclient-method-or-type-unittestmode"}},[e._v("#")]),e._v(" CheckIfMethodOrTypeExists(modelClient, method_or_type, unitTestMode)")]),e._v(" "),t("p",[t("code",[e._v("Check if SOAP method or type is present in your version of RFEM/RSTAB. Use it only in your examples. Unit tests except msg from SUDS where this is checked already.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("modelClient")]),e._v(" ("),t("em",[e._v("Model.clientModel")]),e._v(") – RFEM Model Client")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("method_or_type")]),e._v(" ("),t("em",[e._v("str")]),e._v(") – Method or type of SOAP client")])])])])]),e._v(" "),t("h3",{attrs:{id:"getaddonstatus-modelclient-addon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getaddonstatus-modelclient-addon"}},[e._v("#")]),e._v(" GetAddonStatus(modelClient, addOn)")]),e._v(" "),t("p",[t("code",[e._v("Check if Add-on is reachable and active. For some types of objects, specific Add-ons need to be enabled.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("modelClient")]),e._v(" ("),t("em",[e._v("Model.clientModel")]),e._v(") – RFEM model client")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("addOn")]),e._v(" ("),t("em",[e._v("enum")]),e._v(") – AddOn enumeration item")])])])])]),e._v(" "),t("h3",{attrs:{id:"setaddonstatus-modelclient-addon-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setaddonstatus-modelclient-addon-status"}},[e._v("#")]),e._v(" SetAddonStatus(modelClient, addOn, status)")]),e._v(" "),t("p",[t("code",[e._v("Activate or deactivate Add-on. For some types of objects, specific Add-ons need to be ennabled.")])]),e._v(" "),t("p",[e._v("Analysis addOns list:")]),e._v(" "),t("ul",[t("li",[e._v("material_nonlinear_analysis_active")]),e._v(" "),t("li",[e._v("structure_stability_active")]),e._v(" "),t("li",[e._v("construction_stages_active")]),e._v(" "),t("li",[e._v("time_dependent_active")]),e._v(" "),t("li",[e._v("form_finding_active")]),e._v(" "),t("li",[e._v("cutting_patterns_active")]),e._v(" "),t("li",[e._v("torsional_warping_active")]),e._v(" "),t("li",[e._v("cost_estimation_active")])]),e._v(" "),t("p",[e._v("Design addOns list:")]),e._v(" "),t("ul",[t("li",[e._v("stress_analysis_active")]),e._v(" "),t("li",[e._v("concrete_design_active")]),e._v(" "),t("li",[e._v("steel_design_active")]),e._v(" "),t("li",[e._v("timber_design_active")]),e._v(" "),t("li",[e._v("aluminum_design_active")]),e._v(" "),t("li",[e._v("steel_joints_active")]),e._v(" "),t("li",[e._v("timber_joints_active")]),e._v(" "),t("li",[e._v("craneway_design_active")])]),e._v(" "),t("p",[e._v("Dynamic addOns list:")]),e._v(" "),t("ul",[t("li",[e._v("modal_active")]),e._v(" "),t("li",[e._v("spectral_active")]),e._v(" "),t("li",[e._v("time_history_active")]),e._v(" "),t("li",[e._v("pushover_active")]),e._v(" "),t("li",[e._v("harmonic_response_active")])]),e._v(" "),t("p",[e._v("Special addOns list:")]),e._v(" "),t("ul",[t("li",[e._v("building_model_active")]),e._v(" "),t("li",[e._v("wind_simulation_active")]),e._v(" "),t("li",[e._v("geotechnical_analysis_active")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("modelClient")]),e._v(" ("),t("em",[e._v("Model.clientModel")]),e._v(") – RFEM model client")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("method_or_type")]),e._v(" ("),t("em",[e._v("str")]),e._v(") – method or type of SOAP client")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("status")]),e._v(" ("),t("em",[e._v("bool")]),e._v(") – in/active")])])])])]),e._v(" "),t("h3",{attrs:{id:"calculateselectedcases-loadcases-designsituations-loadcombinations-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calculateselectedcases-loadcases-designsituations-loadcombinations-model"}},[e._v("#")]),e._v(" CalculateSelectedCases(loadCases, designSituations, loadCombinations, model)")]),e._v(" "),t("p",[t("code",[e._v("This method calculate just selected objects - load cases, desingSituations, loadCombinations.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("loadCases")]),e._v(" ("),t("em",[e._v("list")]),e._v(") – list of load cases")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("designSituations")]),e._v(" ("),t("em",[e._v("list")]),e._v(") – list of design situations")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("loadCombinations")]),e._v(" ("),t("em",[e._v("list")]),e._v(") – list of load combinations")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("model")]),e._v(" ("),t("em",[e._v("RFEM Class")]),e._v(") – model to be edited")])])])])]),e._v(" "),t("h3",{attrs:{id:"firstfreeidnumber-memtype-parent-no-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firstfreeidnumber-memtype-parent-no-model"}},[e._v("#")]),e._v(" FirstFreeIdNumber(memType, parent_no, model)")]),e._v(" "),t("p",[t("code",[e._v("This method returns the next available Id Number for the selected object type. A geometric object has, in general, a parent_no = 0. The parent_no parameter becomes significant for example with loads.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("memType")]),e._v(" ("),t("em",[e._v("enum")]),e._v(") – object type enumeration item")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("parent_no")]),e._v(" ("),t("em",[e._v("int")]),e._v(") – object parent number")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("model")]),e._v(" ("),t("em",[e._v("int")]),e._v(") – model to be edited")])])])])]),e._v(" "),t("h3",{attrs:{id:"setmodeltype-model-type-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setmodeltype-model-type-model"}},[e._v("#")]),e._v(" SetModelType(model_type, model)")]),e._v(" "),t("p",[t("code",[e._v("This method sets the model type. The model type is E_MODEL_TYPE_3D by default.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("p",[t("strong",[e._v("model_type")]),e._v(" ("),t("em",[e._v("enum")]),e._v(") – model type enumeration item")])])]),e._v(" "),t("h3",{attrs:{id:"getmodeltype-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getmodeltype-model"}},[e._v("#")]),e._v(" GetModelType(model)")]),e._v(" "),t("p",[t("code",[e._v("The method returns a string of the current model type.")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("p",[t("strong",[e._v("model")]),e._v(" ("),t("em",[e._v("RFEM Class")]),e._v(") – model to be edited")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);