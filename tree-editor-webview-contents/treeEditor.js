// @ts-check



/** Could be generated from Ecore using EReferences present in metamodel. */
var exampleHierarchySchema = {
  root: ["EResource"],
  EResource: ["EPackage"],
  EPackage: ["EClass", "EDataType", "EEnum"],
  EClass: ["EAttribute", "EReference", "EOperation", "EAnnotation"],
  EAttribute: ["EAnnotation"],
};

// Default icons for ECore
var icons = {
  "EAnnotation": "data:image/gif;base64,R0lGODlhEAAQAOYAAD0xNlBBR8/KzFhJUE08RFlIUFRETEA0OkM3PXdnb3tvdcS8wFNETF1OVnRjbGVYX5mMk0o/RU1CSHZrcV1NVmFTW3xudpqOlX1zeYR6gIB2fNHMz9rV2GBTW2RXX2lcZGxfZ4J1fUY7Qoh9hI+Ei2hcZGtfZ25iapiPldnW2JSKkdPP0q6prbSus/+M/+zd8IpFoKdourJ6w7R9xbyIzMSV0tKv3d/H5uLM6ePO6ebS7KhsvNm+4vf28/b18tvXze3r5uPf1/Hv6/j39ff29N/a0efj3O3p4+rm4HRlWf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAEoALAAAAAAQABAAAAeHgEqCg4SFhoeIiYUsJycsioIggiaQSiUuGR+QEg8pGh4rKKKjoi1KERVDGB09R66vripKIhRECg04NEhINL26JEoIBT4TAy8zRkYzNjbII0oHGwY5DDoyMDAyNTUyQSFKAAJCNwE8O0VFMeoxRRaCSQRJQD/09fUJghwLCxAO/v//LlQaeCgQADs=",
  "EAttribute": "data:image/gif;base64,R0lGODlhEAAQALMAAPj50fj51vf41vj41mpiP3JmPX1sOZV4MYpyNZ18L////wAAAAAAAAAAAAAAAAAAACH5BAEAAAoALAAAAAAQABAAAAQoUMlJq7046817TmAYXgdgnsBxIeiJXIYgBMFQG1dB7DxReMCgcDiJAAA7",
  "EClass": "data:image/gif;base64,R0lGODlhEAAQAMQAAIKGgYKFgfj50fj51vf41vj41qCYbKGYbG1kP2piP3RoPHBlPXlqOoNvN35sOJN3Mo51NIlyNp18L5t7MJd4MP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABUALAAAAAAQABAAAAVLYCWOZGmeqKSu6ykJcCxI5yTH00kRxDAUP8rpcTAYj48T5AaDnCJMQeTU4PmAhcbJAQh4v44TI8o4KaKK08L6+y1OiIR8nkCg7qIQADs=",
  "EDataType": "data:image/gif;base64,R0lGODlhEAAQAMQAACo3Z3WGyLK84IKGgYKFgfj50fj51vf41vj41m1kP2piP3RoPHBlPXlqOoNvN35sOP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAQABAAAAVEICSOZGmeaIoGwAgEa8vCr8mKQI7D5T1DtZOghROgHCek6TEgOJ+PU6NArRYap4W1ujgxDgeDATFmnBKKtFqRULnfohAAOw==",
  "EEnum": "data:image/gif;base64,R0lGODlhEAAQALMAACo3Z3WGyLK84GpiP3FmPX1sOZV4MYpyNZ18L////wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAkALAAAAAAQABAAAAQwMMlJq7044wAmCFvHgZ/FSUCKgtU5JuUldKig3dQwEMVhILigjucDBm/D3u/IvEQAADs=",
  "EEnumLiteral": "data:image/gif;base64,R0lGODlhEAAQALMAAGpiP3FmPHFmPX1rOX1sOZV4MYpyNZ18L////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAgALAAAAAAQABAAAAQaEMlJq70468275wAQDEZxZKFAlOfnvnAsaxEAOw==",
  "EFactory": "data:image/gif;base64,R0lGODlhEAAQAMQAAKeto3N3cGNmYHt8cpOSgouCV5KJXKGXZ6edbIeEdZqPYZKIXKyhb5WMeKGUe6mZfcK3o9Swe8umdcundcqmdb6Zbb6abaBQQP///8DAwP///wAAAAAAAAAAAAAAAAAAACH5BAEAABoALAAAAAAQABAAAAVQoCaOZGmeaHoy15i9WmYibSy+cnm0rHsqvFrK0NqpIIXHY6FsQkoPAAEgjVgjj5IDIwBwrxFHqSEQEMoUiWTSKCUsFXh8nigF7vj8QMXva0IAOw==",
  "EGenericElementType": "data:image/gif;base64,R0lGODlhEAAQAKIAALS70aOuyJGlx0dpjwFGegE/bf///wAAACH5BAEAAAYALAAAAAAQABAAAAMraLrc/jDKuUizD18nxirLIDRD8AQeQwAPoClr+xrlmS7dF46bM1c9ijCSAAA7",
  "EGenericException": "data:image/gif;base64,R0lGODlhEAAQAKIAALS70aOuyJGlx0dpjwFGegE/bf///wAAACH5BAEAAAYALAAAAAAQABAAAAMxaLrc/jDKuUizD5tSnRgLpwxCMwThEoAMAaQKoCkubMgmqojG2nwPkkPDm7UulOQkAQA7",
  "EGenericSuperType": "data:image/gif;base64,R0lGODlhEAAQALMAAN7h68PJ2qOuyLW+05Glx0dpjwFGegE/bf///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAgALAAAAAAQABAAAAQ4EMlJq7046z1N9ReIHJ1FFJJHIgVRFcM4kQNKGcCh7wcgpoHZJPBjCYQSgW1yQrJcH2exdONYNxEAOw==",
  "EGenericType": "data:image/gif;base64,R0lGODlhEAAQAKIAALS70aOuyJGlx0dpjwFGev///wAAAAAAACH5BAEAAAUALAAAAAAQABAAAAMoWLrc/jDKuUizD18nxhtCMwRP4DEE8ACakq5tMZbn0n3h5sSVTv2RBAA7",
  "EGenericTypeArgument": "data:image/gif;base64,R0lGODlhEAAQALMAAN7h68PJ2qOuyLW+05Glx0dpjwFGegE/bf///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAgALAAAAAAQABAAAAQ4EMlJq7046z1N9Rf4WURxFURVCNKBuIhgUkbwTm4gSgYA44AdojC4tRCD2aR0hKEsQh5GGOVYKxEAOw==",
  "EGenericWildcard": "data:image/gif;base64,R0lGODlhEAAQAKIAALS70aOuyJGlx0dpjwFGegE/bf///wAAACH5BAEAAAYALAAAAAAQABAAAAM0aLrc/jDKuUizD5etMBODUSzjIDRD0IxByBAAMxqA18XKTNtGSi6tBuhhcnh0vMqFwpwkAAA7",
  "EObject": "data:image/gif;base64,R0lGODlhEAAQANUAAN3i6Nni7NHY4NHY3d3k6ODk5eHk4dfa1+Lk4dja1djY19LQwuDczMbDt+jl2eHcy+nl2JiOcenl2d3a0ebk3vXoyNTPwunk2N3Rt+ndwendwuDazPXmyN3QtfXmyerdwuncwfDm0eTRruTRsPXmy/XmzPDl0a6PXquPYIp2VJuKcKmbh7Wrn////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAC0ALAAAAAAQABAAAAZgwJZwSCwaj8gkkqVKpVSs5CrSKBQakdWRFQl4v5FoUbUgCM4DgEVlTE0QisMhYaCk2hLIg/HYOC53Yx0hIBoZHyYYbEUsKBweFRySKGJFKyciJCUjJ1pLTU+VSqOkpURBADs=",
  "EOccurrenceN": "data:image/gif;base64,R0lGODlhEAAQAIAAABk/dv///yH5BAEAAAEALAAAAAAQABAAAAIVjI+py+0Po5y0SoAjMPv17nyQaBkFADs=",
  "EOccurrenceNToM": "data:image/gif;base64,R0lGODlhEAAQAIAAABk/dv///yH5BAEAAAEALAAAAAAQABAAAAIejI+py+0Po5y0MoBVBocH333iCBrcaaYI6rUiO04FADs=",
  "EOccurrenceNToUnbounded": "data:image/gif;base64,R0lGODlhEAAQAJEAABk/dsXY8////wAAACH5BAEAAAIALAAAAAAQABAAAAIilI+py+0Po5y0NoAVCAEcL4BHt32GGGLqySJkYIayt3VVAQA7",
  "EOccurrenceNToUnspecified": "data:image/gif;base64,R0lGODlhEAAQAIMAABk/dpm/9v///////5DuGJEHOP///5EHMpEGq5EG6wAAABIojBIoZAAAAAAAAAAAACH5BAMAAAMALAAAAAAQABAAAAQwcMhJq7046827/6AkjORAjpQQAEAgmCyAirIgw+Mt5i5uvxOb6/Urnko+mZIH/EQAADs=",
  "EOccurrenceOne": "data:image/gif;base64,R0lGODlhEAAQAIAAABk/dv///yH5BAEAAAEALAAAAAAQABAAAAIRjI+py+0Po5y0TiABzjdrixQAOw==",
  "EOccurrenceOneToN": "data:image/gif;base64,R0lGODlhEAAQAIAAABk/dv///yH5BAEAAAEALAAAAAAQABAAAAIbjI+py+0Po5y0OrCARlvh8BkhJ5JeKW7Yx1YFADs=",
  "EOccurrenceOneToUnbounded": "data:image/gif;base64,R0lGODlhEAAQAJEAABk/dsXY8////wAAACH5BAEAAAIALAAAAAAQABAAAAIglI+py+0Po5y0NrBACNiAnnAaAh7fCZaHGJifgHUaZxUAOw==",
  "EOccurrenceOneToUnspecified": "data:image/gif;base64,R0lGODlhEAAQAIMAABk/dpm/9v///////5DuGJEHOP///5EHMpEGq5EG6wAAABIojBIoZAAAAAAAAAAAACH5BAMAAAMALAAAAAAQABAAAAQtcMhJq7046827/+AgjORUmgEABII0Aq0JC7CrxibNyrjN4jSS8CRSwY6vXSgCADs=",
  "EOccurrenceZero": "data:image/gif;base64,R0lGODlhEAAQAJEAABk/dp++6////wAAACH5BAEAAAIALAAAAAAQABAAAAIXlI+py+0Po5y0ygBAgMD0931OCGGadRQAOw==",
  "EOccurrenceZeroToN": "data:image/gif;base64,R0lGODlhEAAQAJEAABk/dp++6////wAAACH5BAEAAAIALAAAAAAQABAAAAIflI+py+0Po5y0tgBAUBkcL4AISBriZ6Yhp2LaWq5TAQA7",
  "EOccurrenceZeroToOne": "data:image/gif;base64,R0lGODlhEAAQAJEAABk/dp++6////wAAACH5BAEAAAIALAAAAAAQABAAAAIelI+py+0Po5y0tgBAWAB18XkhaIzH+JklgmlkmlUFADs=",
  "EOccurrenceZeroToUnbounded": "data:image/gif;base64,R0lGODlhEAAQAJEAABk/dp++68XY8////yH5BAEAAAMALAAAAAAQABAAAAIknI+py+0Po5y0tgBASEAIcICDeHxdaJBjxqYuYgoHpo1291UFADs=",
  "EOccurrenceZeroToUnspecified": "data:image/gif;base64,R0lGODlhEAAQAIMAABk/dpm/9p++6////////wAAAAAAAAAAAJEGq5EG6wAAABIojBIoZAAAAAAAAAAAACH5BAMAAAQALAAAAAAQABAAAAQykMhJq7046827/6A0jCRBlmIAAMFgCqvgisBYm/Vwi3aL2zNay6UDnk4iGEBWy7GCnggAOw==",
  "EOperation": "data:image/gif;base64,R0lGODlhEAAQAIMAAAAAgD8/Xz9ff19/n3+fv6bK8P/78AAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAAAgALAAAAAAQABAAAAQ6EMlJq704awGERkBwFEcAZAFRFGqACeNwDMThWcB6GAdBnBYYQUazYQIs38CFCfVKwAzn9qlar9hJBAA7",
  "EPackage": "data:image/gif;base64,R0lGODlhEAAQAMQAAHM5hYpFoIRCmX4/klgsZqBXt6xswLV8x5JJqmw2fppNs5tPtJ1StZ1TtaNduqdkvbJ4xbqGy8ec1f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAAQABAAAAVM4CSOZGmeaKpOxFowMAAzxbkckdHgxnIqEQkkEIQoTggD5JFQPhAmAiAQSFipgFYpwEvwAidBkSgUnAbOgHNwcgzegPfAsdKu7vhJCAA7",
  "EParameter": "data:image/gif;base64,R0lGODlhEAAQAIcAAAAAgD8/X5mZzIODlz9ff19/n3+fv6bK8MXd9dvq+b/M2azB1czZ5f797/3yxv3xxv3xx/3yx/zmnr2EFv/9+bV6E651ErR7E7qAFbqBFbmAFalvEa91Eq50Eq90E691E6ZrEFpaWgAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJEJRZEJThInmAIAJBIlhAAAApFBkP2QAJAQBRIkLAAAABIk/JDuGJEJcJfkwJE+b5E+YgACCBIoPBIoFJEJRZEJThIn6AIAJBIl1AAAApFBkP2QAJAQBRIkfAAAABIlTJDuGJEJcJfkwJE+b5E+YgACCBIojBIoZBIk+DoAAJEHMgAAUToVuDoAAGGQCBIk0AAAAhInFJDuGJEHOP///5EHMpEGq5EG6xIn2AACfAAAAEqTIBInRJEicJEVlpEG6wAAAAAE/AAxeBIlZPAAAJEHMgAAN/AQ2PAAAPBFwBIlPJDuGBIngJDuGJEHOP///5EHMpEGq5EG6wABnAABrQAAAQAAAP38AACAAXC26AAAZxIlgHMAXAAAAAoACJE+iAACGgAAAJEGq+8AABIojAAAxgAAAGUAXGwAY8gAxv38ABIl4AAAArPfoAAAEEqTKHMAXG4AYWIAZHgAbzMAXDQALjUATUqYKGwAY3AAaWUAc2UAXBImSDoAAJEHMgAAAzoHGDoAAHJFcBImIEqYMBIoZJDuGJEHOP///5EHMpEGq5EG66GmIAAADAAAADoAADoAADoBeBInOJEOkToGCJEFbRsL/EqTKBsMAO8AAAAAAEqTIDoBeBInQEqTKAAAAIAYmAAAAHC26BIpHFcwSBIm7AAAEQABAIIJYBIpHAAACTScKcHEDDEMCKimjBxeiwAAEngAAAgAEgAMoQEAAAEAAAEAAEAAAEAAAAAAAAAAAAAAAAcAAHAQANQAACH5BAEAACMALAAAAAAQABAAAAhsAEcIHEiwoMGDCBMqFEgAAIGEEyYIGCDigIgAAA5OaDCBAYIDBg4EGIihZMkGDTAoCFHAgIiHIyo4mEnTQYURIgwYyDjCg0+fEiR4WNnypcENEjYkWKCzwEiDIEBMzHmRZ8KGMBdq3cq164iAADs=",
  "EReference": "data:image/gif;base64,R0lGODlhEAAQAMQAAE9UXkxgdEV/qEhzkjdAQvj50fj51vf41mpiP3JmPcC4n31sOZV4MYpyNcu9m518L////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAQABAAAAU0ICSOZGmeaKqubJs+cAxDgMkUeO7QRNnkBYFgEAAAeqPF4WBoGhS8UgJBrSZorqx2yxWFAAA7",
  "EStringToStringMapEntry": "data:image/gif;base64,R0lGODlhEAAQAMQAAHdnb3RjbHxudpqOlYJ1fYh9hI+Ei5iPlZSKkbSus4pFoKdourJ6w7R9xbyIzMSV0tKv3ahsvNvXzePf19/a0efj3O3p4+rm4P///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABgALAAAAAAQABAAAAVSICaOZGmeaKqqyeG+8JtgiGXf+I1gxuX8josQGDRgCpUGBNKoOJXMSgFDmDAeD4Zie81OCBgBZUGOUM5kMkWAAUje8DgcgBkE7vg8frDq+/9/IQA7",
  "ETypeParameter": "data:image/gif;base64,R0lGODlhEAAQAMQAANrd6LS70aOuyJGlx0dpj6O0x9La4wFGeuDp7/z62/797/vyufvusPvll72EFrZ8FLZ9Fa1yEq1zEqZrEP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABQALAAAAAAQABAAAAVQICWOZGmeaKquouOUBxWXjvKKs9y6tU0NhBFhQHEkjkiHQTASBB+LqJQBAYwCMUljy40gAtfYZDzZTigFpshJKp9/QdGw/caNcqkYnsUvhQAAOw==",
};

// Icon could be configured as default + optional overrides

var exampleTree = {
  type: "root",
  children: [
    {
      type: "EResource",
      name: "MyEcore.ecore",
      icon: "",
      id: "1",
      properties: [],
      children: [
        {
          type: "EPackage",
          name: "my-ecore",
          icon: "",
          id: "2",
          properties: [],
          children: [
            {
              type: "EClass",
              name: "Person",
              icon: "",
              id: "3",
              state: {
                selected: true,
                valid: false,
                dirty: true,
              },
              properties: [],
              children: [
                {
                  type: "EAttribute",
                  name: "age",
                  icon: "",
                  id: "4",
                  properties: [
                    {name: "Value", value: 25, label: "This is JSON-Forms territory"}
                  ]
                }
              ]
            },
            {
              type: "EClass",
              name: "MyOtherClass",
              icon: "",
              id: "4",
              properties: [],
              children: []
            }
          ]
        }
      ]
    }
  ]
};



(function () {
  // @ts-ignore
  const vscode = acquireVsCodeApi();

  const data = {
    tree: null,
    selectedNode: null,
  };

  const dom = {
    app: document.getElementById("editorApp"),
    treePane: undefined,
    propertiesPane: undefined,
    actionBarPane: undefined,
  };
  dom.treePane = createPane(dom.app, "tree");
  dom.propertiesPane = createPane(dom.app, "properties");
  dom.actionBarPane = createPane(dom.app, "actionbar");

  function showPropertiesForNode(treeNode) {
    console.log("Showing properties for node", treeNode);

    const pane = dom.propertiesPane;
    pane.innerHTML = ""; // Clears children
    const propTable = document.createElement("table");
    const title = document.createElement("h2");
    title.innerText = "Properties for " + treeNode.type;
    pane.appendChild(title);
    pane.appendChild(propTable);
    if (treeNode.properties) {
      treeNode.properties.forEach(prop => {
        const propRow = document.createElement("tr");
        const propNameCell = document.createElement("td");
        const propValueCell = document.createElement("td");
        const propValue = document.createElement("input");
        const propName = document.createElement("span");
        propRow.appendChild(propNameCell);
        propNameCell.appendChild(propName);
        propRow.appendChild(propValueCell);
        propValueCell.appendChild(propValue);
        
        
        propName.textContent = prop.name || "<UNNAMED>";
        propName.title = prop.label;
        propValue.value = prop.value;
        propValue.type = "text"; // TODO dropdown, numbers etc. But JSON-Forms should replace this.
        propValue.addEventListener("change", (event) => {
          vscode.postMessage({type: "edit", data: {
            type: "propertyValueChange",
            node: treeNode,
            property: prop.name,
            oldValue: prop.value,
            newValue: propValue.value,
          }});

          prop.value = propValue.value;
          treeNode.state = {...treeNode.state, dirty: true};
        });

        propTable.appendChild(propRow);
      });
    }
  }

  function setSelectedNode(newNode) {
    const oldNode = data.selectedNode;
    data.selectedNode = newNode;
    console.log("Selected node", newNode, document.getElementById("node-" + newNode.id));
    if (oldNode && oldNode === newNode) {
      return; // Avoid recreating properties pane.
    }
    showPropertiesForNode(newNode);
  }

  function createPane(parent, id) {
    const pane = document.createElement("div");
    pane.id = id;
    pane.classList.add(id + "Pane", "pane");
    parent.appendChild(pane);
    return pane;
  }

  const caretClickListener = (function toggleOnClick(event) {
    event.stopPropagation();
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
  function treeToDom(treeNode) {
    const element = document.createElement("li");
    element.textContent = treeNode.name || "<UNNAMED>";
    element.id = "node-" + treeNode.id;

    // Icon
    if (treeNode.type in icons || treeNode.icon) {
      const icon = document.createElement("img");
      icon.classList.add("treeNodeIcon");
      const iconDataUri = treeNode.icon || icons[treeNode.type];
      icon.src = iconDataUri;
      element.prepend(icon);
    }

    // Children
    if (treeNode.children && treeNode.children.length) {
      const caret = document.createElement("span");
      caret.classList.add("caret");
      caret.addEventListener("click", caretClickListener);
      element.prepend(caret);

      const children = document.createElement("ol");
      children.classList.add("nested");
      treeNode.children.forEach(child => {
        children.appendChild(treeToDom(child)); // Recurse
      });
      element.appendChild(children);
    }

    // Selection
    element.addEventListener("click", event => {
      event.stopPropagation();
      setSelectedNode(treeNode);
    });

    return element;
  }

  // Dummy data for testing the tree.
  data.tree = exampleTree;
  const root = document.createElement("ol");
  root.classList.add("tree");
  root.appendChild(treeToDom(exampleTree.children[0]));
  dom.treePane.appendChild(root);

  // Send ready after application is set up
  vscode.postMessage({ type: 'ready' });
})();
