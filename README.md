<<<<<<< HEAD
# agents-form-builder
UI for creating/building form structure 
## Installation
1. clone this repo
2. npm install
3. npm start
- In case you get this error: "Property 'placeholder' does not exist on type 'DraggableProvided'"
  - open this file: **...\form-builder-app\form-builder-app\node_modules\@types\react-beautiful-dnd\index.d.ts**
  - add to DraggableProvided (line 657-662) the following property: --- `placeholder?: React.ReactElement<HTMLElement> | null;` ---
  - the inteface should look like the following:
      ```
      export interface DraggableProvided {
        innerRef(element?: HTMLElement | null): any;
        draggableProps: DraggableProvidedDraggableProps;
        placeholder?: React.ReactElement<HTMLElement> | null;
        dragHandleProps?: DraggableProvidedDragHandleProps;
    }
    ```


=======
# agents-form-builder
UI for creating/building form structure 
## Installation
1. clone this repo
2. npm install
3. npm start
- In case you get this error: "Property 'placeholder' does not exist on type 'DraggableProvided'"
  - open this file: **...\form-builder-app\form-builder-app\node_modules\@types\react-beautiful-dnd\index.d.ts**
  - add to DraggableProvided (line 657-662) the following property: --- `placeholder?: React.ReactElement<HTMLElement> | null;` ---
  - the inteface should look like the following:
      ```
      export interface DraggableProvided {
        innerRef(element?: HTMLElement | null): any;
        draggableProps: DraggableProvidedDraggableProps;
        placeholder?: React.ReactElement<HTMLElement> | null;
        dragHandleProps?: DraggableProvidedDragHandleProps;
    }
    ```


>>>>>>> 92b575ee54150e8cd1d8f7876357fe1a8ad08de4
